import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
