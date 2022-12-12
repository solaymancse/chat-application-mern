import styled from 'styled-components';
import background from '../../assets/background.jpg'
export const Wrapper = styled.div`
width: 100%;
height: 100vh;
background-image:url(${background});
background-repeat: no-repeat;
background-size: cover;
background-position: bottom;



`
export const Content = styled.div`
position: relative;
width: 100%;
height: 100%;
background-color: #26436B;
opacity: 0.8 ;
display: flex;
justify-content: center;
align-items: center;
div{
    margin-top: -10%;

    text-align: center;
}
h1{
    color: #fff;
    font-weight: 500;
    font-size: 35px;
    font-family: 'Lora', serif;
}
p{
    color: gray;
}
a{
    text-decoration: none;
    background-color: #FF861A;
    border: none;
    padding: 10px 20px;
    color: #fff;
}
`