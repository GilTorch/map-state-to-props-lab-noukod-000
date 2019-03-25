import React, { Component } from 'react';
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    const { users }=this.props;
    return (
      <div>
        <ul>
         { users.length }
         <ul>
         { users.map((user)=>{
            return(
              <li>
                <h1>{ user.username }</h1>
                <p>{ user.hometown }</p>
              </li>
            )
         })}
         </ul>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps=state=>{
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)
