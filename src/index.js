import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import BoardContainer from "./app/board/container/BoardContainer"
import { createStore } from "redux";
import { Provider } from "react-redux";
import boardAppReducers from "./app/board/reducer/index";
import { create } from 'jss';
import { StylesProvider, jssPreset, createGenerateClassName } from '@material-ui/styles';

const jss = create({
    ...jssPreset(),
    insertionPoint: document.getElementById('jss-insertion-point'),
});
const generateClassName = createGenerateClassName();
const store = createStore(boardAppReducers);

ReactDOM.render(
    <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Provider store={store}>
            <BoardContainer />
        </Provider>
    </StylesProvider>, document.getElementById('root'));
export default store;
