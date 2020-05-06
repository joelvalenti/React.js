import React, {Component} from 'react';

export default class Forms extends Component {

    constructor(){
        super();
        this.state = {
            inputName : '',    //Inicializa el valor de los input.
            inputTerms : true
        }
    }

    handleSubmit = (e) =>{   //Siempre usar arrows en los métodos.
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {  //Método que me avisa cuándo cambió el valor del checkbox.
        console.log('handleChange', e.target.value);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor='name'>Nombre: </label>
                    <input id='name'
                    name='userName'
                    placeholder='Introduzca su nombre'
                    value = {this.state.inputName}
                    onChange = {e =>this.setState({inputName: e.target.value})}
                    ref={inputElement => this.inputName = inputElement} />  
                </p>
                <p>
                    <label>
                    <input 
                    checked = {this.state.inputTerms}
                    onChange={this.handleChange} type="checkbox" />
                    Aceptar términos.
                    </label>

                </p>
                <button>Enviar</button>
                </form>
            </div>
        )
    }
}