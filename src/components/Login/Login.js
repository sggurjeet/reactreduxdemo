import React, { Component } from 'react'
import './style.css'


export class Login extends Component {
    constructor(props) {
        super(props);
    
        //Set Initial State
        this.state = {
            username: '',
            password:'',

        }
        this.handleSubmit=this.handleSubmit.bind(this);
      }

    // add checkfield for username length and password length and it doesn't submit until and unless form is complete, onblur error should display that email is empty or email invalid in case of empty field.
     handleChange = (e) => {
        e.preventDefault();
        const {value,name} = e.target;
        this.setState({ [name]:value});
      };

      handleSubmit(e) {
          e.preventDefault();
         console.log(this.state)
      }
    
     
    render() {
        return (

          
            
              <div className="form">
                <div>
                  <h2>Sign In</h2>
                    <input type="text" name="username"  placeholder="Username" onChange={this.handleChange} />
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}>
                      Submit
                    </button>
                </div>
                {/* <p>{this.stat}</p> */}
            </div>
           
        )
    }
}

export default Login
