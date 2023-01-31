import React, {Component} from 'react';
import './App.css';
import {Link, Outlet} from "react-router-dom";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            themeColor: "blue",
            btnId: 0
        }
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
                    <Link to="/counter">counter</Link>|{" "}
                    <Link to="/buttonGroupParent">ButtonGroupParent</Link>

                </nav>
                <Outlet></Outlet>
                {/* todo 2. this is first demo*/}
                {/*<div>*/}
                {/*<h1 style={{color: this.state.themeColor}}> this my first one react</h1>*/}
                {/*<ButtonGroup1 themeColor={this.state.themeColor}*/}
                {/*              handleClick={(color) => this.handleClick(color)}/>*/}

            </div>
        );
    }


}

export default App;



