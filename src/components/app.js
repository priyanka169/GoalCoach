import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';

import AddGoal from './addGoal';
import GoalList from './goalList';
import CompleteGoalList from './completeGoalList';

class App extends Component {
  signOut() {
    firebaseApp.auth().signOut();
  }

  render() {
    return (
      <div>
        <div className="form-style">
          <h3>Goal Coach</h3>
          <AddGoal />
          <hr />
          <h4>Goals</h4>
          <GoalList />
          <hr />
          <h4>Completed Goals</h4>
          <CompleteGoalList />
          <hr />
          <button
            className="btn btn-danger"
            onClick={() => this.signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}
export default connect(mapStateToProps, null)(App);
