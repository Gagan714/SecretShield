import React from 'react'

const Navbar = () => {
  return (
    <div className="container flex justify-around items-center py-1 bg-blue-900 text-slate-100">
        <div className="logo font-bold text-2xl"><span>Secret</span><span className=" text-blue-500">Shield</span></div>
        <a href="https://github.com/Gagan714/SecretShield" target="_blank"><button className="bg-black text-white rounded-3xl border-2 border-black flex gap-2 py-1 px-3 items-center">
          Github
          <img className="invert w-6 h-7" src="src/assets/github.png" alt="" />
        </button></a>
    </div>
  )
}

export default Navbar