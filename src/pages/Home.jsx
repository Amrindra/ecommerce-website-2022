import styled from "styled-components";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 60px;
  background-color: black;
`;
