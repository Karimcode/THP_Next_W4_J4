import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import Content from './Components/MarkdownList';

const App = () => {
  const thisIsAPlaceHolder = 'hello';
  return (<Content />);
};


ReactDOM.render(<App />, document.getElementById('root'));
