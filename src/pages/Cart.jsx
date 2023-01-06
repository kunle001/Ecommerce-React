import styled from "styled-components"
import Announcements from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container= styled.div`
`
const Title= styled.h1`
    font-weight:300;
    text-align:center;
`
const Top= styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:20px;
`;

const TopButton= styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border:${(props)=> props.type === "filled" && "none"};
    background-color:${(props)=>props.type==="filled" ? "black": "transparent"};
    color:${(props)=>props.type==="filled" && "white"}
`;

const TopTexts= styled.div``
const TopText= styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin: 0px 10px;
`
const Buttom= styled.div`
    display:flex;
    justify-content: space-between;
`
const Wrapper= styled.div``
const Info= styled.div`
    flex:3
`
const Summary= styled.div`
    flex:1
`;

const Product= styled.div`
    display:flex;
    justify-content:space-between;
`;
const PriceDetail= styled.div`
    flex:1
`;
const ProductDetail= styled.div`
    flex:2;
`;
const ProductColor= styled.div`
    wodth:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=> props.color}
`;
const ProductID= styled.span``;
const ProductName= styled.span``;
const ProductSize= styled.div``;
const Details= styled.div`
    display:flex;
    padding:20px;
    flex-direction:column;
    justify-content:space-around;
`;

const Image= styled.img``

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your WishList(0)</TopText>
        </TopTexts>
        <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Buttom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://th.bing.com/th/id/R.7365c283babee9d5a83a57f7d446126b?rik=tj3X5QHeK93pGA&pid=ImgRaw&r=0"/>
                        <Details>
                            <ProductName><b>Product:</b>JESSIE THUNDER</ProductName>
                            <ProductID><b>ID:</b>JESSIE THUNDER</ProductID>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        Price
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>Summary</Summary>
        </Buttom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
