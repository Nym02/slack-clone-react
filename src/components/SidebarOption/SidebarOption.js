import CreateIcom from "@material-ui/icons/Create";
import React from "react";
import styled from "styled-components";

import { db } from "../../firebase";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const addChannel = () => {
    const channelName = prompt("Enter Channel Name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {};
  return (
    <div>
      <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectChannel}
      >
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SidebarOptionChannel>
            <span>#</span> {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
    </div>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
`;
const SidebarOptionChannel = styled.h3`
  padding: 10px 10px;
  font-weight: 300;
`;
