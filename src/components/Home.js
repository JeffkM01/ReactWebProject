import Footer from "./Footer";

const Home = () => {
    return(
        <>
        
        <div class="container">
        <div class="row">
        <div class="col-sm-12">
        <h3>Welcome to Ed's Auto Shop</h3>
        <p>
            At Ed's Auto Repair, we provide reliable and affordable automotive services.
            From routine maintenance to complex repairs, we've got you covered.
        </p><br/>

        <h3>Our Services</h3>
        <ul>
            <li>Oil change</li>
            <li>Air filter change</li>
            <li>Brake repairs</li>
            <li>AC & Heating repair</li>
            <li>Engine Diagnostics</li>
        </ul><br/>

        <h3>Contact Us</h3>
        <p><span class="material-icons">place</span> 23 Woodlake, St. Louis</p>
        <p><span class="material-icons">phone</span> 736 323 4222</p>
        <p><span class="material-icons">email</span> EdsAutoshop@yahoo.com</p>


        </div>
        </div>  
        </div>
        <Footer/>  
        </>

    );

};


export default Home;