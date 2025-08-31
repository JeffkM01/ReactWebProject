import { UseAllStates } from "./Checkstate";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const { logIn } = UseAllStates();
    const navigate = useNavigate();

   const Submit = async (e) => {
    e.preventDefault();

        try{
            logIn(); // Assume success


             /* before deployment
            const res = await fetch('http://localhost:8080/registration', {
            */


            // after deployment 
            const res = await fetch('https://express-m472.onrender.com/registration', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: document.getElementById('username').value,
                    password: document.getElementById('pwd').value, 
                    confirmpassword: document.getElementById('pword').value,
                    method: 'POST',
                    url: '/registration'
                }),
            });
            const status = res.status;
            const resJson = await res.json();
            console.log('Data', resJson);

            if(status === 201){
               navigate("/");
            }
            else{
                alert("Incorrect Credentials")
            }
        } 

        catch (e){
            alert(`Error: ${e.message}`);
        }
}

    return (
        <>
        <div id = "formID" class="container-fluid">
    <form onSubmit={Submit} style={{textAlign: "center"}}>
    <div class="row">
        <div class="col-sm-12">
            <label id = "whitetxt" for="username">UserName:</label><br/>
            <input id="username" name="username"/><br/><br/>
        </div> 
    </div>

    <div class="row">
        <div class="col-sm-12">
            <label id = "whitetxt" for="pwd">Password:</label><br/>
            <input type="password" id="pwd" name="pwd" minlength="6"/><br/><br/>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <label id = "whitetxt" for="pword">Confirm Password:</label><br/>
            <input type="password" id="pword" name="pword" minlength="6"/><br/><br/>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <input type="submit"/>
            <input type="reset" value="Clear"/>
        </div>
    </div>
   </form>
    </div>
        
    </>
        
);

};

export default Registration;