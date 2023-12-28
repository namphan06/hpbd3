import React, { Component } from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    if (
      (props.location.pathname === "/") |
      (props.location.pathname === "/poem3")
    ) {
      this.state = {
        activeState: "/poem3",
      };
    } else
      this.state = {
        activeState: props.location.pathname,
      };
  }

  toHome = () => {
    this.props.history.push("/poem3");
    window.location.reload("/poem3");
  };

  render() {
    return (
      <Header>
        <MainTitleImg
          onClick={this.toHome}
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/wecode_logo.png"
        />
      </Header>
    );
  }
}

export default withRouter(Main);

const Header = styled.div`
  width: 100%;
  height: 64px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: white;
  font-weight: 700;
  font-size: 23px;
  img {
    width: 150px;
  }
`;
const MainTitleImg = styled.img`
  cursor: pointer;
`;
