import React, { Component } from 'react'

class Login extends Component{
    render(){
        return (
            <button>Iniciar Sesión</button>
        )
    }
}

class Logout extends Component{
    render(){
        return (
            <div>
                <p>Bienvenido!</p>
                <button>Cerrar Sesión</button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component{

    constructor(){
        super()
        this.state = {
            isUserLogged : false
        }
    }

    render(){
        const numbers = [1,1,3,4,5]
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {this.state.isUserLogged ? <Logout /> : <Login />} 
                {numbers.map((number,index)=>{
                   return <li key={index}>Soy el número: {number}</li>  //Siempre se pone una key para identificar la posicion del array.
                })}
            </div>
        )
    }
}