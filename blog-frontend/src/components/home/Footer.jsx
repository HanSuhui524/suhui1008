import styled from "styled-components";
import { Facebook, Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter, } from "../../../node_modules/@mui/icons-material/index";
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import { mobile } from "../../responsive";
  


    const Container = styled.div`
    background-color: #263353;
    display: flex;
    ${mobile({ flexDirection: "column" })}
    `;

const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`
color:white;
`;

const Desc = styled.p`
color: white;
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
      transform:scale(1.1);
    }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
    color:white;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color:white;
   
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 3px;
  &:hover {
      text-decoration:  underline;
      cursor: pointer;
    }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
color:white;
   margin-bottom: 10px;
   display: flex;
   align-items: center; 
   &:hover {
      text-decoration:  underline;
      cursor: pointer;
    }
`;

const Payment = styled.img`
    width: 200px;

`;

const Footer = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Left>
                <Logo>회사 소개</Logo>
                <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                    <a href="https://ko-kr.facebook.com/" target="_blank">
                        <Facebook />
                    </a>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                    <a href="https://www.instagram.com/" target="_blank">
                        <Instagram />
                    </a>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                    <a href="https://twitter.com/?lang=ko" target="_blank">
                        <Twitter />
                    </a>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                    <a href="https://www.pinterest.co.kr/" target="_blank">
                        <Pinterest />
                    </a>
                    </SocialIcon>
                </SocialContainer>
                </Left>
                <Center>
                    <Title>사용자 링크</Title>
                    <List>
                    <ListItem onClick={() => navigate("/")}>홈</ListItem>
                    <ListItem onClick={() => navigate("/writeProduct")}>제품 등록</ListItem>
                    <ListItem onClick={() => navigate("/register")}>회원가입</ListItem>
                    <ListItem onClick={() => navigate("/productList")}>제품 목록</ListItem>
                    <ListItem onClick={() => navigate("/login")}>로그인</ListItem>
                    <ListItem onClick={() => navigate("/write")}>제품 후기 작성</ListItem>
                    <ListItem onClick={() => navigate("/cart")}>장바구니/결제</ListItem>
                    <ListItem onClick={() => navigate("/postList")}>제품 후기 목록</ListItem>
                  
                    </List>
                </Center>
                <Right>
                    <Title>연락</Title>
                        <ContactItem>
                        <Room style={{marginRight:"10px"}}/> 경기도 부천시 도약로 00, 수희빌딩
                        </ContactItem>
                        <ContactItem>
                        <Phone style={{marginRight:"10px"}}/> +1 234 56 78
                        </ContactItem>
                        <ContactItem>
                        <MailOutline style={{marginRight:"10px"}} /> suhee524@hanmail.net
                        </ContactItem>
                        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </Right>
        </Container>
    );
};

export default Footer;