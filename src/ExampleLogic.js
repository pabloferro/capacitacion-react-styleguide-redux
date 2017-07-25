import { createLogic } from 'redux-logic';

const fetchAccountLogic = createLogic({

  // declarative built-in functionality wraps your code
  type: FETCH_ACCOUNT, // only apply this logic to this type
  cancelType: CANCEL_FETCH_ACCOUNT, // cancel on this type
  latest: true, // only take latest

  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    axios.get('https://survey.codewinds.com/polls')
      .then(resp => resp.data.polls)
      .then(polls => dispatch({ type: FETCH_ACCOUNT_SUCCESS,
                                payload: polls }))
      .catch(err => {
             console.error(err); // log since could be render err
             dispatch({ type: FETCH_ACCOUNT_FAILED, payload: err,
                        error: true })
      })
      .then(() => done()); // call done when finished dispatching
  }
});
