import { UseAllStates } from "./Checkstate";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { logIn } = UseAllStates();
    const navigate = useNavigate();

    
    const Submit = async (e) => {
    e.preventDefault();

        try{
        logIn(); // Assume success

        const res = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('pwd').value,
                method: 'POST',
                url: '/login'
            }),
        });
        const status = res.status;
        const resJson = await res.json();
        console.log('Data', resJson);

        if(status === 200){
            localStorage.setItem("userId", resJson.id);
            navigate("/"); // Redirect after login
        }   
        else{
            alert('Incorrect credentials')
        }
        }   
    

    catch (e){
        alert(`Error: ${e.message}`);
    }
}


    return(
        <>
        <div id = "formId" class="container">
        <form onSubmit={Submit} style={{textAlign:"center"}}>
            <div class = "row">
                <div class="col-sm-12">
                    <label id = "wtxt" for="username">UserName:</label><br/>
                    <input id="username" name="username"/><br/><br/>
                </div>
            </div>

        <div class = "row">
            <div class="col-sm-12">
                <label id = "wtxt" for="pwd">Password:</label><br/>
                <input type="password" id="pwd" name="pwd" minlength="6"/><br/><br/>
            </div>
        </div>

        <div class = "row">
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

export default Login;
