import React from "react";
import styled from "styled-components";
import { ChevronRight, ChevronLeft } from "react-feather";

import Text from "../components/Text";
import FormControl from "../components/FormControl";
import Spacer from "../components/Spacer";
import colors from "../constants/colors";

const Sidebar = () => {
  const [show, setShow] = React.useState(true);

  return (
    <SidebarWrapper show={show}>
      <SidebarContainer show={show}>
        <Text color="white" as="h3">
          Profil
        </Text>

        <Spacer backgroundColor={colors.white} />

        <FormControl>
          <Text color="white" as="small">
            Nama
          </Text>
          <Text color="white" as="h4">
            Hendra Pratama
          </Text>
          <Text color="white" as="small">
            (NRP: 1310177003)
          </Text>
        </FormControl>

        <FormControl>
          <Text color="white" as="small">
            Dosen Pembimbing 1
          </Text>
          <Text color="white" as="h4">
            Syechu Dwitya Nugraha, S.ST. MT.
          </Text>
          <Text color="white" as="small">
            (NIP: 2000000051)
          </Text>
        </FormControl>

        <FormControl>
          <Text color="white" as="small">
            Dosen Pembimbing 2
          </Text>
          <Text color="white" as="h4">
            Sunu Hasta Wibowo, S.T. MT.
          </Text>
          <Text color="white" as="small">
            (NIP: 19650725 199103 1 003)
          </Text>
        </FormControl>
      </SidebarContainer>
      <SidebarTool>
        <SidebarToggler onClick={() => setShow(!show)}>
          {show ? (
            <ChevronLeft size="24" color="#293f4c" />
          ) : (
            <ChevronRight size="24" color="#293f4c" />
          )}
        </SidebarToggler>
      </SidebarTool>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: inherit;
  width: ${props => (props.show ? "250px" : "40px")};

  background-color: ${colors.navy};
`;

const SidebarContainer = styled.div`
  flex: 1;
  flex-direction: column;

  padding: 8px 20px;

  visibility: ${props => (props.show ? "visible" : "hidden")};
`;

const SidebarTool = styled.div`
  display: flex;
  justify-content: flex-end;

  height: 40px;

  background-color: ${colors.black};
`;

const SidebarToggler = styled.button`
  height: 40px;
  width: 40px;

  background-color: ${colors.white};

  outline: none;
`;

export default Sidebar;
