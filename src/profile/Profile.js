import React from 'react'
import { Button  } from 'react-bootstrap';
import PropTypes from 'prop-types';


function Profile(props) {
    const handleName = FullName => alert(FullName) ;
    const AlertBtn = (props) =>{
       return(
           <Button variant="info" onClick={() => props.handleName(`User Name : ${props.FullName} `)}>
            Alert Name
           </Button>
           
       )
    }  
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:10,width:400,margin:"auto",background:"white" }}>
            <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            {props.children}
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p style={{fontSize:24}}>Name: </p>
            <h4> {props.FullName}</h4>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p style={{fontSize:24}} >Bio :</p>
            <h4>{props.Bio}</h4>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>  
            <p style={{fontSize:24}} >Profession :</p>
            <h4>{props.Profession}</h4>
            </div>
            <div style={{marginBottom:10}}>
            <AlertBtn  handleName={handleName} FullName={props.FullName}/>
            </div>
            
             
            
        </div>
       
    )
}
Profile.defaultProps={
    FullName : "Nada Kraiem",
    Bio : "Welcome Everyone",
    Profession  : "Full Stack Developer"
  };
  
  // props type
  Profile.propTypes  = {
    FullName : PropTypes.string,
    Bio : PropTypes.string,
    Profession  : PropTypes.string
  }
export default Profile