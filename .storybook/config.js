
import { configure, storiesOf } from '@storybook/react';
import Typography from 'typography'
import wordpress2016Theme from 'typography-theme-wordpress-2016';

const create = (data) => {
  const files = data.context.keys();
  const filter = files.reduce(function(acc, filename) {
    const paths = filename.split('/');
    return acc;
  }, []);

  return {
    ...data,
    files,
    stories: files.reduce(function(acc, filename) {
      const paths = filename.split('/');
      if(filter.length) {
        if(filter.indexOf(paths[1]) !== -1) {
          acc.push({
            ...data,
            filter,
            filename,
            source: data.context(filename),
          });
        }
      } else {
        acc.push({
          ...data,
          filter,
          filename,
          source: data.context(filename),
        });
      }
      return acc;
    }, [])
  }
};

const parseModule = (data) => {
  const { name, examples, group } = data.source;
  const groupBy = [name].join('/');

  Object.keys(examples).forEach((exampleName) => {
    storiesOf(groupBy, module)
      .add(exampleName, examples[exampleName]);
  });

};

const loadStories = () => {

  // wordpress2016Theme.overrideThemeStyles = ({ rhythm }, options) => ({
  //   'h1,h2': {
  //     marginBottom: '25px',
  //     marginTop: '5px',
  //   },
  //   'h3,h4,h5,h6': {
  //     marginBottom: '15px',
  //     marginTop: '5px',
  //   },
  // });

  // const typography = new Typography({
  //   ...wordpress2016Theme
  // });

  // typography.injectStyles();


  create({
    context: require.context('../src/', true, /.stories.jsx?$/)
  }).stories.forEach(parseModule);
};

configure(loadStories, module);
