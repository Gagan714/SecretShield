import React from 'react'

const Navbar = () => {
  return (
    <div className="container flex justify-around items-center py-1 bg-black text-slate-100">
        <div className="logo font-bold text-2xl"><span>Secret</span><span className=" text-blue-500">Shield</span></div>
        <ul className="flex gap-3">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact me</a></li>
        </ul>
    </div>
  )
}

export default Navbar