import React from 'react';
import './css/data.css';
import EventBody from './eventBody.js'

class DataBody extends React.Component {

    render(){
    return (
    <div className="Test">
        <header className="">
            {this.props.navBar}
           <div>
            <EventBody />
           </div>
           </header>
    </div>

    )
    }
}


export default DataBody;


