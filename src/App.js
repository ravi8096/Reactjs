import React from 'react';
//import { browserHistory } from 'react-router';
class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
        // data: 'Initial data...'
        username: '',
        password: '',
        //error: '',
      }
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   };
   handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
   handleSubmit(event) {
    event.preventDefault();
    if(this.state.username ==='ravi' && this.state.password==='ravi' ){
      //alert("success");
     // return <Redirect to='/about' />;
     this.props.history.push("/about");
    }
    else{
      alert("Fail");
    }
  }
   render() {
      return (
        <form onSubmit={this.handleSubmit}>
         <div>
           <label>username</label>
            <input type = "text" value = {this.state.username}  onChange = {this.handleUserChange} /><br/>
            <label>password</label>
            <input type = "text" value = {this.state.password}  onChange = {this.handlePassChange} /><br/>
            <input type="submit" value="Submit" />
            <h4>{this.state.data}</h4>
         </div>
         </form>
      );
   }
}
export default App;