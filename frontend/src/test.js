import React from 'react';
import './App.css';
import LocalFileRead from './fileRead.js'

class Test extends React.Component {

    render(){
    return (
    <div className="App">
        <header className="App-header">
            {this.props.navBar}
           <div>
            <LocalFileRead />
           </div>
           </header>

    </div>

    )
    }
}


export default Test;


