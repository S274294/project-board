import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoardContainer from "./app/board/container/BoardContainer"
import {createStore} from "redux";
import {Provider} from "react-redux";
import boardAppReducers from "./app/board/reducer/index";

const store = createStore(boardAppReducers);

ReactDOM.render(<Provider store={store}>
                    <BoardContainer/>
                </Provider>, document.getElementById('root'));
export default store;
