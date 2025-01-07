import React, {useEffect, useState} from 'react'
import {request} from '../../api/index'
import './prodact.css'
import { useNavigate } from 'react-router-dom'

function Prodact() {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    useEffect (() =>{
        request
        .get('/products')
        .then(res => setData(res.data))
    },[])

  return (
    <>
    <div className='product_blok container'>
    
      {
        data?.products?.map(item =>(
            <div className='product_list' key={item.id}>
                <img onClick={() => navigate(`/prodacts/${item.id}`)} src={item.thumbnail} alt="" />
                <h3>{item.title}</h3>
            </div>
        ))
      }
    </div>
    </> 
  )
}

export default Prodact