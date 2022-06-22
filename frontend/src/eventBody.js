import React, { Component} from 'react';
import './css/fileRead.css';
import {namespaces} from './globalVariables.js'

class LocalFileRead extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            value: 'kube-system',
            json: []
        }
    }


      
    _handleChange = (event) => {


        var url = 'http://localhost:3001/events';
        fetch(url, {
            headers: {
                'namespace': event.target.value
            },
        }).then(response => response.json())
        .then(data =>
           this.setState({
               json: data[0]
          })

        );
      }



    render() {
    
        
        //Mega large constant list with all of my beautiful namespaces, maybe do this dynamic in the future but a long list works for now



        console.log(this.state.json)
        //construct an object that contains our json data and format it 
        const listedItems = 
            this.state.json.map((d) => 
                <tr>
                    <td>
                    {d.metadata.creationTimestamp}
                    </td>
                    <td>
                    {d.involvedObject.name}
                    </td>
                    <td>
                    {d.message}
                    </td>
                </tr>
            )


        
        return (
        <div >
            <select className="Selector" onChange={this._handleChange} value={this.props.namespace}>
                {namespaces.map((item) => (
                    <option key={item.namespace}>{item.namespace}</option>
                ))}

            </select>
            <div className="test">
            <table>
            <tr>
                <th>Timestamp</th>
                <th>Object</th>
                <th>Event</th>
            </tr>
            {listedItems}
            </table>        
            
            </div>


        </div>
        );
    }

}


export default LocalFileRead;