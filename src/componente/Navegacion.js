import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/imagenes/logo.jpg"
import CartWidget from "./CartWidget.js"



export const click = () => {
  return (
    alert("hiciste click")
  )
}


export default class Navegacion extends Component {
  render() {
    return (
      <div className='head'>
        <header style={{backgroundColor: "rgb(95, 121, 143)"}} className="text-white body-font" >
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink to='/' className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            
              <img style={{ width: 100 }} src={logo} alt="logo"/>
              <span style={{fontSize: 50}} className="ml-3 text-xl">El vikingo</span>
            
          </NavLink>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        
              <NavLink to='/' className="mr-5 hover:text-gray-900">Home</NavLink>
              <NavLink to='/Xbox' className="mr-5 hover:text-gray-900">Xbox</NavLink>
              <NavLink to='/Playstation' className="mr-5 hover:text-gray-900">Playstation</NavLink>
              <NavLink to='/Nosotros' className="mr-5 hover:text-gray-900">Nosotros</NavLink>

            </nav>
              <button onClick={click} className="inline-flex items-center
              bg-gray-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0">Carrito
                <svg fill="none" stroke="currentColor" strokeLinecap="round" 
                strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                </svg>
                <CartWidget/>
              </button>
              
          </div>
        </header>

      </div>
    )
  }
}
