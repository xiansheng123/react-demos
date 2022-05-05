import React, {Component} from 'react';
import '../App.css';

export class ButtonGroup1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var themeColor = this.props.themeColor
        return (
            <div>

                <div>
                    <button style={{color: themeColor}} onClick={() => this.props.handleClick('red')}>red</button>
                </div>

                <div>
                    <button style={{color: themeColor}} onClick={() => this.props.handleClick('green')}>green</button>
                </div>
            </div>
        );
    }


}
