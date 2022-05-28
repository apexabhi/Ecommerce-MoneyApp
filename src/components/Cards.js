import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();
  const send = (e)=>{
    dispatch(ADD(e));
  }

  return (
    <div className='container mt-3'>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-5 card_style">
                  <Card.Img variant="top" src={element.img} style={{height:"15rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title><strong>{element.name}</strong></Card.Title>
                    <Card.Text style={{marginLeft:'4rem'}}>
                      Price :<strong> ₹ {element.price} </strong>
                    </Card.Text>
                    <div className=" d-flex justify-content-center">
                    <button 
                      onClick={()=> send(element)}
                     className='col-lg-12 butn'>Add to Cart</button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards