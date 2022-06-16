import React, { Component} from 'react';
import './fileRead.css';
//default initalization 
var x = []


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
        const all = [
            {
               namespace: 'capa-system' 
            },
            {
                namespace: 'kube-system'
            },
            {
                namespace: 'default'
            }
        ]



        const listedItems = this.state.json.map((d) => 
            <div id=""key={d.name}>
                {d.involvedObject.name} 
                {d.message}
            </div>)
        console.log(this.state.json)
        return (
        <div >
            <select onChange={this._handleChange} value={this.props.namespace}>
                {all.map((item) => (
                    <option key={item.namespace}>{item.namespace}</option>
                ))}

            </select>
            <div className="test">
                        
                {listedItems}
            </div>


        </div>
        );
    }

}


export default LocalFileRead;