import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";

import { db } from "../../firebase";
import SidebarOption from "../SidebarOption/SidebarOption";

const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <>
      <SidebarContainer>
        <SidebarHeader>
          <SidebarInfo>
            <h2>OkMrDev HQ</h2>
            <h3>
              <FiberManualRecord />
              Nayeem
            </h3>
          </SidebarInfo>
          <Create />
        </SidebarHeader>

        <SidebarOption Icon={InsertComment} title="Threads"></SidebarOption>
        <SidebarOption Icon={Inbox} title="Mention & Reaction"></SidebarOption>
        <SidebarOption Icon={Drafts} title="Saved Items"></SidebarOption>
        <SidebarOption
          Icon={BookmarkBorder}
          title="Channel Browser"
        ></SidebarOption>
        <SidebarOption
          Icon={PeopleAlt}
          title="People & user group"
        ></SidebarOption>
        <SidebarOption Icon={Apps} title="Apps"></SidebarOption>
        <SidebarOption Icon={FileCopy} title="File Browser"></SidebarOption>
        <SidebarOption Icon={ExpandLess} title="Show Less"></SidebarOption>
        <hr />
        <SidebarOption Icon={ExpandMore} title="Channel"></SidebarOption>
        <hr />
        <SidebarOption
          Icon={Add}
          title="Add Channel"
          addChannelOption
        ></SidebarOption>
        {channels?.docs.map((doc) => (
          <SidebarOption key={doc.id} title={doc.data().name}></SidebarOption>
        ))}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.2;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
