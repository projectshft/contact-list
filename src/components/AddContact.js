import React from "react";

class AddContact extends React.Component {
    state = {
      name: '',
      email: '',
      phoneNumber: '',
      imageURL: ''
    };

    add = (e) => {
      e.preventDefault();
      if(this.state.name === '' || this.state.email === '') {
        alert('Please enter text!');
        return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name:'', email:'', phoneNumber: '', imageURL: ''});
    this.props.history.push('/');

  
  };
  render() {
    return (
      <div className="ui main">
        <h2> AddContact </h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field ">
            <label>Name</label>
            <input 
            type='text' 
            name='name' 
            placeholder="Name" 
            value={this.state.name}
            onChange={ (e) => this.setState({name: e.target.value})} />
          </div>
          <div className="field ">
            <label>Email</label>
            <input 
            type='text' 
            name='email' 
            placeholder="Email"
            value={this.state.email}
            onChange={ (e) => this.setState({email: e.target.value})} />
          </div>
          <div className="field ">
            <label>Phone Number</label>
            <input 
            type='text' 
            name='phone number' 
            placeholder="phone number"
            value={this.state.phoneNumber}
            onChange={ (e) => this.setState({phoneNumber: e.target.value})} />
            </div>
             <div className="field ">
            <label>Image URL</label>
            <input 
            type='text' 
            name='image URL' 
            placeholder="Image URL"
            value={this.state.imageURL}
            onChange={ (e) => this.setState({imageURL: e.target.value})} />
          </div>
          <button className="ui button blue">Add Contact</button>
        </form>
      </div>
    );
  }

}

export default AddContact;