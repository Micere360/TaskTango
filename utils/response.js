// utils/response.js
const successResponse = (res, data = null, message = 'Success') => {
  return res.status(200).json({ success: true, data, message });
};

const errorResponse = (res, message = 'Internal Server Error', statusCode = 500) => {
  return res.status(statusCode).json({ success: false, message });
};

module.exports = {
  successResponse,
  errorResponse,
};

