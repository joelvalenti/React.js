import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ConditionalSection from './sections/Conditional';
import Forms from './sections/Forms';

import cars from './data/cars.json'

class CarItem extends Component {

  render() {
    const { car } = this.props //car va entre llaves porque es un objeto.
    return (
      <li>
        <p>Nombre: {car.name}</p>
        <p>Marca: {car.company}</p>
      </li>
    )
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
  }

  handleMouseMove = (e) => { //Usar siempre arrow functions o tendremos error con referencias del this.
    const { clientX, clientY } = e
    this.setState({ mouseX: clientX, mouseY: clientY })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ConditionalSection />
          <Forms />
          <ul>
            {
              cars.map(car => {
                return <CarItem key={car.id} car={car} />  //La key siempre va en el map.
              })
            }
          </ul>
          <div
            onMouseMove={this.handleMouseMove}
            style={{ border: '1px solid #000', marginTop: 10, padding: 10 }}>
            <p>{this.state.mouseX}, {this.state.mouseY} </p>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
