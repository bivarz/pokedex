import styled from 'styled-components';

export const Container = styled.div`

max-width:700px;
min-width:271px;
background: #fff;
border-radius: 4px;
box-shadow:0 0 20px rgba(0,0,0 0.1);
padding: 0px;
margin: 30px auto;


.top{
  margin-top:0px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:3px;
  background-color: #f0f0f0;

}
.all_info{
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  
  @media (max-width: 400px) {
    flex-direction: column;
  }
 
 
}
.image_content{
  display:flex;
  justify-content:center;
  margin-left:2px;
  width:100%;
  align-items:center;
  
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
.turn button:hover {
 
  background:#c40000;
 
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
background-color: #f0f0f0; 
width:100%;
margin-top:10px;
margin-bottom:10px;
margin-right:10px;
padding:5px;
color:black;
border-radius:10px;
list-style-type: none;
font-size: 12px;
justify-content:center;
align-items:center;
display:flex;
text-align:center;

@media (max-width: 590px) {
background-color: #f0f0f0; 
width:100%;
margin-top:10px;
margin-bottom:10px;
padding:5px;
color:black;
border-radius:10px;
list-style-type: none;
font-size: 12px;
justify-content:center;
align-items:center;
display:flex;
text-align:center;

  }


}
.stats h3{ 
color:black;
font-size: 16px;

}
.bu{
background-color: #f0f0f0; 
width:100%;
margin-top:10px;
margin-bottom:10px;
margin-right:10px;
padding:5px;
color:black;
border-radius:10px;
list-style-type: none;
font-size: 12px;
justify-content:center;
align-items:center;
display:flex;
text-align:center;

  @media (max-width: 590px) {
background-color: #f0f0f0; 
width:100%;
margin-top:10px;
margin-bottom:10px;
padding:5px;
color:black;
border-radius:10px;
list-style-type: none;
font-size: 12px;
justify-content:row;
display:flex;

  }
  
 
}
.bu_top{
  width:100%;
  display:flex;
  border-radius:10px;
  font-size: 12px;
  margin: 0px;
  justify-content:space-between;
  flex-direction:column;

  @media (max-width: 590px){

    flex-direction:row;
  }
  
    
    
}

.bu h3{
  font-size:14px;
}

.header{
  display:flex;

}
.down{
  top:150;
  margin-bottom:0px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:3px;
  background-color: #ffffff;
}
.down button{
  align-items:center;
  font-weight: 800;
  font-size: 10px;
  width: 50px;
  background:#c40000;
  border-radius: 2px;
  margin-right: 2px;
  padding: 2px;
  color: white;
  border:none;
}
 `;


