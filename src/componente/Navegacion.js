import React, { Component } from 'react'
import logo from "../assets/imagenes/logo.jpg"
import CartWidget from "./CartWidget.js"
import '../assets/styles/navBar.css';


export default class Navegacion extends Component {
  render() {
    return (
      <div className='head'>
        <h1 className="titulo">El vikingo E-shop</h1>
        <img className="logo" src={logo} alt="logo"/>
        <nav >
            <a href="" className='navegar'>Home</a>
            <a href="" className='navegar'>Nosotros</a>
            <a href="" className='navegar'>Productos para hombres</a>
            <a href="" className='navegar'>Productos para mujeres</a>
            <a href="" className='navegar'>Contacto</a>
            <CartWidget/>
        </nav>
      </div>
    )
  }
}
