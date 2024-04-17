import { useState } from "react"


export default function Task() {
    const [value,setValue] = useState("")
    const [newval,setNewval] = useState([])
    // const [edit,setEdit] = useState()
    
    function handleChange(e){
        setValue(e.target.value)
    }
    function add(){
      if (value === "") return alert("Please enter some value")
      else{
        setNewval([...newval,value])
        console.log(newval)
        setValue("")
      }
        
    }
    function delet(index){
      newval.splice(index,1)
      const newtask = [...newval]
      setNewval(newtask)
    }
    
   
    
  return (
    <>
    <div className="container mt-3">
     Name: <input className="border-black border-2" type="text" value={value} onChange={handleChange} />
     <button className="border-black border-2 bg-blue-100 mx-3"  onClick={add}>Submit</button>
     <br></br>
     {newval.map((e,index)=>
      
      (<div key={index}   className="container flex p-2 ">
        <input type="text" value={e} readOnly/>

        <button className="border-black border-2 ms-2 bg-red-900 text-white p-1" onClick={()=>delet(index)} >Delete</button>
       </div>)
     )}
     </div>
    </>
  )
}
