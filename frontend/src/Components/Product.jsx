import React from 'react'
import { useEffect,useState } from 'react'

export const Product = () => {

    const [data,setData] = useState([])
    const [pageNumber,setPageNumber] = useState(0)
    const [numberOfPages,setNumberOfPages]= useState(0)

    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
    // const pages = new Array(numberOfPages).fill(null).map((v,i)=>i)

    useEffect(() =>{
        fetch(`http://localhost:5000/footwear?page=${pageNumber}`)
        .then((res)=>res.json())
        .then(({totalPages,products})=>{
            // console.log(totalPages,products)
            setData(products)
            setNumberOfPages(totalPages)
        })
    },[pageNumber])
    console.log(data)
  return (
    <div>
        {
            data.map((e) =>{
                return(
                <div key={e._id}>
                    <p>{e.brand}</p>
                    <img src={e.img}/>
                    <p>{e.price}</p>
                </div>
                )
            })
        }
        {pages.map((e,m)=>{
            return(
           
            
            <button key={m} onClick={()=>setPageNumber(e)}>{e+1}</button>
            
          
            )
        })}
    </div>
  )
}
