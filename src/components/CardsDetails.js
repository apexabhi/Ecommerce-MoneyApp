import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT,ADD,REMOVE } from '../redux/actions/action'


const CardsDetails = () => {
  const [data,setData] = useState([]);
  const {id} = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();
  const getdata = useSelector((state)=> state.cartreducer.carts);
  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }
  const send = (e)=>{
    dispatch(ADD(e));
  }
  const dlt = (id)=>{
    dispatch(DLT(id));
    history("/");
  }
  const remove = (item)=>{
  dispatch(REMOVE(item))
  }
  useEffect(()=>{
    compare();
  },[id])
  const handleClick=()=>{
     alert("Posted Successfully!!");
     document.querySelector('.po').value='';
  }
  


  return (
    <>
      <div className="container mt-5">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-5'>
          <div className="iteamsdetails">
          {
            data.map((ele)=>{
              return (
                <>
                <div className="items_img m-5">
              <img src={ele.img} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Title</strong>  : {ele.name}</p>
                    <p> <strong>Price</strong>  : ₹{ele.price}</p>
                    <p> <strong>Author</strong>  : {ele.author}</p>
                    <p> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>

                    </div>

                  </td>
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          
          </div>
          
        </section>
        <div className="container review m-5" >
          <h3 style={{ marginLeft: '35%'}}>Post Review</h3>
          <div className="my-3">
            <textarea className="po" rows="1" style={{ width: '300px', borderRadius: '15px', marginLeft: '30%'}}></textarea>
           
          </div>
          <button className="btn btn-dark " style={{ marginLeft: '37%', width: '100px' }} onClick={handleClick}  >Post</button>
        </div>
      </div>
    </>
  )
}

export default CardsDetails