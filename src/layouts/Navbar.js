import React from "react";
import styled from "styled-components";

import RenderHandler from "../components/RenderHandler";
import Text from "../components/Text";
import colors from "../constants/colors";

const Navbar = props => {
  return (
    <RenderHandler>
      {isDesktopOrLaptop => (
        <TopNavbar isDesktopOrLaptop={isDesktopOrLaptop}>
          <Text
            color={colors.navy}
            as={!isDesktopOrLaptop ? "h4" : "h3"}
            align={!isDesktopOrLaptop && "center"}
            withoutSpacing
          >
            SISTEM KONTROL DAN MONITORING KONSUMSI ENERGI LISTRIK SECARA
            REALTIME BERBASIS INTERNET OF THINGS (IoT)
          </Text>
        </TopNavbar>
      )}
    </RenderHandler>
  );
};

const TopNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${props => (props.isDesktopOrLaptop ? `8px 20px;` : `16px 20px;`)};

  min-height: ${props => (props.isDesktopOrLaptop ? `50px;` : undefined)};

  background-color: ${colors.white};
  box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.4);
  -webkit-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.4);
  -moz-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.4);
`;

export default Navbar;
