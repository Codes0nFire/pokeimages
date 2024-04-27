import { useEffect, useRef, useState } from 'react'
import axios from "axios"

import './App.css'

function App() {
 

 const [poke,setpoke]=useState("pikachu");
 const [image,setimage]=useState("");
  
 useEffect(()=>{

  axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`)
  .then((res)=>setimage(res.data.sprites.front_default))
  .catch((err)=>alert(`pokemon not found check for spelling errors`))
  

 })

 const inpref=useRef(null);



function onClickHandler(){
    setpoke(inpref.current.value.toLowerCase());
    // console.log(poke);
 

}

  return (
      <>
       <div className="imageHandler">
       <img src={image}  />
       </div>
      <form onSubmit={(event)=>event.preventDefault()}>
      <input ref={inpref} type="text"  required />

       <button  onClick={onClickHandler} >Find</button>
      </form>


     
      

      </>
  )
}

export default App
