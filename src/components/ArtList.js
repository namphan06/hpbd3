import React from "react";
import styled from "styled-components";
import ArtBox from "components/ArtBox";
import Image from "images/falsekind.png";

const ArtList = () => {
  return (
    <>
      <Container>
        <List>
          <ArtBox image="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/3barum.jpg"></ArtBox>
          <ArtBox image="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/birthday/6thJongTaek.png"></ArtBox>
          <ArtBox image={Image}></ArtBox>
          <ArtBox image={Image}></ArtBox>
          <ArtBox image={Image}></ArtBox>
          <ArtBox image={Image}></ArtBox>
          <ArtBox image={Image}></ArtBox>
          <ArtBox image={Image}></ArtBox>
          {/* {x.map(item => (
            <ArtBox item={item} />
          ))} */}
        </List>
      </Container>
    </>
  );
};

export default ArtList;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  width: 1440px;
`;
