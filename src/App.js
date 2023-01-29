import React, {Component} from 'react';
import './App.css';
import {ButtonGroup1} from './demo-component/ButtonGroup1'
import {ButtonGroup2} from './demo-component/ButtonGroup2'
import {Link,Outlet} from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            themeColor: "blue",
            btnId: 0
        }
    }

    handleClick(color) {
        console.log("app: " + color);
        const number = getRandomInt(0, 10000);
        this.setState({
                themeColor: color,
                btnId: number
            }
        )
    }

    render() {
        return (
            <div className="App">
                {/* todo 1. route demo*/}
                <h1>router 6 new feature</h1>
                <nav style={{
                    borderBottom:"solid #000",
                    paddingBottom:"1rem"
                }}>
                    <Link to="/invoices">invoices</Link> |{" "}
                    <Link to="/expenses">expenses</Link> |{" "}
                    <Link to="/counter">counter</Link>
                </nav>
                <Outlet></Outlet>
                {/* todo 2. this is first demo*/}
                {/*<div>*/}
                {/*<h1 style={{color: this.state.themeColor}}> this my first one react</h1>*/}
                {/*<ButtonGroup1 themeColor={this.state.themeColor}*/}
                {/*              handleClick={(color) => this.handleClick(color)}/>*/}

                {/*<h1 style={{color: this.state.themeColor}}> this my first second react</h1>*/}
                {/*/!*use key to render component everytime*!/*/}
                {/*<ButtonGroup2 key={this.state.btnId} themeColor={this.state.themeColor}*/}
                {/*              handleClick={(color) => this.handleClick(color)}/>*/}
                {/*</div>*/}
            </div>
        );
    }


}

export default App;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

