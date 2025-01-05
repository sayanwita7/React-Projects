import Counter from "../src/Components/Counter.jsx"
import { useEffect, useState, useRef} from "react";
function App(){
  // const showTitle = false;
  // const status = '';
  // function Status (){
  //   switch (status) {
  //     case 'loading':
  //       return <p>Loading...</p>
  //     case 'error':
  //       return <p>Error fetching data</p>
  //     case 'success':
  //       return <p>Data fetched successfully</p>
  //     default:
  //       return <p>Internal error</p>;
  //   }
  // }
  // const users = ['Sayanwita', 'Suman', 'Puchu'];
  const [user, setUser] = useState({
    name: '',
    email: ''
  })
  function submit (){
    alert (`Form submitted! Name: ${user.name}, Email: ${user.email}`)
  }
  {/*Higher order component */}
  
  function addTitle (Comp){
    return function CompWithTitle () {
      return <>
      <h1>Title!</h1>
      <Comp />
      </>
    }
  }
  function Paragraph (){
    return <> <p> This is a paragraph </p> </>
  }
  const ParagraphWithTitle = addTitle (Paragraph)

  return (
    <> 

    {/*Conditional rendering: By ternary, logical operator, switch and loop*/}

    {/* Empty tag to enclose multiple elements as the return type can only be a single tag*/}
    {/* <div> App </div>
    <Counter name="Sayanwita" age={24} /> */}
    {/* <Counter name="Suman" age={24} />
    <Counter name="Puchu" age={2} /> */}
    
    {/* <p>{showTitle? 'Title is visible' : 'Title not visible'}</p> */} {/*Ternary operator */}
    {/* {showTitle || <p>Title that is visible only when the value is false </p> */} {/*Logical operator or short circuiting */}
    
    {/* <Status /> */}

    {/* <ul>
      {
        users.map((data, index) => 
        <li key={index}>{data}</li>) 
      } 
    </ul> */} {/* Key needed to id indivial li element */}
    
    <h1> User Data Form</h1>
    <input type="text" placeholder="Enter your name"  value = {user.name} onChange={(event) => setUser ({...user, name : event.target.value})}/>
    <input type="text" placeholder="Enter your email" value = {user.email} onChange={(event) => setUser ({...user, email : event.target.value})}/>
    <button onClick={submit}>Submit</button>

    <Paragraph />
    <ParagraphWithTitle />
    </>
  )
}

export default App;