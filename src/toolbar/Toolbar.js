import { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div className="title">{this.props.title}</div>
            </div>
        )
    }
}

export default Toolbar;
