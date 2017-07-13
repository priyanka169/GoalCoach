import { combineReducers } from 'redux';
import user from './reducer-user';
import goals from './reducer-goals';
import completeGoals from './reducer-completeGoals';

export default combineReducers({
  user,
  goals,
  completeGoals
})
