import { useEffect, useState } from 'react'
// import Form from './Form'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Card from './Card.jsx'

function App() {
  const [card,setCard] = useState([])
  
    async function fetchData(){
       const resp =  await fetch('https://dummyjson.com/products')
        var data = await resp.json()       
        setCard(data.products)
       
    }
    useEffect(()=>{
      fetchData()
    })
    
  
  
  return (
    <>
    <div className='containe'>
    {card.map((list)=>(
    <Card key={list.id} title = {list.title} body = {list.description} image={list.thumbnail} />
    ))}
    </div>
     {/* <Form/> */}
      {/* <button onClick={()=>{
        setCount(count+1)
      }}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count-1)
      }}>-</button>  */}
    </>
  )
}

export default App
