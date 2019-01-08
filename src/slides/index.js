var requireTest = require.context('.', true, /slide-(.*)\.js$/);

module.exports =
  requireTest
    .keys()
    .sort((a, b) => a.localeCompare(b))
    .map(requireTest);
