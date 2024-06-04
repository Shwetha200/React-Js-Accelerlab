import React from "react";
import Parent from "./Parent";
import Child from "./Child";
function App() {
  let bool= true;
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

  //using ternary operator 
  return (
    <div className="App">

    <h1>{bool?<Parent/>:<Child/>}</h1>
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
