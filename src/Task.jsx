import { useState } from "react"


export default function Task() {
    const [value,setValue] = useState("")
    const [newval,setNewval] = useState([])
    function handleChange(e){
        setValue(e.target.value)
    }
    function add(){
      if (value === "") return alert("Please enter some value")
      else{
        setNewval([...newval,value])
        setValue("")
        console.log(newval)
      }
        
    }
    function delete(){
      newval.splice(index,1)
    }
    
  return (
    <>
     Name: <input className="border-black border-2" type="text" value={value} onChange={handleChange} />
     <button className="border-black border-2 bg-blue-100 mx-3"  onClick={add}>Submit</button>
     <br></br>
     {newval && newval.map((e,index)=>{
     return <div key={index} className="container flex p-2 ">
        <p >{e}</p>
        <button className="border-black border-2  mx-20 bg-red-900 text-white p-1" onClick={delete} >Delete</button>
       </div>
     })}
    </>
  )
}
