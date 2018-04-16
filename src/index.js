import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css'
import PhoneNum from './components/atoms/PhoneNum';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PhoneNum />, document.getElementById('root'));
registerServiceWorker();
