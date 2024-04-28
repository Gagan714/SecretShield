import React, { useRef, useState,useEffect } from 'react';

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordarray, setpasswordarray] = useState([])
  const [form, setform] = useState({site:"",username:"",password:""})
  const passwordRef = useRef();
  useEffect(() => {
    let password=localStorage.getItem("passwords");
    if(password){
      setpasswordarray(JSON.parse(password))
    }
  }, [])
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const savePassword=()=>{
    if (form.site.trim() === "" || form.username.trim() === "" || form.password.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
    setpasswordarray([...passwordarray,form])
    localStorage.setItem("passwords",JSON.stringify([...passwordarray,form]))
  }
  const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <div>
    <div className="flex justify-center items-center my-2">
      <div className="w-2/3 flex flex-col justify-center items-center text-center text-white rounded-xl">
        <h1 className="font-semibold text-3xl text-black">
          <span>Secret</span>
          <span className="text-blue-700">Shield</span>
        </h1>
        <p className="text-gray-900">Your Personal Password Manager</p>
        <input value={form.site} name="site" placeholder='Enter website URL' onChange={handleChange} className="border border-black rounded-3xl my-6 mx-4 w-4/5 px-2 py-1 text-black" type="text" />
        <div className="flex w-full justify-around py-3">
          <div>
            <input value={form.username} name="username" placeholder='Enter Username' onChange={handleChange} className="rounded-3xl border border-black px-2 py-1 text-black" type="text" />
          </div>
          <div className="relative">
            <input value={form.password} name="password" placeholder='Enter Password' onChange={handleChange} className="rounded-3xl border border-black px-2 py-1 text-black" type={showPassword ? 'text' : 'password'} ref={passwordRef} />
            <div className="absolute right-2 top-2 h-6 w-5 cursor-pointer" onClick={togglePasswordVisibility}>
              <img src={showPassword ? "src/assets/eyecross.png" : "src/assets/eye.png"} alt="Toggle Password Visibility" />
            </div>
          </div>
        </div>
        <button onClick={savePassword} className="flex justify-center items-center my-2 py-1 border-black bg-blue-500 text-black px-3 rounded-2xl">
          Save Password
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            style={{ width: '20px', height: '20px' }}>
          </lord-icon>
        </button>
      </div>
    </div>
    <div className="flex justify-center items-center my-2">
    <div className="w-2/3 flex flex-col justify-center items-center text-center text-black rounded-xl">
    <h2 className="font-bold text-2xl ">Your Passwords</h2>
    {passwordarray.length===0 && <div>No passwords to show</div>}
    {passwordarray.length!=0 && <table class="table-auto w-full rounded-md overflow-hidden">
<thead className="bg-blue-500 text-black">
<tr>
  <th className="py-2">Website</th>
  <th className="py-2">Username</th>
  <th className="py-2">Password</th>
</tr>
</thead>
<tbody className="bg-blue-100">
{passwordarray.map((item,index)=>{
  return <tr key={index}>
  <td className="text-center py-2 border border-white w-32"><a href={item.site} target='_blank'>{item.site}</a></td>
  <td className="text-center py-2 border border-white w-32">{item.username}</td>
  <td className="text-center py-2 border border-white w-32">{item.password}</td>
</tr>
})}

</tbody>
</table>}
</div>
</div>
</div>
  );
}

export default Manager;
