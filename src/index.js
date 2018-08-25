import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/scss/bootstrap.scss';
import 'shards-dashboard/styles/scss/shards-dashboards.scss';
import 'leaflet/dist/leaflet.css';
import App from './App';
import { unregister } from './registerServiceWorker';

import 'bootstrap';

ReactDOM.render(<App />, document.getElementById('root'));
// unregister();
