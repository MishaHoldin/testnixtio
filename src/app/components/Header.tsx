'use client'
import { useState } from 'react'
import Container from './Container'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = ['Companies', 'About Us', 'Resources', 'Contacts']

  return (
    <header className="w-full  z-10">
      <Container>

      <div className="mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="font-primary font-semibold text-[24px] leading-[100%] tracking-tightest text-white">
          StevensUniversal
        </div>


        {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="font-primary font-normal text-[14px] leading-[100%] tracking-[-0.02em] text-white hover:text-yellow-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>


        {/* Buttons */}
        <div className="hidden md:flex space-x-3">
          <button
            className="font-primary font-normal text-[14px] leading-[100%] tracking-[-0.02em] text-white text-center
                      bg-[#3b3c3a]
                      rounded-[12px] px-8 py-[10px] pb-[12px]
                      w-[102px] h-[42px]"
          >
            Apply
          </button>


          <button
              className="font-primary font-normal text-[14px] leading-[100%] tracking-[-0.02em] text-black text-center
                        bg-[#fff62d] rounded-[12px] px-8 py-[10px] pb-[12px]
                        w-[104px] h-[42px]"
            >
            Invest
          </button>

        </div>

        {/* Burger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>
          
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map(link => (
              <a key={link} href="#" className="text-gray-800 hover:text-black">
                {link}
              </a>
            ))}
          </nav>
          <div className="flex mt-4 space-x-3">
            <button className="flex-1 py-1 border border-black rounded">Apply</button>
            <button className="flex-1 py-1 bg-yellow-400 text-black rounded">Invest</button>
          </div>
        </div>
        )}
      </Container>
        
    </header>
  )
}
