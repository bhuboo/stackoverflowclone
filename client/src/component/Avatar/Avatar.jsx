import React from 'react'

const Avatar = ({childern, backgroundColor, px, py, color,  borderRadius, fontSize,cursor}) =>{ 
    const style={
      backgroundColor,
      padding:`${px} ${py}`,
      color: color || 'black',
      borderRadius,
      fontSize,
      textAlign: "center",
      cursor: cursor || null,
      textDecoration: "none"
    }

    
  return (
    <div style={style} >
     {childern}
      
    </div>
  )
}

export default Avatar
