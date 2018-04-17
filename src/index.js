import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css'
import Layout from './components/templates/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
