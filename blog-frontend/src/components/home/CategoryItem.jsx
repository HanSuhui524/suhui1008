import styled  from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position: relative;
    &:hover {
      opacity: 0.5;
    }
`;

const Image = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px black;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
`;

const CategoryItem = ({ item }) => {
    return (
      <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>지금 보기</Button>
        </Info>
      </Container>
    );
  };
  
  export default CategoryItem;
  