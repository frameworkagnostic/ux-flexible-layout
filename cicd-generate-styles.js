
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const { generateStyles } = require('./lib/generateStyles');
const { GRID12_SIZES, GRID12_GUTTERS, UNIT } = require('./lib/constants');

const KEYS_WITH_UNITS = [
  'width',
  'margin',
  'minWidth'
];

const camelCased = (v) => v.replace(/-([a-z0-9])/g, (g) => g[1].toUpperCase());
const camelCaseToDash = (v) => v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const formatInlineStyles = (styles) => {
  const inlineStyles = Object.entries(styles);
  return inlineStyles.reduce((acc, entry) => {
    const key = entry[0];
    const value = entry[1];

    if(key === '& > $item') {
      return acc;
    }

    if(typeof value === 'object') {
      acc[key] = formatInlineStyles(value);
      return acc;
    }

    if(KEYS_WITH_UNITS.indexOf(key) !== -1 && typeof value === 'number') {
      acc[key] = `${value}${UNIT}`;
      return acc;
    }

    acc[key] = value;
    return acc;
  }, {});
};

const formatCssModuleProperties = (styles, parentIsMediaQuery) => {
  return Object.entries(styles)
  .sort((a, b) => a[0] < b[0])
  .reduce((acc, entry) => {
    const key = entry[0];
    const value = entry[1];
    const spacing = parentIsMediaQuery ? '\n\t\t' : '\n\t';
    acc.push(`${spacing}${camelCaseToDash(key)}: ${value};`);
    return acc;
  }, []).join('');
};

const formatCssModuleStyles = (styles, parentIsMediaQuery) => {
  return Object.entries(styles)
  .reduce((acc, entry) => {
    const key = entry[0];
    const value = entry[1];
    const isMediaQuery = /^@/.test(key);
    const declaration = isMediaQuery ? key: `.${camelCased(key)}`;
    const rules = isMediaQuery ?
      '\n' + formatCssModuleStyles(value, isMediaQuery) :
      formatCssModuleProperties(value, parentIsMediaQuery);

    acc.push([
      (parentIsMediaQuery ? '\t' : ''),
      `${declaration} {`,
      rules,
      (parentIsMediaQuery ? '\n\t}\n' : '\n}\n')
    ].join(''));
    return acc;
  }, []).join('\n');
};

const saveInlineStyles = (basePath, folder, styles) => {
  const filePath = path.join(basePath, 'inline-styles.json');
  const json = JSON.stringify(styles, null, '\t');
  mkdirp.sync(basePath);
  fs.writeFileSync(filePath, json, 'utf-8');
};

const saveCssModuleStyles = (basePath, folder, styles) => {
  const filePath = path.join(basePath, 'css-modules.css');
  const cssModuleStyles = formatCssModuleStyles(styles);
  fs.writeFileSync(filePath, cssModuleStyles, 'utf-8');
};

const saveStyles = (folder, gridStyles) => {
  const basePath = path.join(__dirname, './dist/', folder);
  const styles = formatInlineStyles(gridStyles);

  mkdirp.sync(basePath);

  saveInlineStyles(basePath, 'grid-12-column', styles);
  saveCssModuleStyles(basePath, 'grid-12-column', styles);
};

saveStyles('grid-12-column', generateStyles());
