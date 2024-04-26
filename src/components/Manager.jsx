import React from 'react';

const Manager = () => {
  return (
    <div className="flex justify-center items-center my-2">
      <div className="w-2/3 flex flex-col justify-center items-center text-center text-white rounded-xl">
        <h1 className="font-semibold text-3xl text-black"><span>Secret</span><span className="text-blue-500">Shield</span></h1>
        <p className="text-gray-900">Your Personal Password Manager</p>
        <input placeholder='Enter website URL' className="border border-black rounded-3xl my-6 mx-4 w-4/5 px-2 py-1 text-black" type="text" />
        <div className="flex w-full justify-around py-3">
          <input placeholder='Enter Username' className="rounded-3xl border border-black px-2 py-1 text-black" type="text" />
          <input placeholder='Enter Password' className="rounded-3xl border border-black px-2 py-1 text-black" type="text" />
        </div>
        <button className="flex justify-center items-center my-2 py-1 border-black bg-blue-500 text-black px-3 rounded-2xl">
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
