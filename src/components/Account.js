import { UseAllStates } from "./Checkstate";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Account = () => {
  const navigate = useNavigate();
  const { logIn } = UseAllStates();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    address1: "",
    address2: "",
    City: "",
    State: "MO",
    Zipcode: "",
    PhoneNum: "",
    Email: ""
  });

  // Fetch account data on component mount
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const res = await fetch("http://localhost:8080/account"); //?id=5    
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
    // Submit updated data
    console.log("Submitting form data:", formData);
    try{
            logIn(); // Assume success

            const res = await fetch('http://localhost:8080/account', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: document.getElementById('firstname').value,
                    lastname: document.getElementById('lastname').value, 
                    address1: document.getElementById('address1').value,
                    address2: document.getElementById('address2').value, 
                    City: document.getElementById('City').value,
                    State: document.getElementById('State').value,
                    Zipcode: document.getElementById('Zipcode').value,
                    PhoneNum: document.getElementById('PhoneNum').value,
                    Email: document.getElementById('Email').value,
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
 
            <label for="firstname" class="changelabelcolor">Firstname</label><br/>
            <input type="text" id="firstname" name="firstname" placeholder="Enter Your first name.." value={formData.firstname} onChange={handleChange} class="changeinputcolor"/><br/><br/>
        

            <label for="lastname" class="changelabelcolor">Lastname</label><br/>
            <input type="text" id="lastname" name="lastname" placeholder="Enter Your last name.." value={formData.lastname} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="address1" class="changelabelcolor">Address Line 1</label><br/>
            <input type="text" id="address1" name="address1" placeholder="Enter Your Address Line 1.." value={formData.address1} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="address2" class="changelabelcolor">Address Line 2</label><br/>
            <input type="text" id="address2" name="address2" placeholder="Enter Your Address Line 2.." value={formData.address2} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="City" class="changelabelcolor">City</label><br/>
            <input type="text" id="City" name="City" placeholder="Enter Your City.." value={formData.City} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="State" class="changelabelcolor">State</label><br/>
            <select id="State" name="State">
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="MO">Missouri</option>
            </select><br/><br/>

            <label for="Zipcode" class="changelabelcolor">Zip Code</label><br/>
            <input type="text" id="Zipcode" name="Zipcode" placeholder="Enter Your Zip Code.." value={formData.Zipcode} onChange={handleChange} class="changeinputcolor"/><br/><br/>


            <label for="PhoneNum" class="changelabelcolor">PhoneNumber</label><br/>
            <input type="text" id="PhoneNum" name="PhoneNum" placeholder="Enter Your PhoneNumber.." value={formData.PhoneNum} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <label for="Email" class="changelabelcolor">Email</label><br/>
            <input type="text" id="Email" name="Email" placeholder="Enter Your Email.." value={formData.Email} onChange={handleChange} class="changeinputcolor"/><br/><br/>

            <input type="submit" class="changeinputcolor" id="sub"/>
            <input type="reset" class="changeinputcolor" id="res"/>

        </form>      
        
        </>

    );
};

export default Account;