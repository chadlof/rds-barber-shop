import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/styles.css'
import Layout from './components/templates/Layout';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(<Router>
                    <Layout />
                </Router>
                , document.getElementById('root'));
registerServiceWorker();
