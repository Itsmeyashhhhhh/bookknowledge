import {useContext} from "react";
import {createContext} from "react";


const UserContext=createContext()
function bonus() {
   const name="yash";
  return (
    <>
    <UserContext.Provider value={name}>
        <Greet/>
    </UserContext.Provider>
    
    </>
  )
}

export default bonus


function Parent() {
  return (
    <div>
        <h1>parent</h1>
        <Child/>
    </div>
  )
}
function Child() {
  return (
    <div>
        <h1>Child</h1>
        <Greet/>
    </div>
  )
}
function Greet() {
    const name=useContext(UserContext)
  return (
    <div>
        <h1>Greet</h1>
        <h1>hello {name}</h1>
    </div>
  )
}

