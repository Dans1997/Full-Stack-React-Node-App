const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
  style: true,
  }),
addLessLoader({
  javascriptEnabled: true,
  modifyVars: { '@primary-color': '#481380' },
}),
);

// Palette
/*
#481380
#7F78D2
#efb1ff
#ffe2ff
*/