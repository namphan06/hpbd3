import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import ArtBox from "components/ArtBox";
import anivimg from "../images/title.png";
import { API_URL } from "config.js";

const artInfo = {
  "/poem3": {
    url: 2,
    data: "three_rows",
    label: "삼 행 시",
  },
  "/pic": {
    url: 1,
    data: "picture",
    label: "그 림",
  },
  "/poem": {
    url: 3,
    data: "poems",
    label: "시",
  },
};

class Main extends Component {
  constructor(props) {
    super(props);

    let activeTab = props.location.pathname;

    if (props.location.pathname === "/") {
      activeTab = "/poem3";
    }

    this.state = {
      showMenu: false,
      activeTab,
      activeLabel: "삼 행 시",
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeTab !== this.state.activeTab) {
      this.fetchData();
    }
  }

  async fetchData() {
    const { activeTab } = this.state;
    const result = await axios(`${API_URL}/artwork/${artInfo[activeTab].url}`);

    this.setState({
      data: result.data[artInfo[activeTab].data],
    });
  }

  toPage = (path) => {
    this.setState({
      activeTab: path,
      activeLabel: artInfo[path].label,
      showMenu: false,
    });

    this.props.history.push(path);
  };

  toggleDropDown = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { activeTab, activeLabel, data, showMenu } = this.state;

    return (
      <MainWrap>
        <MainAniv>
          <img src={anivimg} />
        </MainAniv>
        <Notice>
          <p>투표권: 삼행시 - 5개 / 그림 - 1개 / 시  - 1개</p>
          <p>한 번 투표하면 취소할 수 없으니 신중하게 해주세요!</p>
        </Notice>
        <MainUl>
          <Mainli
            selected={activeTab === "/poem3"}
            onClick={() => this.toPage("/poem3")}
          >
            삼 행 시
          </Mainli>
          <Mainli
            selected={activeTab === "/pic"}
            onClick={() => this.toPage("/pic")}
          >
            그 림
          </Mainli>
          <Mainli
            selected={activeTab === "/poem"}
            onClick={() => this.toPage("/poem")}
          >
            시
          </Mainli>
          <Link to="/result">
            <ResultButton>결과 보기</ResultButton>
          </Link>
        </MainUl>
        <MainUlMobile>
          <DropDownWrapper onClick={this.toggleDropDown}>
            <DropDownLeft>{activeLabel}</DropDownLeft>
            <DropDownRight>
              <ArrowImg src="/triangle-2.png" alt="triangle-img" />
            </DropDownRight>
          </DropDownWrapper>
          <DropDownMenu show={showMenu}>
            <DropDownLi
              selected={activeTab === "/poem3"}
              onClick={() => this.toPage("/poem3")}
            >
              삼 행 시
            </DropDownLi>
            <DropDownLi
              selected={activeTab === "/pic"}
              onClick={() => this.toPage("/pic")}
            >
              그 림
            </DropDownLi>
            <DropDownLi
              selected={activeTab === "/poem"}
              onClick={() => this.toPage("/poem")}
            >
              시
            </DropDownLi>
          </DropDownMenu>
          <Link to="/result">
            <ResultButton>결과 보기</ResultButton>
          </Link>
        </MainUlMobile>

        <Wrap>
          {data.map((el) => (
            <ArtBox key={el.artwork_id} info={el} />
          ))}
        </Wrap>
      </MainWrap>
    );
  }
}

export default Main;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const MainAniv = styled.div`
  text-align: center;
  margin-top: 36px;
  margin-bottom: 50px;
  img {
    width: 320px;
    height: auto;
  }
`;

const MainUlMobile = styled.div`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  padding-left: calc(10% - 90px);

  @media (min-width: 769px) {
    display: none;
  }
`;

const Notice = styled.div`
  margin: 50px 0;
  font-size: 17px;
  
  p {
    line-height: 25px;
  }
`;

const DropDownWrapper = styled.div`
  /* width: 190px;
  height: 36px;
  border: solid 1px #000000;
  border-bottom: none;
  background-color: black;
  color: white;
  display: flex;
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-left: 20px; */

  display: flex;
  width: 130px;
  height: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
  margin-left: 15px;
  margin-bottom: 10px;
`;

const DropDownLeft = styled.div`
  width: 110px;
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropDownRight = styled.div`
  background-color: black;
  position: relative;
`;

const ArrowImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const DropDownMenu = styled.ul`
  position: absolute;
  top: 40px;
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 5;
  margin-left: 15px;
`;

const MainUl = styled.ul`
  position: relative;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  padding-left: calc(10% - 90px);
  // padding-left: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Mainli = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  width: 150px;
  height: 50px;
  text-align: center;
  color: ${({ selected }) => (selected ? "white" : "rgba(0,0,0,0.4)")};
  background-color: ${({ selected }) =>
    selected ? "black" : "rgba(0,0,0,0.1)"};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: 900;
  font-size: 21px;

  &:hover {
    color: white;
    background-color: black;
    transition: 300ms;
  }
`;

const DropDownLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 170px;
  height: 40px;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  background-color: #dddbd8;
  font-weight: 900;
  font-size: 17px;
  border-bottom: 1px solid lightgray;

  &:hover {
    color: white;
    background-color: black;
    transition: 300ms;
  }
`;

const Wrap = styled.div`
  text-align: center;
`;

const ResultButton = styled.div`
  position: absolute;
  // right: calc(10% - 90px);
  right: 20px;
  bottom: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
`;
