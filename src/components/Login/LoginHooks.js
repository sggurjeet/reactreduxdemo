import React,{useState}from 'react'

function LoginHooks() {
       //Set Initial State
       const [state, setState] = useState({username:''});
       
     const handleChange = (e)=>{
         setState({
             ...state,
             [e.target.name]:e.target.value
         });
     };
     const handleSubmit = () =>{
        console.log("this is submitted")
     };
    return (
        <div>
            <h2>Sign In Page with Hooks</h2>
            <div>
             <div>
              {/* <label htmlFor="username">Username:</label>
              <input type="text" name="username" value={state.username} onChange={handleChange}placeholder="Enter username" id="username" /> */}
              <br/>
              <br/>
              <div>
               <input type="submit" name="submit" onSubmit={()=>handleSubmit} />
              </div>
              <br/>
             </div>
            </div>
        </div>
    )
}

export default LoginHooks
