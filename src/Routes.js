import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import backimg from "images/pattern-bg.svg";
import Main from "./pages/Main";
import ArtList from "components/ArtList";
import ModalVote from "./components/Modal";
import Contributor from "./pages/Contributor";
import Header from "components/Header";
import Footer from "components/Footer";
import Result from "pages/Result";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Page>
          <Header/>
          <Content>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route exact path="/poem3" component={Main}/>
              <Route exact path="/pic" component={Main}/>
              <Route exact path="/poem" component={Main}/>
              <Route exact path="/art" component={ArtList}/>
              <Route exact path="/modal" component={ModalVote}/>
              <Route exact path="/contributor" component={Contributor}/>
              <Route exact path="/result" component={Result}/>
            </Switch>
          </Content>
          <Footer/>
        </Page>
      </Router>
    );
  }
}

export default Routes;

const Page = styled.div`
  background-image: url(${backimg});
  background-color: #f6f4f1;
`;

const Content = styled.div`
  max-width: 1300px;
  min-width: 320px;
  margin: 0 auto;
`;
