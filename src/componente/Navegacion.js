import React, { Component } from 'react'
import logo from "../assets/imagenes/logo.jpg"
import CartWidget from "./CartWidget.js"



export default class Navegacion extends Component {
  render() {
    return (
      <div className='head'>
        <header style={{backgroundColor:"rgb(95, 121, 143)"}} class="text-gray-700 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img style={{ width: 100 }} src={logo} alt="logo"/>
              <span style={{fontSize: 50}}class="ml-3 text-xl">El vikingo</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">

              <a href="" class="mr-5 hover:text-gray-900">Home</a>
              <a href="" class="mr-5 hover:text-gray-900">Hombres</a>
              <a href="" class="mr-5 hover:text-gray-900">Mujeres</a>
              <a href="" class="mr-5 hover:text-gray-900">Nosotros</a>

              </nav>
              <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Carrito
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                </svg>
                <CartWidget/>
              </button>
              
          </div>
        </header>

      </div>
    )
  }
}
