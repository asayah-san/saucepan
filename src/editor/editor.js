import { Component } from 'react';
import { HiX } from 'react-icons/hi';
import i18n from 'i18next';

import './editor.css';

const input_sauce_id = "_sauce_id";
const input_sauce_question = "_sauce_question";
const input_sauce_answer = "_sauce_answer";

class Editor extends Component {
    constructor(props) {
        super(props);

        var _editorHeader = "editor_new";
        var _id = "";
        var _question = "";
        var _answer = "";
        if (this.props.sauce && this.props.sauce) {
            console.log("true");
            _editorHeader = "editor_edit";
            _id =  this.props.sauce.id;
            _question = this.props.sauce.question;
            _answer = this.props.sauce.answer;
        }

        this.state = { 
            editorHeader: _editorHeader,
            id: _id,
            question: _question,
            answer: _answer,
        }
    }

    onValueChanged = (event) => {
        switch(event.target.id) {
            case input_sauce_id:
                this.setState({ id: event.target.value });
                break;
            case input_sauce_question:
                this.setState({ question: event.target.value });
                break;
            case input_sauce_answer:
                this.setState({ answer: event.target.value })
                break;
            default: break;
        }
    }

    render() {

        const editorStatus = this.props.isShown ? "editor-root editor-show" : "editor-root editor-hide"

        return (
            <div className={editorStatus}>
                <div className="editor">
                    <div className="dismiss-button-wrapper">
                        <button className="dismiss-button" onClick={this.props.onDismiss}><HiX id="icon"/></button>
                    </div>
                    <div className="header">{ i18n.t(this.state.editorHeader) }</div>

                    <form className="editor-form" onSubmit={ e => this.props.onInsert(this.props.panId, e) }>
                        <input 
                            type="hidden"
                            id={input_sauce_id}
                            name="inputSauceId"
                            value={this.state.id}
                            ref={ (a) => this.inputSauceId = a }
                            onChange={(e) => this.onValueChanged(e) }/>
                        <br/>
                        <input
                            type="text"
                            id={input_sauce_question}
                            name="inputSauceQuestion"
                            placeholder={ i18n.t("input_question") }
                            value={this.state.question}
                            ref={ (a) => this.inputSauceQuestion = a}
                            onChange={(e) => this.onValueChanged(e)} />
                        <br/>
                        <input
                            type="text"
                            id={input_sauce_answer}
                            name="inputSauceAnswer"
                            placeholder={ i18n.t("input_answer") }
                            value={this.state.answer}
                            ref={ (a) => this.inputSauceAnswer = a }
                            onChange={(e) => this.onValueChanged(e) } />
                        <br/>
                        <button type="submit">{ i18n.t("button_save") }</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Editor;