import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/framework7.esm.bundle';
import Framework7React from 'framework7-react';
import 'framework7/css/framework7.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

Framework7.use(Framework7React);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
