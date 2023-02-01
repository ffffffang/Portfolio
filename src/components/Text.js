import React from 'react'
import uuid from "react-uuid";
const Text = (props) => {
  console.log(props);
  return (
    <div className='des'>
        <h3 className='poistion'>{props.position}</h3>
        <p className='company'>{props.company}</p>
        <p className='p-text date'>{props.date}</p>
        {props.intro != undefined &&
                props.intro.map((ele)=>{
                  return <p className='p-text' key={uuid()}>{ele}
                  </p>
        
                })
        }


    </div>
  )
}

export default Text