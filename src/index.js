import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import View from './View/view';
// import 'bootstrap/dist/modal'
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <View></View>
    </BrowserRouter>

);


// ReactDOM.render(
//     <BrowserRouter>
//         <View></View>
//     </BrowserRouter>,
//     document.getElementById('root')
// )
