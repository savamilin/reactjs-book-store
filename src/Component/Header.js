import React from 'react';
import styled from 'styled-components';



const Header = () => {

  const StyleHeader = styled.header`
    background-color:black;
    padding:20px;
    text-align:center;

`

  const StyleH1 = styled.h1`
    color:white;
    font-size:50px;
    margin:0;
    
`


  return (
    <StyleHeader>
      <StyleH1>Book Store</StyleH1>
    </StyleHeader>
  )
}


export default Header;