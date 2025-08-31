import { UseAllStates } from "./Checkstate";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


const Account = () => {
  const navigate = useNavigate();
  const { logIn } = UseAllStates();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    State: "MO",
    zipCode: "",
    phoneNumber: "",
    email: "" 
  });

  // Fetch account data on component mount
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const res = await fetch(`http://localhost:8080/account?userId=${userId}`); 
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData(data);
          
       

      } catch (err) {
        console.error("Error fetching account data:", err);
      }
    };

    fetchAccountData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const Submit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');


    // Submit updated data
    console.log("Submitting form data:", formData);
    try{
            logIn(); // Assume success

            



             /* before deployment
            const res = await fetch('http://localhost:8080/account', {
            */


            // after deployment 
            const res = await fetch('https://express-m472.onrender.com/account', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: Number(userId),
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value, 
                    address1: document.getElementById('address1').value,
                    address2: document.getElementById('address2').value, 
                    city: document.getElementById('city').value,
                    state: document.getElementById('state').value,
                    zipCode: document.getElementById('zipCode').value,
                    phoneNumber: document.getElementById('phoneNumber').value,
                    email: document.getElementById('email').value,
                    method: 'POST',
                    url: '/account'
                }),
            });
            const status = res.status;
            const resJson = await res.json();
            console.log('Data', resJson);
            if(status === 201){
                console.log("Response status:", status);
                navigate("/"); // Redirect after login
            }   else{
                console.log("Response status:", status);
                alert('Incorrect credentials')
            }
        }   
    

        catch (e){
            alert(`Error: ${e.message}`);
        }
}
  
 
    return(
        <>
        <form onSubmit={Submit} class="container-fluid">
            <div id="changeh2"> 
            <h1>Enter Your Account Info</h1>
            </div>
            <label for="firstName" class="changelabelcolor">firstName</label><br/>
            <input type="text" id="firstName" name="firstName" placeholder="Enter Your first name.." value={formData.firstName} onChange={handleChange} class="changeinputcolor"/><br/><br/>
        

            <label for="lastName" class="changelabelcolor">lastName</label><br/>
            <input type="text" id="lastName" name="lastName" placeholder="Enter Your last name.." value={formData.lastName} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="address1" class="changelabelcolor">Address Line 1</label><br/>
            <input type="text" id="address1" name="address1" placeholder="Enter Your Address Line 1.." value={formData.address1} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="address2" class="changelabelcolor">Address Line 2</label><br/>
            <input type="text" id="address2" name="address2" placeholder="Enter Your Address Line 2.." value={formData.address2} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="city" class="changelabelcolor">city</label><br/>
            <input type="text" id="city" name="city" placeholder="Enter Your City.." value={formData.city} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="state" class="changelabelcolor">state</label><br/>
            <select id="state" name="state">
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="MO">Missouri</option>
            </select><br/><br/>

            <label for="zipCode" class="changelabelcolor">Zip Code</label><br/>
            <input type="text" id="zipCode" name="zipCode" placeholder="Enter Your Zip Code.." value={formData.zipCode} onChange={handleChange} class="changeinputcolor"/><br/><br/>


            <label for="phoneNumber" class="changelabelcolor">phoneNumber</label><br/>
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Your PhoneNumber.." value={formData.phoneNumber} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="email" class="changelabelcolor">email</label><br/>
            <input type="text" id="email" name="email" placeholder="Enter Your Email.." value={formData.email} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <input type="submit" class="changeinputcolor" id="sub"/>
            <input type="reset" class="changeinputcolor" id="res"/>      

        </form>      
        
        </>

    );
};

export default Account;