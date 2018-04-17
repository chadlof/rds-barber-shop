import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css'
import Header from './components/orginisms/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
