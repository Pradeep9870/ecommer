import React, { useEffect, useState } from "react";
import URL from "../helpers/url";
export default function Home() {

      const [businessCategory, setBusinessCategory] = useState([]);

      useEffect(()=>{
        fetch(`${URL}/api/business-categories?populate=*`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
          console.log(data)
          setBusinessCategory(data.data);

        })
        .catch(()=>{

        });
      }, []);




  return (
    <>
      <h1>Home pages</h1>className
      <ul className="nav">
        {
          businessCategory.map((cv,idx,arr)=>{
            return <li key={idx} className="me-3">
                      <a href="#">
                        <img src={`${URL}` +cv.attributes.image.data.attributes.url}/><br/>
                        {cv.attributes.name}
                      </a>
                    </li>
                    
          })
        }
        
        
      </ul>
    </>
  )
}
