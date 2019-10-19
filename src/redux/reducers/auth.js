/* eslint-disable import/prefer-default-export */
const initialState = {
    isUserSignedIn: false,
    accessToken: '',
  };
  
  export const auth = (state = initialState, action = { type: '', payload: {} }) => {
    switch (action.type) {
      case '':
        return state;
      default:
        return state;
    }
  };
  