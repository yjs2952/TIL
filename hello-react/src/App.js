import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        const text = '당신은 어썸한가?';
        const condition = false;
        const style = {
            backgroundColor: 'gray',
            border: '1px solid pink',
            height: Math.round(Math.random() * 300) + 50,
            width: Math.round(Math.random() * 300) + 50,
            WebkitTransition: 'all',
            MozTransition: 'all',
            msTransition: 'all'
        };
        return (
            <div className='my-div'>
                <div>
                    <h1>리액트 안녕!</h1>
                    <h2>{text}</h2>
                    {
                        condition && '보여주세요'
                    }
                    <div style={style}></div>
                </div>
            </div>
        );
    }
}

export default App;
