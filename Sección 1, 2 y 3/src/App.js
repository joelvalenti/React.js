import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component{
  render () {

    const {
      arrayOfNumbers,
      text,
      number,
      boolean,
      multiply,
      title

    } = this.props 
    /*
    Junto todo en una constante para no llamar tantas veces a this.props
    Aclaración: las props son de lectura, es decir, inmutables. NO puedo cambiarles el valor
    haciendo por ejemplo: this.props.text = <h1>Hola<h1>.
    */

    const mappedNumbers = arrayOfNumbers.map(multiply)
    const booleanText = boolean ? 'Hola' : 'Chau'

    return ( 
      <div>
      {title}
      <p>text: {text}</p>
      <p>number: {number}</p>
      <p>boolean: {booleanText}</p>
      <p>map with multiply props function {mappedNumbers.join(', ')}</p>
      <p>{this.props.hola}</p>
    </div>
    )
  }
}

Text.defaultProps = { 
  hola: 'Este es un valor por defecto.'
}
/*
defaultProps lo que hace, es asignarle un valor por defecto a variables que están nulas.
Es decir, hola no tiene ningún valor en function App, pero sí lo tiene por defecto, 
entonces se muestra.
Un default props es modificable.
*/

class Contador extends Component{

  constructor(props){  //El constructor de las clases siempre debe llevar super y props.
    super(props)
    this.state ={ //El state se define en un constructor como un objeto.
      contador: this.props.contadorInicial
    }
    //El state debe ser tratado como inmutable, pero podemos actualizarlo usando setState, es asíncrono.
    setInterval(()=>{ 
      this.setState({contador : this.state.contador+ 1})
    }, 10000)
  }

  /*También se puede inicializar el state sin usar un constructor, como un campo de la propia clase.
  Esto se conoce como Class Fields.
  state = { contador : 2}
  */
  
  render () {
    return <p>El contador está a: {this.state.contador}</p>  //Recupero el valor del state.contador
  }
}

Contador.defaultProps = {
  contadorInicial: 0
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text 
          arrayOfNumbers={[2, 3, 5]}
          text='Text'
          number = {2}
          boolean = {false}
          multiply = {(number)=>number*3}
          title = {<h1>Title</h1>}
        />
        <Contador contadorInicial = {100}/>
      </header>
    </div>
  );
}

export default App;
