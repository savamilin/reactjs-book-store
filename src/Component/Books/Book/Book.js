import React from 'react';
import styled from 'styled-components';


const Book = (props) => {

  console.log(props)

  const StyleDiv = styled.div`
    width:250px;
    box-shadow:5px 10px black;
    margin-top:40px;
    text-align:center;
`

  const StyleImg = styled.img`
  
   width:100%;
   height:80%;
  `

  const StyleA = styled.a`
   text-decoration:none;
  
  `


  return (


    <StyleA href={props.website} target="_blank">

      <StyleDiv>
        <StyleImg src={props.cover} alt="" />
        <p>{props.author}</p>
        <p>{props.pages}</p>
      </StyleDiv>

    </StyleA>




  )
}


export default Book;