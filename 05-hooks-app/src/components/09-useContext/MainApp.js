import React,{useState} from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'


export const MainApp = () => {
    const [user, setUser] = useState({});

    // const user = {
    //     id:1234,
    //     name:'Rudolf',
    //     email:'rudoxvanx@gmail.com'
    // }
    return (
        <div>
            {/* <h1>MainApp</h1>|
            <hr/> */}
            <UserContext.Provider value={{user,setUser}}>
                <AppRouter/>
            </UserContext.Provider>
           
        </div>
    )
}
