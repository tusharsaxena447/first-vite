import './Card.css'

export default function Card(props) {
    
  return (
    <>
    
    <div className="cards" >
    
    <h5 >{props.title}</h5>
   
    <p >{props.body}</p>
    
 
</div>

</>
  )
}
