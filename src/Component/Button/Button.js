import React from 'react';
import styled from 'styled-components';


const Button = (props) => {

  const StyleButton = styled.button`
   
  padding:20px;
  background-color:black;
  color:white;
  border-radius: 10px;

`

  return (
    <div>
      <StyleButton onClick={props.changeBook}>{props.children}</StyleButton>
    </div>
  )
}


export default Button;