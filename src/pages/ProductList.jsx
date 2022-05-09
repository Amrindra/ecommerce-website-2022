import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Dresses</Title>

      <FilterContain>
        <Filter>
          <FilterText>Filter Products: </FilterText>
        </Filter>

        <Filter>
          <FilterText>Sort Products: </FilterText>
        </Filter>
      </FilterContain>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1``;

const FilterContain = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

export default ProductList;
