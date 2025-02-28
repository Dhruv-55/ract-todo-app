import { useState } from "react";
import './Register.css';
export default function Register() {
 
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(data);
    };


    return (
    <>
          <div class="form-container">
            <h2>Create an Account</h2>
            <form  method="post" onSubmit={handleSubmit}>
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" required  value={data.name}  onChange ={handleInputChange} />

                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required  value={data.email}  onChange ={  handleInputChange} />

                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Create a password" required  value={data.password}  onChange ={handleInputChange} />

                <button type="submit">Sign Up</button>
            </form>
            <div class="form-footer">
                Already have an account? <a href="#">Login</a>
            </div>
         </div>
    </>
    );
}