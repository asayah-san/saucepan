import { Component } from 'react';
import i18n from 'i18next';

import './editor.css';

const input_sauce_id = "_sauce_id";
const input_sauce_question = "_sauce_question";
const input_sauce_answer = "_sauce_answer";

class Editor extends Component {
    render() {
        const editorStatus = this.props.isShown ? "editor-root editor-show" : "editor-root editor-hide"

        return (
            <div className={editorStatus}>
                <div className="editor">
                    <form className="editor-form" onSubmit={ e => this.props.onInsert(e) }>
                        <input 
                            type="hidden"
                            id={input_sauce_id}
                            name="inputSauceId"
                            ref={ (a) => this.inputSauceId = a }/>
                        <br/>
                        <input
                            type="text"
                            id={input_sauce_question}
                            name="inputSauceQuestion"
                            placeholder={ i18n.t("input_question") }
                            ref={ (a) => this.inputSauceQuestion = a} />
                        <br/>
                        <input
                            type="text"
                            id={input_sauce_answer}
                            name="inputSauceAnswer"
                            placeholder={ i18n.t("input_answer") }
                            ref={ (a) => this.inputSauceAnswer = a } />
                        <br/>
                        <button type="submit">{ i18n.t("button_save") }</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Editor;