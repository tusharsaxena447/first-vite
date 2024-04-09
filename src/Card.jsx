import './Card.css'
// import PropTypes from 'prop-types';

export default function Card(PropTypes) {
    
  return (
    <>
    
    <div className="cards" >
    <img src={PropTypes.image} style={{height: "150px", width: "100%"}} alt='No image available' />
    
    <h5 >{PropTypes.title}</h5>
   
    <p >{PropTypes.body}</p>
    
    
    
 
</div>

</>
  )
}
