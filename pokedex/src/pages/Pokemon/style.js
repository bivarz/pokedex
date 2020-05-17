import styled from 'styled-components';

export const Container = styled.div`

max-width:700px;
background: #fff;
border-radius: 4px;
box-shadow:0 0 20px rgba(0,0,0 0.1);
padding: 0px;
margin: 30px auto;
display:grid;

.top{
  margin-top:0px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:3px;
  background-color: #f0f0f0;

}
.all_info{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 2fr));
 grid-gap: 5px;
}
.image_content{
  margin-left:2px
}
.image_content img{
  width:100%;
  max-width:150px;
}
.turn{
  margin-bottom:15px;
  width:150px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.turn button{
  align-items:center;
  font-weight: 800;
  font-size: 10px;
  width: 30px;
  background:gray;

  border-radius: 2px;
  margin-right: 2px;
  padding: 2px;
  color: white;
  border:none;
}
.types_form
{

  align-items:center;
  font-weight: 800;
  font-size: 10px;
  width: 80px;

  border-radius: 2px;
  margin-right: 2px;
  padding: 2px;
  color: white;
}
.stats{
margin-top:20px;
color:black;
border-radius:10px;
list-style-type: none;
font-size: 12px;

}

.header{
  display:flex;

}
 `;


