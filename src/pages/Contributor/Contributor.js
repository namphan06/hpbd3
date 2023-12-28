import React, { Component } from "react";
import styled from "styled-components";
import pattern from "../../images/pattern-bg@2x.png";
import contributorImg from "../../images/contributors.jpg";

const breakPoint = "810px";
const park = "https://ulfrid.github.io";
const lee = "https://github.com/evergreen-david";
const ji = "https://github.com/rocket12213";
const yang = "https://joonsikyang.github.io";
const kim = "https://wecode.co.kr/";
const shim = "https://github.com/Dev-Dat";
const kwon = "https://github.com/Wanderlust-sol";
const oh = "https://github.com/saengmotmi";
const yoo = "https://github.com/k904808";
const leeso = "https://soheon-lee.github.io/";
const son = "https://github.com/jamessoun93";
const doori = "https://github.com/gollumnima";

export class Contributor extends Component {
  render() {
    return (
      <ContributorPage pattern={pattern}>
        <Body>
          <Title>
            <div className="title">Happy 1st B-Day</div>
            <div>
              <span className="sub-title">Contributors</span>
            </div>
          </Title>
          <ContributorImg>
            <img src={contributorImg} alt="img" />
            <span className="date">2020.04.10</span>
            <span className="nameTag park">
              <a href={park} rel="noopener noreferrer" target="_blank">
                멘토 박지훈
              </a>
            </span>
            <span className="nameTag lee">
              <a href={lee} rel="noopener noreferrer" target="_blank">
                멘토 이상록
              </a>
            </span>
            <span className="nameTag ji">
              <a href={ji} rel="noopener noreferrer" target="_blank">
                4기 지소연
              </a>
            </span>
            <span className="nameTag yang">
              <a href={yang} rel="noopener noreferrer" target="_blank">
                멘토 양준식
              </a>
            </span>
            <span className="nameTag kim">
              <a href={kim} rel="noopener noreferrer" target="_blank">
                멘토 김예리
              </a>
            </span>
            <span className="nameTag shim">
              <a href={shim} rel="noopener noreferrer" target="_blank">
                6기 심형민
              </a>
            </span>
            <span className="nameTag kwon">
              <a href={kwon} rel="noopener noreferrer" target="_blank">
                6기 권태솔
              </a>
            </span>
            <span className="nameTag oh">
              <a href={oh} rel="noopener noreferrer" target="_blank">
                6기 오종택
              </a>
            </span>
            <span className="nameTag leeso">
              <a href={leeso} rel="noopener noreferrer" target="_blank">
                6기 이소헌
              </a>
            </span>
            <span className="nameTag yoo">
              <a href={yoo} rel="noopener noreferrer" target="_blank">
                6기 유경희
              </a>
            </span>
            <span className="nameTag son">
              <a href={son} rel="noopener noreferrer" target="_blank">
                멘토 손승현
              </a>
            </span>
            <span className="nameTag doori">
              <a href={doori} rel="noopener noreferrer" target="_blank">
                멘토 김두리
              </a>
            </span>
          </ContributorImg>
          <NameList>
            <div>Wecoders</div>
            <li>
              <a href={kim} rel="noopener noreferrer" target="_blank">
                멘토 김예리
              </a>
            </li>
            <li>
              <a href={park} rel="noopener noreferrer" target="_blank">
                멘토 박지훈
              </a>
            </li>
            <li>
              <a href={leeso} rel="noopener noreferrer" target="_blank">
                멘토 김두리
              </a>
            </li>
            <li>
              <a href={yang} rel="noopener noreferrer" target="_blank">
                멘토 양준식
              </a>
            </li>
            <li>
              <a href={leeso} rel="noopener noreferrer" target="_blank">
                멘토 손승현
              </a>
            </li>
            <li>
              <a href={lee} rel="noopener noreferrer" target="_blank">
                멘토 이상록
              </a>
            </li>
            <li>
              <a href={ji} rel="noopener noreferrer" target="_blank">
                4기 지소연
              </a>
            </li>
            <li>
              <a href={kwon} rel="noopener noreferrer" target="_blank">
                6기 권태솔
              </a>
            </li>
            <li>
              <a href={shim} rel="noopener noreferrer" target="_blank">
                6기 심형민
              </a>
            </li>
            <li>
              <a href={oh} rel="noopener noreferrer" target="_blank">
                6기 오종택
              </a>
            </li>
            <li>
              <a href={yoo} rel="noopener noreferrer" target="_blank">
                6기 유경희
              </a>
            </li>
            <li>
              <a href={leeso} rel="noopener noreferrer" target="_blank">
                6기 이소헌
              </a>
            </li>
          </NameList>
        </Body>
      </ContributorPage>
    );
  }
}

export default Contributor;

const ContributorPage = styled.div`
  background-image: url(${pattern});
  * {
    box-sizing: border-box;
  }
`;

const Body = styled.div`
  margin-top: 95px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  a {
    color: inherit;
    text-decoration: none;
  }
  @media (max-width: ${breakPoint}) {
    margin-top: 64px;
  }
`;

const Title = styled.div`
  font-family: NotoSansCJKkr;
  font-size: 50px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
  div {
    text-align: center;
  }
  .title {
    color: #000;
    padding: 5px;
    margin-bottom: 10px;
  }
  .sub-title {
    color: #fff;
    background-color: #000;
    padding: 5px;
  }
  @media (max-width: ${breakPoint}) {
    font-size: 40px;
  }
`;

const ContributorImg = styled.div`
  margin: 30px auto 0;
  width: 799px;
  position: relative;
  @media (max-width: ${breakPoint}) {
    width: 90%;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 3px;
    border: 2px solid #000;
    box-shadow: 15px 15px 0px 0px #333;
  }
  .date {
    font-family: NotoSansCJKkr;
    position: absolute;
    width: 200px;
    top: 40px;
    left: -60px;
    background-color: #fed925;
    color: #fff;
    font-size: 25px;
    font-weight: 800;
    padding: 10px 10px 7px;
    line-height: 0.6;
    letter-spacing: 1px;
    text-align: right;
    clip-path: polygon(10% 0%, 100% 1%, 100% 100%, 10% 100%, 0% 50%);
    @media (max-width: ${breakPoint}) {
      display: none;
    }
  }
  .nameTag {
    background-color: rgba(17, 17, 17, 0.6);
    font-size: 13px;
    color: #fff;
    padding: 5px 5px 10px;
    border-radius: 2px;
    height: 27px;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      60% 75%,
      50% 95%,
      40% 76%,
      0% 75%
    );
    &:hover {
      background-color: rgba(17, 17, 17, 1);
      font-weight: 600;
    }
    @media (max-width: ${breakPoint}) {
      display: none;
    }
  }
  .park {
    position: absolute;
    top: 100px;
    left: 100px;
  }
  .lee {
    position: absolute;
    top: 180px;
    left: 230px;
  }
  .ji {
    position: absolute;
    top: 220px;
    left: 190px;
  }
  .yang {
    position: absolute;
    top: 155px;
    left: 280px;
  }
  .kim {
    position: absolute;
    top: 130px;
    left: 360px;
  }
  .shim {
    position: absolute;
    top: 190px;
    left: 450px;
  }
  .kwon {
    position: absolute;
    top: 140px;
    left: 510px;
  }
  .oh {
    position: absolute;
    top: 300px;
    left: 510px;
  }
  .leeso {
    position: absolute;
    top: 175px;
    left: 600px;
  }
  .yoo {
    position: absolute;
    top: 220px;
    left: 660px;
  }
  .son {
    position: absolute;
    top: 280px;
    left: 40px;
  }
  .doori {
    position: absolute;
    top: 250px;
    left: 100px;
  }
`;

const NameList = styled.ul`
  display: none;
  margin: 30px;
  margin-top: 60px;
  text-align: center;
  @media (max-width: ${breakPoint}) {
    display: block;
  }
  div {
    font-family: NotoSansCJKkr;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  li {
    margin-bottom: 10px;
    &:hover {
      font-weight: 700;
    }
  }
`;
