const getUser = data => {
  return {
    type: 'SIGN_IN',
    payload: data
  };
};

export const signIn = () => dispatch => {
  return fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
    .then(res => res.json())
    .then(data => dispatch(getUser(data)));
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};
