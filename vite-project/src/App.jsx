import React from "react";
class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:"",
            password:"",
            loggedIn:false,
            todos:[]
        }
        this.setUsername=this.setUsername.bind(this)
        this.setPassword=this.setPassword.bind(this)
        this.Login=this.Login.bind(this)
        this.Helper=this.Helper.bind(this)
       
        
    }
    setUsername(e) {
        this.setState({ username: e.target.value });
    }
    
    setPassword(e) {
        this.setState({ password: e.target.value });
    }
    Login(){
     fetch("http://localhost:3000/todos").then((data)=>data.json()).then((response)=>{
        console.log(response)
        this.setState({todos:response})
        this.setState({loggedIn:true})
    })}

    Helper(props){
       
        return(
           <div className="table">
               <table>
                   <thead>
                       <tr>
                           <th>Title</th>
                           <th>Description</th>
                       </tr>
                   </thead>
                   <tbody>
                   {props.list.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.description}</td>
              </tr>
            ))}
                   </tbody>
               </table>
           </div>
        )
       }
       

    render(){
        const { loggedIn } = this.state; 
      return(
        <>
        {!loggedIn ?(
        
         <div className="input">
            <div className='login'>Login</div>
           <input type='text' className='username' placeholder="username" onChange={this.setUsername}/>
           <input type='password' className='password' placeholder="password" onChange={this.setPassword}/>
           <br/>
          <button className="button" onClick={this.Login}>submit</button>
         </div>
    ):(
       <div><this.Helper list={this.state.todos}/></div>
    )
    }
        
        </>
      )
    }
     
}

export default MyComponent