// config/database.js
module.exports = {
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/tasktango',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
