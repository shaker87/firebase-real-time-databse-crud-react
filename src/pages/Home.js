import React, { useEffect, useState } from 'react'
import fireDb from './../util/firebase';

const Home = () => {

    const [user, setAllUser] = useState([]);
    console.log('user from home => :>> ', user);

    useEffect(() => {
        fireDb.child("User").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                const userObj = { ...snapshot.val() }
                let newArray = []
                
                Object.values(userObj).forEach((newItem)=> newArray.push(newItem))
                setAllUser(newArray)
            }
            else {
                 setAllUser([])
            }
        })
         return () =>  setAllUser([]) 
    },[])
    return (
        <>
            <div>Home</div>

           
            {
               user&& user.map(item => {
                    
                    return(<h1>{item.name}</h1>)

                })
            }
        </>
    )
}
export default Home;

