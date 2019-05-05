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

  renderVoteCount=(i)=>{
    if( this.state.topic[i].vote >= 0 )
       return this.state.topic[i].vote;
    return 0;
  }

  render() {

    const database = 
      this.state.topic.sort(function(a,b){
        return b.vote - a.vote;
    });

    console.log(database, 'database');
    
    return (
      <div>

        <AddTopic addTopic={this.addTopic} />
        <hr></hr>

        <div>
          
          {
            this.state.topic.map((topic, i) =>
              <div key={i}
                style={{
                  width: '75vw',
                  height: '165px',
                  border: '1px solid black',
                  marginBottom: '10px',
                  borderRadius: '5px',
                  paddingLeft: '10px'
                }}
              >

                <div style={{height: '100px', marginBottom:'10px'}}>
                  <h1>{topic.title}</h1>
                  <p>{topic.text}</p>
                </div>

                <div>
                  <button style={{fontSize: '20px'}}
                    onClick={() => {var newState = Object.assign({}, this.state);
                                    newState.topic[i].vote += 1;
                                    this.setState(newState);}}>
                    +                
                  </button>

                  <span style={{marginLeft: '10px'}}>
                    {this.renderVoteCount(i)}
                    &nbsp;
                  </span>

                  <button style={{fontSize: '20px'}}
                    onClick={() => {var newState = Object.assign({}, this.state);
                                    newState.topic[i].vote -= 1;
                                    this.setState(newState);}}>
                    -
                </button>
              </div>

              </div>
            )
          }

        </div>

      </div>
    );
  }
}

export default index;
