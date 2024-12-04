import React from 'react';

const Hero = () => {
    return (
      <section className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen">
        <div className="relative w-full h-full">
            <img src="./assets/hazloLogo.png" className="fixed left-6 top-8 w-[45px] h-[40px]"/>

            <h1 className="left-1/2 -translate-x-1/2 fixed top-8 text-3xl">
                <a className="text-white font-bold" href="">HAZLO</a>
            </h1>

            <img src="./assets/hazloHero.png" alt="hero" className="w-full h-full object-cover"/>
          </div>
      </section>
    )
  }
  
  export default Hero
