import React from 'react'

const Avatar = ({ Children, backgroundColor, px, py, color,  borderRadius, fontSize,cursor}) =>{ 
    const style={
      backgroundColor,
      padding:`${px} ${py}`,
      color: color || 'black',
      borderRadius,
      fontSize,
      textAlign: "center",
      cursor: cursor || 'null',
      textDecoration: "none"
    }

    
  return (
    <div style={style} >{ Children}</div>
  )
};

export default Avatar
