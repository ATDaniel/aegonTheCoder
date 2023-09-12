const env = require('../env.json');

const authUrl = env.parameters.AuthEndpoint;

// Post for logging in
export const login = async (loginCreds) => {
  const { email, password } = loginCreds;

  if (!email) {
    console.error('Must have email');
    return new Error('Missing email');
  }
  if (!password) {
    console.error('Must have password');
    return new Error('Missing password');
  }

  try {
    const responseObj = await fetch(authUrl, {
      method: 'POST',
      body: JSON.stringify(loginCreds)
    });
    const response = await responseObj.json();
    return response;
  } catch (e) {
    console.error('Error while logging in: ', e);
    throw new Error(e);
  }
}