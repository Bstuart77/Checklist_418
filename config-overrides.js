var path = require('path');

module.exports = {
    paths: (paths, env) => {
      paths.appIndexJs = path.resolve(__dirname, 'src/main/java/ChecklistApp/index.js');
      return paths;
    },
  }