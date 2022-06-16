import React from 'react';
import './css/data.css';
import LocalFileRead from './fileRead.js'

class DataBody extends React.Component {

    render(){
    return (
    <div className="Test">
        <header className="">
            {this.props.navBar}
           <div>
            <LocalFileRead />
           </div>
           </header>
    </div>

    )
    }
}


export default DataBody;


