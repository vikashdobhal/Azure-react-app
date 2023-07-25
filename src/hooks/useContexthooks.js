import React from 'react'
import { useState,createContext,useContext } from 'react'
import Usestatehooks from './Usestatehooks';
export const UserContext = createContext();

function Component1() {
    const [user, setuser] = useState("vikash");

  return (
    <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2/>
        <Usestatehooks/>
    </UserContext.Provider>
  )
}

function Component2(){
    return(
        <>
        <h1>Component 2</h1>
            <Component3 />
        </>
    )
}
function Component3(){
    const user = useContext(UserContext)
    return(
        <>
        <h1>Componnet3</h1>
        <h2>{`Hello ${user} again!`}</h2>
        </>
    )
}
export default Component1