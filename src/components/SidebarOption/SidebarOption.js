import CreateIcom from "@material-ui/icons/Create";
import React from "react";
import styled from "styled-components";

const SidebarOption = ({ Icon, title }) => {
  return (
    <div>
      <SidebarOptionContainer>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      </SidebarOptionContainer>
    </div>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.div``;
