import React, {Component} from 'react';
import './ToDoItem.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class ToDoItem extends Component {
    render() {
        const {item, deleteItem, toggleItem} = this.props;
        return (
            <div className="ToDoItem alert alert-success d-flex flex-row align-items-center">
                <div className="mr-5">
                    <input type="checkbox" onChange={() => toggleItem(item.id)} value={item.id} checked={item.checked}/>
                </div>
                <div className={`todo-text ${item.checked && 'checked'}`}>
                    {item.text}
                </div>
                <div className="mx-5">
                    <div>
                        작성일 : {item.regDate}
                    </div>
                    <div>
                        {item.modDate && `수정일 : ${item.modDate}`}
                    </div>
                </div>
                <button type="button" className="close" onClick={() => deleteItem(item.id)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

export default ToDoItem;
