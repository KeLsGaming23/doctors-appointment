import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name:"Example Name",
    image:assets.profile_pic,
    email:'example@email.com',
    phone:'123-123-123-456',
    address:{
      line1:"Example Line 1 address",
      line2:"Example Line 2 address"
    },
    gender:'Male',
    dob:'1992-01-23'
  })

  const [isEdit, setIsEdit] = useState(false)
  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
        <img className='w-36 rounded' src={userData.image} alt="" />
        {
          isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/>
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
        }

        <hr className='bg-zinc-400 h-[1px] border-none' />
        <div>
          <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email Id:</p>
            <p className='text-blue-500'>{userData.email}</p>
            <p>Phone:</p>
            {
              isEdit
              ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/>
              : <p>{userData.phone}</p>
            }
            <p>Address:</p>
            {
              isEdit
              ? 
              <p>
                <input type="text" onChange={e => setUserData(prev => ({...prev.address, line1: e.target.value}))} value={userData.address.line1}/>
                <br />
                <input type="text" onChange={e => setUserData(prev => ({...prev.address, line2: e.target.value}))} value={userData.address.line2}/>
              </p>
              :
              <p>
                {userData.address.line1}
                <br />
                {userData.address.line1}
              </p>

            }
          </div>
        </div>

        <div>
          <p>BASIC INFORMATION</p>
          <div>
            <p>Gender:</p>
            {
              isEdit
              ? 
              <select onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p>{userData.gender}</p>
            }
            <p>Birthday</p>
            {
              isEdit 
              ? <input type="date"  onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob}/>
              : <p>{userData.dob}</p>
            }
          </div>
        </div>

        <div>
          {
            isEdit 
            ? <button onClick={()=>setIsEdit(false)}>Save Information</button>
            : <button onClick={()=>setIsEdit(true)}>Edit</button>
          }
        </div>
    </div>
  )
}

export default MyProfile