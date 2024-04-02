// Frontend code 
// Filename - App.js
// Filename - App.js
import { useState } from 'react'
import './loginpage.css';

function Loginpage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch(
		'http://localhost:5000/register', {
			method: "post",
			body: JSON.stringify({ name, email }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log(result);
		result = await result.json();
		console.warn(result);
		if (result) {
			alert("Data saved succesfully");
			setEmail("");
			setName("");
		}
	}
	return (
		<>
		<div className="container">
		</div>
		<div class="container">
		<div class="row">
		<div class="col-md-6 offset-md-3">
			<h2 class="text-center text-dark mt-5 bigfont">Login Form</h2>
			<div class="text-center mb-5 text-dark slogan">Green Your Commute, Embrace the Future with Joyful Journeys!</div>
			<div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <img src={"Logo.png"} class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3" style={{ backgroundColor: "#353232" }}
                width="200px" alt="profile"/>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100" onClick={handleOnSubmit}>Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered?
			  <a href="" class="text-dark fw-bold"> Create an Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
		</>
	);
}

export default Loginpage;
