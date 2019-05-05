import React, { Component } from 'react'
import AddTopic from './AddTopic';

const topicContainer = {
  width: '75vw',
  height: '165px',
  border: '1px solid black',
  marginBottom: '10px',
  borderRadius: '5px',
  paddingLeft: '10px'
}

const titleTextContainer = {
  height: '100px', 
  marginBottom:'10px'
}
const voteButton = {
  fontSize: '20px'
}

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

  //Vote count only shows 0 and upwards (only absolute number)
  //This function is to check if Vote Count of each Topic is smaller than 0 (Negative Number)
  //then it will display the number "0"
  renderVoteCount=(i)=>{
    if( this.state.topic[i].vote >= 0 )
       return this.state.topic[i].vote;
    return 0;
  }

  render() {

    //This function below is to sort Topics based only 20 with highest upvotes count. Descendingly.
    const newDatabase= (this.state.topic.sort(function(a,b){ return b.vote - a.vote;})).slice(0,20);
    console.log(newDatabase);

    return (
      <div>

        <AddTopic addTopic={this.addTopic} />
        <hr></hr>

        <div>
          {
            this.state.topic.map((topic, i) =>
              <div key={i} style={topicContainer}>

                <div style={titleTextContainer}>
                  <h1>{topic.title}</h1>
                  <p>{topic.text}</p>
                </div>

                <div>
                  <button style={voteButton}
                    //this function attached below is to increment on the Vote Count of topic by "1"
                    onClick={() => {var newState = Object.assign({}, this.state);
                                    newState.topic[i].vote += 1;
                                    this.setState(newState);}}>
                    +                
                  </button>

                  <span style={{marginLeft: '10px'}}>
                    {this.renderVoteCount(i)}
                    &nbsp;
                  </span>

                  <button style={voteButton}
                  //this function attached below is to decrement on the Vote Count of topic by "1"
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
