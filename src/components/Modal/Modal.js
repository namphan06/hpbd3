import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import xButton from "images/x-mark-48.png";
import arrowRight from "images/arrow-right.png";
import { API_URL } from "../../config";

const settings = {
  infinite: false,
  speed: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  // adaptiveHeight: true,
  // variableWidth: true,
  centerMode: true,
};

const ModalVote = ({ isVisible, setIsVisible, vote, info }) => {
  const [isEntered, setIsEntered] = useState(false);
  const [isButtonEntered, setIsButtonEntered] = useState(false);
  const [realWidth, setRealWidth] = useState(0);
  const [realHeight, setRealHeight] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLength, setImageLength] = useState(0);
  const imageRef = useRef();
  const sliderRef = useRef();
  const { image_urls, artist, batch, artwork_id } = info;

  useEffect(() => {
    // getImageSize();
    // setImageLength(image_urls.length);
  }, [image_urls]);

  const modalShow = () => {
    if (!isEntered || isButtonEntered) {
      setIsVisible(!isVisible);
      setCurrentSlide(0);
      sliderRef.current.slickGoTo(0);
    }
  };

  const getImageSize = () => {
    if (!imageRef.current) return;

    const realWidth = imageRef.current.naturalWidth;
    const realHeight = imageRef.current.naturalHeight;
    setRealWidth(realWidth);
    setRealHeight(realHeight);
  };

  const moveSlide = (e) => {
    const btn = e.target.className.split(" ")[1];
    if (btn === "btn-left") {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current.slickPrev();
    } else if (btn === "btn-right") {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current.slickNext();
    }
  };

  const handleVote = async() => {
    alert("투표가 종료되었습니다 ~ 😘");
    return;

    try {
      const code = localStorage.getItem("user") || "";

      const res = await axios.post(
        `${API_URL}/vote`,
        {
          artwork: artwork_id,
        },
        {
          headers: {
            code,
          },
        }
      );
      localStorage.setItem("user", res.data.code);
      alert("소중한 1표 땡큐요~😘");
    } catch (err) {
      if (err.response.status === 409) {
        alert("이미 투표하신 작품입니다.🙊");
      } else if (err.response.status === 400) {
        alert("해당 부문에 투표권이 끝났습니다!");
      } else {
        alert("서버 에러가 발생했나봐요! 알려주세요.");
      }
    }
  };

  return (
    <ModalContainer onClick={modalShow} isVisible={isVisible}>
      <Background />
      <ModalMain
        onMouseEnter={() => setIsEntered(!isEntered)}
        onMouseLeave={() => setIsEntered(!isEntered)}
      >
        <CloseButton
          onClick={modalShow}
          onMouseEnter={() => setIsButtonEntered(!isButtonEntered)}
          onMouseLeave={() => setIsButtonEntered(!isButtonEntered)}
        />
        <ModalArtsWrapper
          currentSlide={currentSlide}
          imageLength={image_urls.length}
        >
          <div
            className="btn btn-left btn-scroll btn-scroll-left"
            onClick={(event) => moveSlide(event)}
          />
          <div
            className="btn btn-right btn-scroll btn-scroll-right"
            onClick={(event) => moveSlide(event)}
          />
          <ModalArts>
            <Slider {...settings} ref={sliderRef}>
              {image_urls.map((param, idx) => (
                <SliderLi
                  Width={realWidth}
                  Height={realHeight}
                  key={idx}
                  style={{
                    display: "flex",
                    objectFit: "cover",
                    textAlign: "center",
                  }}
                >
                  <img src={param} ref={imageRef} alt="img" />
                </SliderLi>
              ))}
            </Slider>
          </ModalArts>
        </ModalArtsWrapper>
        <ModalBottom>
          <BottomLeft>
            <ArrowRight />
            <CreatorName>
              {batch}기 {artist}
            </CreatorName>
          </BottomLeft>
          {vote !== false && (
            <BottomRight onClick={handleVote}>
              <span>투표하기</span>
            </BottomRight>
          )}
        </ModalBottom>
      </ModalMain>
    </ModalContainer>
  );
};

export default ModalVote;

const ModalContainer = styled.div`
  z-index: 3;

  width: 100vw;
  height: 100vh;

  display: ${(props) => (props.isVisible ? "block" : "none")};
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
`;

const Background = styled.div`
  z-index: 1;
  opacity: 0.8;
  background: #000000;

  width: 100%;
  height: 100%;

  position: absolute;
`;

const ModalMain = styled.div`
  z-index: 2;
  max-width: 800px;
  margin: 30px auto 0;
  position: relative;

  border-radius: 4px;
  border: solid 2.3px #000000;
  background-color: #f6f4f1;
`;

const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  background: transparent url(${xButton}) no-repeat center center;
  background-size: cover;
  cursor: pointer;

  position: absolute;
  top: -30px;
  right: 0;
`;

const ModalArts = styled.ul`
  max-width: 898px;
  width: 100%;
  height: 562px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  overflow: hidden;

  border-bottom: solid 2.3px #000000;

  .slick-slide {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* position: relative; */
    //background-color: black;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      //min-width: 800px;

      /* position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); */
      /* text-align: center; */

      margin: auto 0;
    }
  }
`;

const ModalArtsWrapper = styled.div`
  overflow: hidden;
  position: relative;

  .btn {
    z-index: 10;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    border-radius: 50%;

    &-left {
      left: 30px;
      display: ${(props) => props.currentSlide === 0 ? "none" : "inline-block"};
      background: url("https://res.kurly.com/pc/service/main/1908/btn_prev_default.png?v=1")
        no-repeat 50% 50%;
    }

    &-right {
      right: 30px;
      display: ${(props) => props.currentSlide === props.imageLength - 1 ? "none" : "inline-block"};
      background: url("https://res.kurly.com/pc/service/main/1908/btn_next_default.png?v=1")
        no-repeat 50% 50%;
    }
  }
`;

const SliderLi = styled.div`
  //background: black;
  max-width: 898px;
  width: 100%;
  height: 562px;

  display: flex !important;
  justify-content: center;
  align-items: center;

  /* div {
    display: flex;
    align-items: center;
  } */

  img {
    /* align-self: center; */
    /*width: ${(props) => (props.Width >= 1000 ? "100%" : props.Width + "px")};
    height: ${(props) => (props.Height >= 1000 ? "100%" : props.Height + "px")};*/
  }
`;

const ModalBottom = styled.div`
  height: 63px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomLeft = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-left: 26px;

  cursor: default;
`;

const ArrowRight = styled.div`
  width: 17px;
  height: 23px;
  background: transparent url(${arrowRight}) no-repeat center center;
  background-size: cover;
`;

const CreatorName = styled.span`
  background-color: #000000;
  padding: 8px 10px;
  margin-left: 4px;
  border-radius: 2px;

  font-size: 15px;
  font-weight: 900;
  color: #ffffff;
  text-align: center;
`;

const BottomRight = styled.div`
  border-radius: 2px;
  background-color: #1200ff;
  padding: 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 26px;

  cursor: pointer;

  span {
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
  }
`;
