import styled from "styled-components";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

const Container = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Title = styled.div``;
const Button = styled.button``;

export default CategoryItem;
