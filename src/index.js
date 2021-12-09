import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './tutorial-9/App';
import '../src/tutorial-9/style.css';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';

ReactDOM.render(
    // <React.StrictMode>
    //     <MuiThemeProvider>
    //         <Router>
    //             <App />
    //         </Router>
    //     </MuiThemeProvider>
    // </React.StrictMode>,
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

