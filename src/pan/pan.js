import { Component } from 'react';
import { List } from '../sauces/sauces';

import './pan.css';

class Pan extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			autoRender: true,
		}
	}

	render() {
		return (
			<div className="pan-root">
                <div className="container">
                    <div className="header">{ this.props.name }</div>
                    <div className="root-wrapper">
                        <List
                            saucepanId={ this.props.id }
                            sauces={ this.props.sauces }
                            autoRender={ this.state.autoRender }
                            onAddAction={ this.props.onEditorVisibilityStatusChange }
                            onEdit={ this.props.onEdit }
                            onRemove={ this.props.onRemove }
                        />
                    </div> 
                </div>
			</div>
		);
	}


    onAutoRenderStatusChange(isAutoRender)  {
        this.setState({
            autoRender: isAutoRender,
        })
    }
}

export default Pan;