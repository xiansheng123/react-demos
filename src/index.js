import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Invoices from "./demo-component/Invoices";
import Expenses from "./demo-component/Expenses";
import {PageContext} from "./context";
import Counter from "./demo-component/Counter";
import {ButtonGroupParent} from "./demo-component/ButtonGroupParent";

const rootElement = document.getElementById('root')

// react 18
const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
    <PageContext.Provider value={{
        token:"token2",
        name:"name2",
    }}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="/invoices" element={<Invoices/>}></Route>
                <Route path="/expenses" element={<Expenses/>}></Route>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/buttonGroupParent" element={<ButtonGroupParent/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    </PageContext.Provider>
)

// react 17
// ReactDOM.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App/>}>
//                 <Route path="/invoices" element={<Invoices/>}></Route>
//                 <Route path="/expenses" element={<Expenses/>}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>,
//     rootElement
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
