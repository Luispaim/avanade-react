import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showImage: true}
  }

  toggle = () => {
    this.setState({ showImage: !this.state.showImage })
  }

  render () {
   
    const { person } = this.props
    const { showImage } = this.state
    console.log(showImage)
    return (
      <div className="App">
        <header className="App-header">
          {
            showImage && 
            <img src={logo} className="App-logo" alt="logo" />
          }
          <button type="button" onClick={this.toggle}>
            {showImage ? 'Esconder Imagem' : 'Mostrar Imagem'}
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {person.name}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
