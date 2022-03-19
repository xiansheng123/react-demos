import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import ButtonGroup from "./ButtonGroup";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            themeColor: "yellow"
        }
    }

    handleClick(color) {
        console.log("app: " + color)
        this.setState({
                themeColor: color
            }
        )
    }

    render() {
        return (
            <div className="App">
                <h1 style={{color: this.state.themeColor}}> this my first one react</h1>
                <ButtonGroup style={{color: this.state.themeColor}}
                             handleClick={(color) => this.handleClick(color)}></ButtonGroup>
            </div>
        );
    }


}

export default App;
