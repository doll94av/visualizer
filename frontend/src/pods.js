import React from 'react';
import './css/data.css';
import PodBody from './podsBody'

class DataBody extends React.Component {

    render(){
    return (
    <div className="Test">
        <header className="">
            {this.props.navBar}
           <div>
            <PodBody />
           </div>
           </header>
    </div>

    )
    }
}


export default DataBody;


