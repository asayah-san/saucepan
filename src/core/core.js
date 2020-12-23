import { Component } from 'react';
import i18n from 'i18next';
import { SauceList } from '../sauces/sauces';
import Editor from '../editor/editor';
import { HiOutlinePlus } from 'react-icons/hi';

import './core.css';
import { colorOnPrimary } from '../res';

class Saucepan extends Component {
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
			<div className="saucepan-root">
                <div className="root-wrapper">
                    <div className="container">
                        <div className="button-wrapper">
                            <button 
                                className="action-button"
                                onClick={() => this.onEditorVisibilityStatusChange(true) }>
                                <HiOutlinePlus color={colorOnPrimary}/>
                            </button>
                        </div>
                    </div>
                    <div className="container">
                        <div className="header">{ i18n.t("app_name") }</div>
                        <SauceList
                            sauces={this.state.sauces}
                            autoRender={this.state.autoRender}
                        />
                    </div>
                </div>
                <Editor 
                    isShown={this.state.isEditorShown}
                    onInsert={this.onInsert}
                    onRemove={this.onRemove}
                    onEdit={this.onEdit}
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

    onRemove = (sauce) => {
        this.setState({ 
            sauces: this.state.sauces.filter(function(it) {
                return it.id !== sauce.id;
            }) 
        });
    }

    onEdit = (sauce) => {}

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

export default Saucepan;