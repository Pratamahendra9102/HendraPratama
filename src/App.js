import React from "react";
import styled from "styled-components";
import firebase from "firebase";

import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import ControlPanel from "./layouts/ControlPanel";
import Graphs from "./layouts/Graphs";
import RenderHandler from "./components/RenderHandler";
import Spacer from "./components/Spacer";
import colors from "./constants/colors";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  databaseURL: process.env.REACT_APP_FB_DATABASE_URL,
  projectId: process.env.REACT_APP_FB_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <RenderHandler>
      {isDesktopOrLaptop => (
        <Container>
          <Navbar firebase={firebase} />
          <MainWrapper>
            {isDesktopOrLaptop && <Sidebar />}
            <MainContent>
              <ControlPanel firebase={firebase} />
              <Spacer />

              <Graphs firebase={firebase} />
            </MainContent>
          </MainWrapper>
        </Container>
      )}
    </RenderHandler>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  max-width: 100vw;
  overflow: auto;
`;

const MainWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;

  background-color: ${colors.gray};
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  padding: 16px;
`;

export default App;
