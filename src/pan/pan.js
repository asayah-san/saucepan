import { Component } from 'react';
import i18n from 'i18next';
import { List } from '../sauces/sauces';
import Editor from '../editor/editor';

import './pan.css';

class Pan extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			sauces: [],
			autoRender: true,
			isEditorShown: false,
		}
	}

	render() {
		return (
			<div className="pan-root">
                <div className="container">
                    <div className="header">{ i18n.t("app_name") }</div>
                    <div className="root-wrapper">
                        <List
                            sauces={this.state.sauces}
                            autoRender={this.state.autoRender}
                            onInsert={() => this.onEditorVisibilityStatusChange(true) }
                            onEdit={ this.onEdit }
                            onRemove={ this.onRemove }
                        />
                    </div> 
                </div>
                <Editor 
                    isShown={this.state.isEditorShown}
                    onInsert={this.onInsert}
                    dismissHandler={() => this.onEditorVisibilityStatusChange(false) }
                />
			</div>
		);
	}

	onInsert = (event) => {
        event.preventDefault();

        if (event.target.inputSauceQuestion.value === "" ||
            event.target.inputSauceAnswer.value === "") {
                return
            }

        var sauce = {
            id: Date.now(),
            question: event.target.inputSauceQuestion.value,
            answer: event.target.inputSauceAnswer.value
        }

        this.setState({ 
            sauces: this.state.sauces.concat(sauce),
            isEditorShown: false,
        });
    }

    onRemove = (sauce, event) => {
        event.stopPropagation();

        this.setState({ 
            sauces: this.state.sauces.filter(function(it) {
                return it.id !== sauce.id;
            }) 
        });
    }

    onEdit = (sauce) => {
        this.setState({
            isEditorShown: true,
        });
    }

    onEditorVisibilityStatusChange(status) {
        this.setState({
            isEditorShown: status,
        })
    }

    onAutoRenderStatusChange(isAutoRender)  {
        this.setState({
            autoRender: isAutoRender,
        })
    }
}

export default Pan;