import React from "react";
import autoscroll from "autoscroll-react";
import styled from "styled-components";

class ConsoleLogger extends React.Component {
  render() {
    const { items, ...props } = this.props;

    return (
      <List>
        {props.logData.map(logDataItem => (
          <ListItem key={logDataItem.timestamp}>{logDataItem.data}</ListItem>
        ))}
      </List>
    );
  }
}

const List = styled.ul`
  overflow-y: scroll;

  height: 200px;

  padding: 0;
`;

const ListItem = styled.li`
  font-size: 13px;
`;

export default autoscroll(ConsoleLogger);
