import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [FormInfo, setFormInfo] = useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        Confirm:""
    });


    
const ReturnInfo =(e)=>{
    setFormInfo({...FormInfo,[e.target.name]:e.target.value})
}

    return(
        <>
        <form>
            <div>
            <span className="text-danger">
                    {FormInfo.FirstName.length < 2 ? "First Name must be at least 2 characters.": ""}
                <br></br></span>
                <label>Firstname: </label> 
                <input style={{margin:'10px'}} type="text" name="FirstName" onChange={ReturnInfo} value={FormInfo.value} />
                
            </div>
            <div>
            <span className="text-danger">
                    {FormInfo.LastName.length < 2 ? "Last Name must be at least 2 characters.": ""}
                <br></br></span>
                <label>Lastname: </label> 
                <input style={{margin:'10px'}} type="text" name="LastName" onChange={ReturnInfo} value={FormInfo.value}/>
            </div>
            <div>
            <span className="text-danger">
                    {FormInfo.Email.length < 5 ? "Email must be at least 5 characters.": ""}
                <br></br></span>
                <label>Email Address: </label> 
                <input style={{margin:'10px'}} type="email" name="Email" onChange={ReturnInfo} value={FormInfo.value}/>
            </div>
            <div>
            <span className="text-danger">
                    {FormInfo.Password.length < 6 ? "Password must be at least 6 characters.": ""}
                <br></br></span>
                <label>Password: </label>
                <input style={{margin:'10px'}} type="password" name="Password" onChange={ReturnInfo} value={FormInfo.value}/>
            </div>
            <div>
            <span className="text-danger">
                    {FormInfo.Confirm !== FormInfo.Password ? "Passwords must match.": ""}
                <br></br></span>
                <label>Confirm Password: </label>
                <input style={{margin:'10px'}} type="password" name="Confirm" onChange={ReturnInfo} value={FormInfo.value}/>
            </div>
   
        </form>
       
        </>
    );
};

export default UserForm;