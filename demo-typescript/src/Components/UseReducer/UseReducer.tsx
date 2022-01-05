import { type } from 'os'
import React,{useReducer} from 'react'

type UseReducerState = {
    count : number
}

type UpdateAction = {
    type : 'increament' | 'decreament'
    payload : number
}

type ResetAction = {
    type : 'reset'
}
type ActionState = UpdateAction | ResetAction

const initialstate ={count:0}

function reducer(state : UseReducerState, action:ActionState)
{
  switch(action.type){
  case 'increament':
      return{count: state.count + action.payload}
      
  case 'decreament':
    return{count: state.count - action.payload} 

  case 'reset':
      return initialstate  

    default:
        return state

  }   
}

function UseReducer() {

    const [state, dispatch] = useReducer(reducer , initialstate)
    return (
        <>
           Count : {state.count}
           <button onClick={() => dispatch({type:'increament', payload:10})}>Increament 10</button> 
           <button onClick={() => dispatch({type:'decreament', payload:10})}>Decreament 10</button> 
           <button onClick={() => dispatch({type:'reset'})}>Reset</button> 
        </>
    )
}

export default UseReducer
