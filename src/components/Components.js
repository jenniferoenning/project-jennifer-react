import React from 'react';

export class C_Button extends React.Component{
    constructor (props){
        super(props)
    }
    render(){
        console.log(this.props);
        // Se quiser usar console.log (SEMPRE NO INICIO DO RENDER).
        return (
            <div>
            </div>
        )
    }
}

// Ciclo de vida = Primeiro o Constructor, Render, componentDidMount.
// Os props são propriedades que estão vindo de outras funções ou classes.

