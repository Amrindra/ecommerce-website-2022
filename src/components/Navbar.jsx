import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <LeftSide>Left</LeftSide>
        <Center>Center</Center>
        <RightSide>RIght</RightSide>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const RightSide = styled.div`
  flex: 1;
`;

export default Navbar;
