import React from 'react'

export default function Alert(props) {
  const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    if(props.alert !== null){
        return (
       
            <div style={{height: '50px'}}>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}>
            {capitalize(props.alert.type)}: {props.alert.message}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
            </div>
             
            
      
       
      )
    }
    else
    {
        return(
            <div style={{height: '50px'}}></div>
        )
    }
  
}
