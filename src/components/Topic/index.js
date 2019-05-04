import React, { Component } from 'react'
import AddTopic from './AddTopic';

class index extends Component {

  state = {
    topic: []
  }

  addTopic = (data, e) => {
    this.setState({
      topic: this.state.topic.concat({
        'title': data.title,
        'text': data.text,
        'vote': 0
      })
    });
  }

  render() {
    const result = this.state.topic.map(topic => ({ title: topic.title, text: topic.text, vote: topic.vote }));
    console.log(result);

    return (
      <div>

        <AddTopic addTopic={this.addTopic} />
        <hr></hr>

        <div>

          {
            this.state.topic.map((topic, i) =>
              <div key={i}
                style={{
                  width: '50vw',
                  height: '200px',
                  border: '1px solid black',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  paddingLeft: '10px'
                }}
              >

                <h1>{topic.title}</h1>
                <p>{topic.text}</p>

                <button style={{ fontSize: '20px' }}
                  onClick={() => {var stateCopy = Object.assign({}, this.state);
                                  stateCopy.topic[i].vote += 1;
                                  this.setState(stateCopy);}}>
                  +
                </button>

                <span style={{ marginLeft: '10px' }}>{topic.vote} &nbsp;</span>

                <button style={{ fontSize: '20px' }}
                  onClick={() => {var stateCopy = Object.assign({}, this.state);
                                  stateCopy.topic[i].vote -= 1;
                                  this.setState(stateCopy);}}>
                  -
              </button>

              </div>
            )
          }

        </div>

      </div>
    );
  }
}

export default index;
