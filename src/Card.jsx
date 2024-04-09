import './Card.css'

export default function Card(props) {
    
  return (
    <>
    
    <div className="cards" >
    <img src={props.image} style={{height: "150px", width: "100%"}} alt='No image available' />
    
    <h5 >{props.title}</h5>
   
    <p >{props.body}</p>
    
 
</div>

</>
  )
}
