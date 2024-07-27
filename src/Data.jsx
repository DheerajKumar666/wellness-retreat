import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Data = ({currentData,filterData}) => {

  // let [data,setData] = useState([])
  // let [perpage,setperPage]=useState([])


  //  let fetchData=()=>{
  //   axios.get("https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats")
  //   .then((response)=>{
  //       // console.log(data);
  //       // console.log(response);
  //       setData(response.data)
  //       setperPage(response.data.slice(0,3))
  //   })
  //  }
   
  //  useEffect(()=>{
  //   fetchData()
  //  },[])

  //    const [currentPage, setCurrentPage] = useState(1);
   
  //    const handlePrevious = () => {
  //      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  //    };
   
  //    const handleNext = () => {
  //      setCurrentPage((prevPage) => Math.min(prevPage + 1, 8));
  //    };
   
  //    const currentItems = data.slice((currentPage - 1) * 3, currentPage * 3);
   
  //    let dateFormatter=(epoch)=>{
  //     let date=new Date(epoch*1000)
  //   let readableDate = date.toLocaleDateString()
  //   return readableDate
  //    }

  let dateFormatter=(epoch)=>{
    let date=new Date(epoch*1000)
  let readableDate = date.toLocaleDateString()
  return readableDate
   }
   

  return (
    <>
         

         
        {currentData?.map((value,id)=>{
        return (
         
         <div className='apidiv' key={id}>
         <img src={value.image} />
          <h3>{value.title}</h3>
         <p> {value.description} </p>
         <p> Date: {dateFormatter(value.date)} </p>
         <p> Location: {value.location} </p> 
         <p> Price: ₹{value.price}/- </p>   
         </div> 
        
        )
     })}
    
     {/* <br /> <br />
     <button onClick={handlePrevious} disabled={currentPage===1} >Previous</button>    
     <button disabled={currentPage===8} onClick={handleNext}>Next</button>
     */}
     

    </>
  )
}


export default Data