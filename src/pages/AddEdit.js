import React, { useEffect, useState } from 'react'
import fireDb from './../util/firebase';
import { useNavigate, useParams } from "react-router-dom";

const AddEdit = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log('id :>> ', id);
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [users, setAllUsers] = useState({})


    console.log('user :>> ', user);

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        if (id) {
            e.preventDefault()
            console.log('submit :>> ');
            fireDb.child("User").push(user, (err) => {
                if (err) {
                    console.log('err :>> ', err);
                }
                else {
                    setUser({
                        name: "",
                        email: "",
                        phone: ""
                    })
                }
            })
        } else {
            e.preventDefault()

            fireDb.child(`User/${id}`).set(user, (err) => {
                if (err) {
                    console.log('err :>> ', err);
                }
                else {
                    setUser({
                        name: "",
                        email: "",
                        phone: ""
                    })
                }
            })
        }
    }

    useEffect(() => {
        fireDb.child("User").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                const userObj = { ...snapshot.val() }
                setAllUsers(userObj)
            }
            else {
                setAllUsers({})
            }
        })
        return () => setAllUsers({})
    }, [id])

    useEffect(() => {
        if (id) {
            setUser({ ...users[id] })
        } else {
            setUser({ ...user })
        }
        return () => setUser({ ...user })
    }, [id, users])
    return (
        <>
            <div>AddEdit</div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleOnChange} placeholder='enter your name' value={user.name} name="name" />
                <input type="text" onChange={handleOnChange} placeholder='enter your email' value={user.email} name="email" />
                <input type="text" onChange={handleOnChange} placeholder='enter your phone' value={user.phone} name="phone" />

                <input type="submit" value={id ? 'Update' : 'Save'} />
            </form>
        </>

    )
}

export default AddEdit