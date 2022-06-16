import React, { Component } from 'react';




class LocalFileRead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'kube-system'
        }
    }


    _handleChange = (event) => {
        this.setState({ value: event.target.value })
        console.log(event.target.value)
      }

    render() {

        //each top level file will have an associated name so we import all['kube-system'] in our div
        const context = require.context('./json', true, /.json$/);
        const all = {};
        context.keys().forEach((key: any) => {
        const fileName = key.replace('./', '');
        const resource = require(`./json/${fileName}`);
        const namespace = fileName.replace('.json', '');
         all[namespace] = JSON.parse(JSON.stringify(resource));
 
        });
        


        return (
        <div >
            <select onChange={this._handleChange} value={this.state.value}>
                {Object.keys(all).map(name => (
                <option key={name} value={name}>
                    {name}
                </option>

                ))}
             

            </select>


            {all['kube-system'].map((record, i) => <div>{record.metadata.name} - {record.status.phase} </div>)}

        </div>
        );
    }

}


export default LocalFileRead;