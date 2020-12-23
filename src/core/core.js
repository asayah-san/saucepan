import { Component } from 'react';
import Pan from '../pan/pan';

import './core.css';

class Core extends Component {
    render() {
        return (
            <div className="core-root">
                <div className="wrapper">
                    <div className="container">
                        
                    </div>
                    <div className="container">
                        <Pan/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Core;