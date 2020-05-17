import styled from 'styled-components';

export const Container = styled.div`

*
{
  font-family: 'Poppins',sans-serif;
  text-decoration:none;
  

}



.container{
  display: flex;
  justify-content: center;
  align-items: center;
  
  a:visited :active {
    color:black;
  }
}

.container .card .button_id{
  position: absolute;   
  bottom:100px;
  margin: 0px;
  padding:5px;
  width: 33px;
  left: 5px; 
  
  font-size: 18px;
  font-weight: 800;
  border-radius: 50%;

  color: white;
  text-align: center;
}
.container .card .button_info{
  position: absolute;   
  bottom:100px;
  margin: 0px;
  padding:5px;
  width: 33px;
  left: 5px; 
  
  font-size: 18px;
  font-weight: 800;
  border-radius: 50%;

  color: white;
  text-align: center;
}
.container .card{
  position: relative;
  width: 130px;
  height: 150px;
  background: linear-gradient(-30deg,rgb(207, 205, 205),rgb(255, 255, 255));
 
  border-radius: 20px;
  border:3px solid gray;
  overflow: hidden;
}


.container .card:after
{
  content: "";
  position: absolute;
  top:0;
  left: 0;  
  font-size: 12px;
  font-weight: 800;
  margin:25px 20px;
}
.container .card:before
{
  content: "";
  position: absolute;
  background-color: gray;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  
  clip-path: circle(60px at 0% 0%);
}
.container .card .imgBx
{
  position: absolute;
  top: 7%;
  left: 12%;
  width: 100%;
  height: 220px;
}

.container .card .contentBx
{
  position:absolute;
  bottom:0;
  width: 100%;
  text-align: center;
}
.container .card .contentBx h2
{
position: relative;
letter-spacing: 1px;
}

.type_area{
  display:flex;
  justify-content:center;
  align-items:center;
}
.container .card .contentBx .type
{
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 40px 25px;
 
}
.container .card .contentBx  h3
{
  font-weight: 300;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom:30px;
  
}

.container .card .contentBx .type{
 display: flex;
 align-items:center;


}

.types_form
{

  align-items:center;
  font-weight: 800;
  font-size: 10px;
  width: 80px;

  border-radius:10px;
  margin-right: 10px;
  padding: 5px;
  color: white;
 
}
.container .card a{
  text-decoration: none;
  font-size: 14px;
  color: black;
}
.container .card a:visited{
  text-decoration: none;
  font-size: 14px;
  color: black;
  .container .card a:active{
  text-decoration: none;
  font-size: 14px;
  color: black;
}
}
.id_card{
  position: absolute;
  bottom:50px;
  left: 0px;  
  font-size: 10px;
  font-weight: 800;
  margin:25px 20px;
  color: white;
}
.id_card_middle{
  display:flex;
  position: relative;
  right:21px;
  top:21px;  
  font-size:30px;
  font-weight: 800;
  margin:25px 20px;
  text-transform: uppercase;
  font-style:italic;
  color: lightgrey;
}`