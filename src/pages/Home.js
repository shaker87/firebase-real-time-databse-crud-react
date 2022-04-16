import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import fireDb from './../util/firebase';

const Home = () => {

    const [user, setAllUser] = useState({});
    console.log('user from home => :>> ', user);

    // useEffect(() => {
    //     fireDb.child("User").on("value", (snapshot) => {
    //         if (snapshot.val() !== null) {
    //             const userObj = { ...snapshot.val() }
    //             let newArray = []

    //             Object.keys(userObj).forEach((newItem) => newArray.push(newItem))
    //             setAllUser(newArray)
    //         }
    //         else {
    //             setAllUser([])
    //         }
    //     })
    //     return () => setAllUser([])
    // }, [])
    useEffect(() => {
        fireDb.child("User").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                const userObj = { ...snapshot.val() }
                // let newArray = []

                // Object.keys(userObj).forEach((newItem) => newArray.push(newItem))
                 setAllUser(userObj)
            }
            else {
                setAllUser({})
            }
        })
        return () => setAllUser({})
    }, [])

    const onDelete = (id) => {
        if(window.confirm("are you want to delete this user?")){
            fireDb.child(`User/${id}`).remove(err => {
                console.log('err :>> ', err);
            })
        }
    }
    return (
        <>
            <div>Home</div>


            {
                Object.keys(user).map((id) => {

                    return (<table key={id}>
                        <tbody>
                        <tr>
                            <td>{user[id].name + " "}</td>
                            <td>{user[id].email + " "}</td>
                            <td>{user[id].phone}</td>
                            <td>
                                <Link to={`/update/${id}`}>
                                    <button>Edit</button>
                                </Link>
                                <Link to={`/view/${id}`}>
                                    <button>View</button>
                                </Link>
                                <button onClick={()=> onDelete(id)}>Delete</button>
                            </td>

                        </tr>
                        </tbody>
                    </table>)

                })
            }
        </>
    )
}
export default Home;

