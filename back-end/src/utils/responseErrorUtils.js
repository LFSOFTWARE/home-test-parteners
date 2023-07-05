const responseError = (statusCode, message, error = null) => {
  return {
    statusCode,
    message,
    error
  };
};

module.exports = {
  responseError
};