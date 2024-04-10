import { useState } from "react"


export default function Temperature() {
    const [far,setFar] = useState()
    const [cel,setCel] = useState()

   function handleChange(event){
        let f = (event.target.value)
        let c = Number((5/9*(f-32)).toFixed(2) )
        setFar(f)
        setCel(c)
    }
  return (
    <div >
      Fahrenheit : <input type="text" onChange={handleChange} name="Fahrenheit" value={far} />
      Celsius : <input type="text"  name="Celsius" value={cel} />
    </div>
  )
}
