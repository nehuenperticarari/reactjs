import React from 'react'

const Contacto = () => {
  return (
  <section className="relative py-20 2xl:py-40 bg-gray-800">
    <img className="hidden lg:block absolute top-0 left-0 w-2/5" src="zospace-assets/images/map.svg" alt=""/>
    <img className="hidden lg:block absolute top-0 left-0 mt-40 ml-40" src="zospace-assets/images/office-tag.svg" alt=""/>
    <div className="relative container px-4 mx-auto">
    <div className="text-center mb-20">
      <span className="text-lg text-blue-400 font-bold">Si tienes alguna duda:</span>
      <h2 className="mt-10 text-5xl font-bold font-heading text-white">Contactarse</h2>
    </div>
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap -mx-4 mb-20">
        <div className="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
          <div className="bg-gray-600 rounded-b-lg">
            <img className="h-64 w-full rounded-lg object-cover" src="https://image.freepik.com/free-photo/contacting-with-friends-via-computer_329181-14587.jpg" alt=""/>
            <div className="px-14 py-8">
              <div className="mb-6 py-px bg-gray-500"></div>
              <h3 className="mb-8 lg:mb-4 text-xl text-white font-bold">¿Tienes preguntas? Envianos un mensaje!</h3>
              <div className="md:text-right"><a className="inline-block px-12 py-4 border border-gray-300 hover:border-gray-200 rounded-full font-bold text-white" href="https://www.whatsapp.com/">Mensajes</a></div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <div className="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
            <div className="flex items-center">
              <span className="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                <img src='https://img.icons8.com/ios-glyphs/2x/phone.png' alt='' />
              </span>
              <p className="text-lg font-bold text-white">+54 20457523 00 01</p>
            </div>
          </div>
          <div className="py-6 px-8 mb-10 bg-gray-600 rounded-lg">
            <div className="flex items-center">
              <span className="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                <img src='https://img.icons8.com/fluency-systems-filled/2x/new-post.png' alt=''/>
              </span>
              <p className="text-lg font-bold text-white">support@elvikingo.com</p>
            </div>
          </div>
          <div className="py-6 px-8">
            <div className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                <img src='https://img.icons8.com/ios-filled/2x/worldwide-location--v2.gif' alt=''/>
              </span>
              <div>
                <div className="pb-4 pr-16 mb-6 border-b border-gray-500">
                  <p className="text-lg font-bold text-white">Cordoba, Argentibna</p>
                  <p className="text-lg font-bold text-white">Av Colon, 5000</p>
                </div>
                <p className="text-gray-400">The one est bad, semper six. At sem quis, congue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        
        
      </div>
    </div>
    </div>
  </section>
  )
}

export default Contacto