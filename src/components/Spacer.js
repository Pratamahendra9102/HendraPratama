import styled from "styled-components";

import colors from "../constants/colors";

const Spacer = styled.div`
  margin: 1rem 0;

  height: 1px;

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : colors.black};
`;

export default Spacer;
