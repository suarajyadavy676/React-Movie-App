import { createContext, useReducer } from 'react'
 export const GlobalContext = createContext()
 function reducer(state,{type,payload}){
  switch (type) {
    case "search":{
      return {...state,...payload}
    }
    case "loginInfo":{
      return {...state,...payload}
    }
    default:{
      throw new Error("Invalid action type")
    }
  }
 }
function Context({children}) {
  const [state,dispatch] = useReducer(reducer,{})
  // console.log(state)
  return (
    <GlobalContext.Provider value={{state,dispatch}}>
    {children}
    </GlobalContext.Provider>
  )
}
export default Context
