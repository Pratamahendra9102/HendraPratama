import React from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";

import Text from "../components/Text";
import View from "../components/View";
import {
  graphInitialData,
  graphOptions,
  getGraphData
} from "../utils/chartUtils";
import colors from "../constants/colors";

const LineGraph = props => {
  const [graphData, setGraphData] = React.useState(graphInitialData);

  React.useEffect(() => {
    setGraphData(oldData => getGraphData(props.streamData, oldData));
  }, [props.streamData]);

  return (
    <GraphContainer>
      <View
        flex={1}
        flexJustifyContent="space-between"
        flexAlignItems="center"
        style={{
          paddingBottom: 4,
          marginBottom: 16,
          width: "100%",
          borderBottom: `1px solid${colors.black}`
        }}
      >
        <Text as="h4">{props.title}</Text>
        <Text as="h4" color={colors.green}>
          {props.streamData} {props.unit}
        </Text>
      </View>

      <Line
        height={props.height}
        width={props.width}
        data={graphData}
        options={{ ...graphOptions, ...props.options }}
      />
    </GraphContainer>
  );
};

const GraphContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 16px;
`;

export default LineGraph;
