import logo from './logo.svg';
import './css/App.css';
import DataBody from './data'
import React from 'react';



//main logic function
function App() {

  return (
    <MainBody />
  );

}


class MainBody extends React.Component {


  state = {
    desiredPage: 'Home' 
  }

  onButtonClick(event) {
    this.setState({
      desiredPage: event.target.name
    })
  }


  //we return the imported object that we want to render, this should be based off of the state
  render() {

    //construct buttons
    var buttonList = ["Home", "Data"];
    for(var i = 0; i < buttonList.length; i++) {
      buttonList[i] = <Buttons name={buttonList[i]} buttonClick={this.onButtonClick.bind(this)} className="bn3637 bn37"/>
    }

    const listedButtons = buttonList.map((button) =>
    button
   );


    if(this.state.desiredPage === "Home") {
      return (
      <div className="App">
        <header className="App-header">
          <h1>
          Support Bundle Visualizer
          </h1>
          <p>
          To get going, click onto the data tab and sort through the relevant namespaces, hopefully this is easier to read than JSON in notepad++
          </p>
          {listedButtons}

        </header>
      </div>
      )
    }

    if(this.state.desiredPage === "Data") {
      return (
        <DataBody navBar={listedButtons} />
      )
    }
  
  
  //end render
  }

}






class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(i) {
    //change both <bodyFeild or another div added later> as well as the PageDescription and Project descriptoon

  }

  render() {
    return (
      <a href="/#" name={this.props.name} onClick={this.props.buttonClick} className={this.props.className}>{this.props.name}</a>
    );
  }
}

export default App;