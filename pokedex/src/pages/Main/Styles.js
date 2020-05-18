import styled from 'styled-components';

export const Container = styled.div`


min-width:278px;
border-radius:10px;
font-size:15px;
color: black;
font-family: Arial, Helvetica, sans-serif;
margin: 10 auto;
padding:10px;

  .button_area{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
   

  }
  .card_content{
    margin-top:5px;
  }
  
  .card {
    width: 130;
    display: grid;
    margin-top:2px;
    margin: auto;
    grid-template-columns: repeat(auto-fit, minmax(130px, 2fr));
    grid-gap: 5px;
}
`;
export const Button = styled.button`
background:lightgrey;
color: #ff0000;
font-size:30px;
height:40px;
margin-top:5px;
border:0;
padding: 0 15px;


:hover{
  color:  #c40000;
}
`;

