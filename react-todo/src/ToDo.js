import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoItem from './components/ToDoItem';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // this is where the data goes
            list: [
                {id: 1, text: '리액트 스터디', checked: true, regDate: '2018-12-20', modDate: '2018-12-28'},
                {id: 2, text: '자바 스터디', checked: false, regDate: '', modDate: ''},
                {id: 3, text: 'jpa 스터디', checked: true, regDate: '', modDate: ''},
                {id: 4, text: '스프링 스터디', checked: false, regDate: '', modDate: ''},
            ],
            todo: '',
        };
    };

    createNewToDoItem = () => {
        const {list, todo} = this.state;
        this.setState({
            todo: '',
            list: list.concat({
                id: this.id++,
                text: todo,
                checked: false,
                regDate: '',
                modDate: '',
            }),
        });
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                this.createNewToDoItem();
            }
        }
    };

    handleInput = e => {
        this.setState({
            todo: e.target.value
        });
    };

    handleCheckBox = id => {
        const { list } = this.state;
        const index = list.findIndex( todo => todo.id === id);
        const selected = list[index];
        const nextTodos = [...list];
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };
        this.setState({
            list : nextTodos
        })
    };

    // this is now being emitted back to the parent from the child component
    deleteItem = indexToDelete => {
        const list = this.state.list;
        this.setState({
            list: list.filter((todo) => todo.id !== indexToDelete)
        });
    };

    render() {
        const {list, todo} = this.state;
        const {
            createNewToDoItem,
            handleCheckBox,
            handleInput,
            handleKeyPress,
            deleteItem
        } = this;
        return (
            <div className="ToDo">
                <div className="container  m-5">
                    <h1 className="ToDo-Header mb-3">To do list</h1>
                    <div className="ToDo-Container">
                        <form>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Todo item" value={todo}
                                       onChange={handleInput}
                                       onKeyPress={handleKeyPress}/>
                                <div className="input-group-append">
                                    <button type="button" className="ToDo-Add btn btn-primary"
                                            onClick={createNewToDoItem}>Add Todo
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="ToDo-Content">
                            {list.map((todo, key) => {
                                    return <ToDoItem
                                        key={key}
                                        item={todo}
                                        deleteItem={deleteItem}
                                        toggleItem={handleCheckBox}
                                    />;
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDo;
