import React, { Component} from 'react';

//default initalization 
var x = [""]


class LocalFileRead extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            value: 'kube-system',
            json: []
        }
    }


      
    _handleChange = (event) => {

        fetch('http://localhost:3001/events')
        .then(response => response.json())
        .then(data =>
         //  this.setState({
        //       value: data
          //})
          console.log(data)
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
            }
        ]


   

        return (
        <div >
            <select onChange={this._handleChange} value={this.props.namespace}>
                {all.map((item) => (
                    <option key={item.namespace}>{item.namespace}</option>
                ))}

            </select>
            <div>
                        
                {this.state.json}

            </div>


        </div>
        );
    }

}


export default LocalFileRead;