import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ArtList = () => {
  return (
    <Footer>
      <a href="https://wecode.co.kr"><img width={100} src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/wecode_logo.png" alt="logo" /></a>
      <p><Link to="/contributor">Contributor 소개</Link></p>
    </Footer>
  );
};

export default ArtList;

const Footer = styled.footer`
  margin-top: 100px;
  padding: 30px 50px;
  background-color: black;
  text-align: center;
  
  p {
    margin-top: 10px;  
  }
  
  a {
    color: white;
  }
`;
