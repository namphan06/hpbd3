import React, { Component } from "react";
import styled from "styled-components";
import ArtBox from "components/ArtBox";
import { API_URL } from "config.js";

class Result extends Component {
  state = {
    drawing: [],
    poem: [],
    poem3: [],
  };

  componentDidMount() {
    fetch(`${API_URL}/result/1`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ drawing: res.results.slice(0, 3) });
      });

    fetch(`${API_URL}/result/2`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ poem3: res.results.slice(0, 3) });
      });

    fetch(`${API_URL}/result/3`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ poem: res.results.slice(0, 3) });
      });
  }

  render() {
    return (
      <Page>
        <Section>
          <Title>삼행시 부문 TOP 3</Title>

          <Center>
            {this.state.poem3.filter(el => el.count > 0).map((el, idx) => (
              <ArtBox info={el} vote={false} top={idx + 1} />
            ))}
          </Center>
        </Section>
        <Section>
          <Title>그림 부문 TOP 3</Title>
          <Center>
            {this.state.drawing.filter(el => el.count > 0).map((el, idx) => (
              <ArtBox info={el} vote={false} top={idx + 1} />
            ))}
          </Center>
        </Section>
        <Section>
          <Title>시 부문 TOP 3</Title>
          <Center>
            {this.state.poem.filter(el => el.count > 0).map((el, idx) => (
              <ArtBox info={el} vote={false} top={idx + 1} />
            ))}
          </Center>
        </Section>
      </Page>
    );
  }
}

export default Result;

const Page = styled.div`
  padding-top: 100px;
`;

const Section = styled.section`
  margin-bottom: 100px;
`;

const Title = styled.p`
  padding-bottom: 15px;
  margin: 0 20px 20px;
  border-bottom: 1px solid black;
  font-size: 21px;
  font-weight: bold;
`;

const Center = styled.div`
  text-align: center;
`;
