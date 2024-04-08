import { useState,useRef } from "react"


export default function Form() {
  const ref = useRef();
  const [form,setForm] = useState({email: '', phone: ''})

    function handleChange(event){
      setForm({...form, [event.target.name]:event.target.value})
    }
  function handleSubmit(event) {
    event.preventDefault();
    setForm({email:"", phone: ""})
  }
  return (
    <>
     <form ref={ref} aria-label='Form' onSubmit={handleSubmit}>
       Name:  <input type='text' name='email' value={form.email} onChange={handleChange} placeholder='Name'/>
       Roll:  <input type='text' name='phone' value={form.phone} onChange={handleChange} placeholder='Name'/>
       <button type="submit" >Submit</button>
     </form> 
    </>
  )
}
