import styled from "styled-components"


const Container= styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://th.bing.com/th/id/R.bb2da2629b39899230ccb779ed7abb0a?rik=%2fqML3zDdmUQjqA&pid=ImgRaw&r=0&sres=1&sresct=1")      center;
            center;
      backdrop-blur: 10px;
      background-size:cover;

    display:flex;
    align-items:center;
`
const Input= styled.input`
   flex:1;
   min-width: 40%;
   margin:20px 10px 0px 0px;
   padding:10px;
   border-radius:10px;
`
const Agreement= styled.span`
   font-size:12px;
   margin:20px 0px
`
const Button= styled.button`
    padding:15px 20px;
    width:40%;
    border:none;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin:auto;
`
const Form= styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 50%;
  background-color: transparent;
  margin: 0 auto;
`;

const Title= styled.h1`
    font-size:24px;
    font-weight:300
`
const Link= styled.a``


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder= "email"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>Forgot Password</Link>
                <Link>Signup</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
