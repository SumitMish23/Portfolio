import React from 'react';
import './skills.css'
const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 16,
      width: '150px',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      marginTop:10,
      marginBottom:7,
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
        display:'block',
      textAlign:'center',
      color: 'white',
      fontSize:'0.8rem',
      fontWeight: 'bold'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;