import React from 'react';
import styled from 'styled-components';

const TopBarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: relative;
  height: 44px;
  background-color: #333;
  margin-right: 500px;
  border: 2px solid red;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const TopBarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerLeftSpan = styled.div`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenterSpan = styled.div`
  cursor: pointer;
  margin-right: 5%;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerRightSpan = styled.div`
  cursor: pointer;  
`;

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <div>
    <TopBarStyle>
      <TopBarContainer>
        <TopBarContainerLeft>
        {/* <div className="container-left"> */}
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </TopBarContainerLeft>
        {/* </div> */}
        <TopBarContainerCenter>
        {/* <div className="container-center"> */}
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        {/* </div> */}
        </TopBarContainerCenter>
        {/* <div className="container-right"> */}
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        {/* </div> */}
        </ContainerRight>
        
      </TopBarContainer>
    </TopBarStyle>
    </div>
  )
}

export default TopBar;