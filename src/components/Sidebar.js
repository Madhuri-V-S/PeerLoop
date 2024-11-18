// Sidebar.js
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // Correct import for the icon
import React from 'react';
import styled from "styled-components";

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>PEERLOOP FAM</h2>
          <h3>
            <FiberManualRecordIcon />
          </h3>
        </SidebarInfo>
      </SidebarHeader>
    </SidebarContainer>
  );
}

export default Sidebar; // Make sure this is included

const SidebarContainer = styled.div`
  // Add styles as needed
`;

const SidebarHeader = styled.div`
  // Add styles as needed
`;

const SidebarInfo = styled.div`
  // Add styles as needed
`;
