import React from 'react';
import ReactDOM from 'react-dom';
import "babel-polyfill";
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
ReactDOM.render(
  <div>
    Hello World
  </div>,
  document.getElementById('root')
);