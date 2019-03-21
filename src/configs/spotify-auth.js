export let apiCreds = {
  clientId: 'b3295b28bbbd4d598f32515c7fdad7bf',
  scope: 'user-read-private user-read-email',
  redirect_uri: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/callback' : 'https://spotify-playlist-tool.herokuapp.com/callback',
  state: 'my-state'
};

export let wrapperCreds = {
  clientId: 'b3295b28bbbd4d598f32515c7fdad7bf',
  clientSecret: '564da0f10a104edd9ca4f0aabb479ea0',
  redirectUri: 'http://localhost:3000/callback'
};
