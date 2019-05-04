import React, { Component } from 'react'

const titleInputStyle = {
  fontSize : '15px',
  width: '900px',
  height: '28px',
  padding: '7px 7px',
  border: '1px solid black',
  marginBottom: '10px'
};

const textInputStyle = {
  fontSize : '15px',
  width: '900px',
  height: '50px',
  padding: '7px 7px',
  border: '1px solid black',
  resize: 'none'
};

class index extends Component {
  state = {
    title: '',
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  resetForm = () =>  {
    document.getElementById("myForm").reset();
  }

  handleClick = (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      text: this.state.text
    };
    this.props.addTopic(data,e);
    this.resetForm();
  }

  render() {
    return (
      <div>
        
        <form id="myForm">
          <input type="text" id="title" onChange={this.handleChange} maxLength="50" style={titleInputStyle} placeholder='Title'>
          </input>
          
          <textarea type="text" id="text" onChange={this.handleChange} maxLength="255" style={textInputStyle} placeholder='Text (optional)'>
          </textarea>
          <br/>
          <button type="submit" value="Submit" onClick={this.handleClick}>Submit</button>

        </form>

      </div>
    )
  }
}

export default index;

