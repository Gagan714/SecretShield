import React from 'react';

const Manager = () => {
  return (
    <div className="flex justify-center items-center my-2">
      <div className="bg-gray-500 w-2/3 flex flex-col justify-center items-center text-center text-white rounded-xl">
        <h1 className="font-semibold text-3xl"><span>Secret</span><span className="text-gray-800">Shield</span></h1>
        <p className="text-gray-900">Your Personal Password Manager</p>
        <input className="border border-black rounded-2xl my-6 mx-4 w-4/5" type="text" />
        <div className="flex gap-56 justify-around py-3">
          <input className="rounded-2xl border border-black" type="text" />
          <input className="rounded-2xl border border-black" type="text" />
        </div>
        <button className="flex justify-center items-center my-2 border-black bg-blue-700 text-black px-3 rounded-xl">
          Save Password
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            style={{ width: '20px', height: '20px' }}>
          </lord-icon>
        </button>
      </div>
    </div>
  );
}

export default Manager;
