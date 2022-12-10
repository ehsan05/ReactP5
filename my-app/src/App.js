function strike(){
     document.getElementById("root").style.textDecoration = "line-through";
    //  isDone = true;
}
function unstrike(){
     document.getElementById("root").style.textDecoration = null;
    //  isDone = false;
}
function App() {      
      // var isDone = false;
      //  const strikeThrough =  {textDecoration: "line-through"};
  return (
  <div>
  <p >Buy Milk</p>
  {/* <p style={(isDone) ? strikeThrough : null}>Buy Milk</p> */}

  <button onClick={strike}>Apply</button>
  <button onClick={unstrike} >Remove</button>
  </div>
  );  
}

export default App;
