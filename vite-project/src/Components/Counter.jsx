import { useEffect, useState, useRef, useReducer } from "react";
function Counter (props) {
    const [count, setCount] = useState(0); //0 being the initial value

    // useEffect(() => {
    //     alert ("The component is mounted")
    // }
    // ,[]) //Empty array means the effect will only run once, when the component is mounted
    
    // useEffect(() => {
    //     alert ("The component is updated")
    // },[count]) //The effect will run every time the count is updated
    //without count, it will load for every change in the component
    
    const inputRef = useRef(null);

    function increment(){
        setCount((count) => count+1)
    }

    function decrement(){
        setCount((count) => {
            if (count <= 0){
                alert ("Negative numbers are not allowed");
                return 0;
            }
            else{
                return count-1;
            }
        })
    }
    return (
        <>
        <h3> I am the counter </h3>
        <button onClick={decrement}> - </button> {count} <button onClick={increment}> + </button> 
        <input ref={inputRef} type="text"/> <button onClick = {() => inputRef.current.focus()}>Focus Text</button>
        </>
    )
}
// function reducer(state, action){
//     switch(action.type){
//         case 'increment':
//             return {count: state.count + 1};
//         case 'decrement':
//             return {count: state.count - 1};
//         default:
//             throw new Error();
//     }
// }
// function Counter (){
//     const initialState = {count: 1}
//     const [state, dispatch] = useReducer(reducer, initialState)

//     return (
//         <>
//         <button onClick ={ () => dispatch ({type: 'decrement'})}> - </button> 
//         {state.count} 
//         <button onClick ={ () => dispatch ({type: 'increment'})}> + </button> 
//         </>
//     )
// }

export default Counter;
