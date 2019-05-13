import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import * as ReactRedux from "react-redux";
import { fetchRandomUser, swipeLeft, swipeRight } from "../redux";

import { Buttons } from "./Buttons";
import { DateCard } from "./DateCard";
import { TopBar } from "./TopBar";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
  }
`;

const IPhoneBackground = styled.div`
  background-color: rgb(250, 250, 250);
  background-image: url("https://raw.githubusercontent.com/Wombbu/rekry/master/ui/public/iphone.png");
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const PhoneDisplayWrapper = styled.div`
  position: absolute;
  margin: auto;
  background-color: #fff;
  width: 265px;
  height: 470px;
  top: -3px;
  bottom: 0;
  left: 1px;
  right: -0.5px;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
`;

const App = props => {
  React.useEffect(() => props.fetchRandomUser(), []);

  return (
    <IPhoneBackground>
      <GlobalStyle />
      <PhoneDisplayWrapper>
        <TopBar />
        {props.loading || !props.response ? (
          <div style={{ flex: 1 }} />
        ) : (
          <DateCard
            imageUrl={props.response.picture.large}
            name={props.response.name.first}
            age={props.response.dob.age}
            swipeStatus={props.swipeStatus}
          />
        )}
        <Buttons
          onAccept={() => {
            props.swipeRight();
            setTimeout(props.fetchRandomUser, 600);
          }}
          onDecline={() => {
            props.swipeLeft();
            setTimeout(props.fetchRandomUser, 600);
          }}
        />
      </PhoneDisplayWrapper>
    </IPhoneBackground>
  );
};

const mapStateToProps = (state) => ({
  response: state.response,
  loading: state.loading,
  swipeStatus: state.swipeStatus
});

const mapDispatchToProps = dispatch => ({
  fetchRandomUser: () => dispatch(fetchRandomUser()),
  swipeLeft: () => dispatch(swipeLeft()),
  swipeRight: () => dispatch(swipeRight())
});

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);
