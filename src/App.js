import React from "react";
import Parent from "./Parent";
import Child from "./Child";
//const cars=["Ford","BMW","Audi"];
function App() {
  const handleChange=(event) =>{
    console.log(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
  }

  //to set and get item from local storage
  // const handleSubmit=()=>{
  //   localStorage.setItem("name",name)
  //   localStorage.getItem("name")
  // }

  //let  x=5;
  // let demo = false;

  //  let demo=false;
  //  if(demo){
  //   return <Parent/>

  //  }else{
  //    return <Child/>
  //   }


  // fourth
  // const handleSubmit=(x)=>{
  //   alert(x)

  //const x=5;

  //second using if condition
  // const x=5;
  // let text="Goodbye";
  // if(x<10){
  //   text="Hello";
  // }



  //In form, don't put value and required in react

  //using ternary operator 
  return (
    <div className="App">
      <form>
        <label>Enter your name:</label>
        <input type="text" name="name" onChange={handleChange}/> 
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>

     {/* <ul>
      {cars.map((car) => (  //car is a key in map method
        <li>{car}</li>
      ))
      }
     </ul> */}
      {/* <h1>{(x<10)?"true":"false"}</h1> */}

    {/* <h1>{bool?<Parent/>:<Child/>}</h1> */}
      {/* <h1>{demo ? <Parent /> : <Child />}</h1> */}

      {/* {demo}</h1> */}
      {/* <button onClick={handleSubmit("click")}>Submit</button> */}
      {/* <Parent/> */}


    </div>
  );

  //first
  // return (
  //   <div>
  //     <h1>Accelerlab solutions {10+10} Moodbidri</h1>
  //   </div>

  // );
}

export default App;
