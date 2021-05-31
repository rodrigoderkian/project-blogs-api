const { validateToken } = require('../auth');

const checkIfUserIsAuthenticated = (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ message: 'Token not found' });
  }
  if (validateToken.tokenIsValid(token)) {
    request.email = validateToken.tokenIsValid(token);
    return next();
  }

  return response.status(401).json({ message: 'Expired or invalid token' });
};

module.exports = {
  checkIfUserIsAuthenticated,
};
