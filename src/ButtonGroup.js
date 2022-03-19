import React, { Component } from 'react';
import './App.css';

class ButtonGroup extends Component {



  render() {
    return (
      <div>

        <div>
          <button style={{color:this.props.themeColor}} onClick={()=>this.props.handleClick('red')}>111</button>
        </div>

        <div>
            <button style={{color:this.props.themeColor}} onClick={()=>this.props.handleClick('green')}>222</button>
        </div>
      </div>
    );
  }


}

export default ButtonGroup;
