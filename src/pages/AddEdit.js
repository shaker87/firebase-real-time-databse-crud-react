import React, { useState } from 'react'
import fireDb from './../util/firebase';

const AddEdit = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })


    console.log('user :>> ', user);

    const handleOnChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit :>> ');
        fireDb.child("User").push(user, (err) => {
            if(err){
                console.log('err :>> ', err);
            }
            else{setUser({
                name: "",
                email: "",
                phone: ""
            })}
        })
    }
  return (
    <>
    <div>AddEdit</div>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} placeholder='enter your name' value={user.name} name="name" />
        <input type="text" onChange={handleOnChange}  placeholder='enter your email' value={user.email} name="email" />
        <input type="text" onChange={handleOnChange}  placeholder='enter your phone' value={user.phone} name="phone" />

        <input type="submit" value="save" />
    </form>
    </>

  )
}

export default AddEdit