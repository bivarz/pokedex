import styled from 'styled-components';

export const Nav = styled.nav`
min-width:278px;
font-size:13px;
color: White;
font-family: Arial, Helvetica, sans-serif;
background-color: #ff0000;

border-bottom:5px solid #c40000;
box-shadow:0 0 5px rgba(0,0,0, 0.5);
-webkit-font-smoothing: antialiased !important;
display: flex;
justify-content: space-between;
align-items: center;

h1{
  margin-left: 25px;
  color: #ffffff;
  font-family:Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased !important;
  
}

img{
  width:150px;
  height:40px;
  display:flex-row;
  align-items:center;
  margin-top:10px;
}

`;

export const Button = styled.button`
background: #ff0000;
height:60px;
border:0;
padding: 0 15px;
margin-right: 25px;

:hover{
  background:  #c40000;
}
`;