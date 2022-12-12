import styled from 'styled-components';

export const Profile = styled.div`
text-align: center;
position: relative;
background-color: cyan;
width: 100px;
height: 100px;
border-radius: 50%;
overflow: hidden;
border: 4px solid #FF861A;
left: 50%;
right: 50%;
transform: translate(-50%);
margin-top: 20px;
`
export const Upload = styled.div`
position: absolute;
bottom: 10px;
right:50%;
left: 50%;
background-color: #333;
border-radius: 50%;
width: 30px;
height: 30px;
color: #ffff;
input{
    cursor: pointer;
}

`
export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`