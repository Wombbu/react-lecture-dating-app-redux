import React from "react";
import styled, { createGlobalStyle } from "styled-components";

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

function App() {
  const [swipeStatus, setSwipeStatus] = React.useState("INITIAL");
  const [response, setResponse] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (swipeStatus === "CENTER") {
      return;
    }

    setTimeout(() => {
      setLoading(true);

      fetch("https://randomuser.me/api/")
        .then(response => response.json())
        .then(json => {
          setResponse(json.results[0]);
          setSwipeStatus("CENTER");
          setLoading(false);
        });
    }, 600);
  }, [swipeStatus]);

  return (
    <IPhoneBackground>
      <GlobalStyle />
      <PhoneDisplayWrapper>
        <TopBar />
        {loading || !response ? <div style={{flex: 1}}></div> : (
          <DateCard
            imageUrl={
              response.picture.large
            }
            name={response.name.first}
            age={response.dob.age}
            swipeStatus={swipeStatus}
          />
        )}
        <Buttons
          onAccept={() => setSwipeStatus("RIGHT")}
          onDecline={() => setSwipeStatus("LEFT")}
        />
      </PhoneDisplayWrapper>
    </IPhoneBackground>
  );
}

export default App;
