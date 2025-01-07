import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { request } from '../../api'
import './detail.css'

function Detail() {
    const [data, setData] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        request(`/products/${id}`)
        .then(res => setData(res.data))
    })
  return (
    <div className='deatil_blok container'>
        <img src={data?.thumbnail} alt="" />
        <h2>{data?.title}</h2>
        <br />
        {
            data?.images?.map(url => (
                <img src={url} key={url} width={80} alt="" />
            ))
        }
    </div>
  )
}

export default Detail