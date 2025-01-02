import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Manager = () => {
  const psRef = useRef();
  const passworRef = useRef();

  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, []);

  const showPassword = () => {
    passworRef.current.type = "text"
    // alert("show the password")
    if (psRef.current.src.includes("/icons/eye-off-fill.svg")) {
      psRef.current.src = "/icons/eye-fill.svg"
      passworRef.current.type = "password"
    }
    else {
      psRef.current.src = "/icons/eye-off-fill.svg"
      passworRef.current.type = "text"
    }

  }
  const savePassword = () => {
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray, form]);

  }
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      <div className=" mycontainer">

        <h1 className='text text-4xl font-bold text-center'>
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>
        </h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

        <div className=" text-black flex flex-col p-4 gap-8 items-center ">
          <input onChange={handleChange} value={form.site} placeholder='Enter website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" id="" name="site" />

          <div className="flex w-full justify-between gap-8">
            <input onChange={handleChange} value={form.username} placeholder='Enter Username' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" id="" name="username" />

            <div className="relative">
              <input ref={passworRef} onChange={handleChange} value={form.password} placeholder='Enter Password' className='rounded-full border border-green-500 w-full p-4 py-1' type="password" id="" name="password" />

              <span className='absolute right-[4px] top-[7px] hover:cursor-pointer' onClick={showPassword}>
                <img ref={psRef} className='w-[20px]' src="/icons/eye-fill.svg" alt='' />
              </span>

            </div>


          </div>
          <button onClick={savePassword} className='flex justify-center items-center bg-green-400 rounded-full w-fit hover:bg-green-300 px-3 py-2 gap-2 border border-green-900'><lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover">
          </lord-icon>Add Password</button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show.</div>}
          {passwordArray.length != 0 &&

            <table className="table-auto w-full overflow-hidden rounded-md">
              <thead className='bg-green-800 text-white'>
                <tr>
                  <th className='py-2'>Site</th>
                  <th className='py-2'>Username</th>
                  <th className='py-2'>Password</th>
                </tr>
              </thead>
              <tbody className='bg-[#cff1db]'>
                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className='py-2 text-center w-32 '><a href={item.site} target='_black'>{item.site}</a></td>
                    <td className='py-2 text-center w-32 '>{item.username}</td>
                    <td className='py-2 text-center w-32 flex gap-2 bg-slate-500'>
                      <span>{item.password}</span>
                      <img className='w-4' src="/icons/clipboard-fill.png" alt="" />
                    </td>
                  </tr>
                })}


              </tbody>
            </table>}

        </div>
      </div>
    </>
  )
}

export default Manager
