import React, { Component } from 'react';
import { HiX } from "react-icons/hi";
import i18next from "i18next";

import './form.css';

const insert_sauce_id = "_insert_id";
const insert_sauce_question = "_insert_question";
const insert_sauce_answer = "_insert_answer";

const update_sauce_id = "_update_id";
const update_sauce_question = "_update_question";
const update_sauce_answer = "_update_answer";

class Creator extends Component {
    render() {
        const rootClassName = this.props.isShown ? "container container-show" : "container container-hide";

        return(
            <div className={rootClassName}>
                <div className="wrapper">
                    <div className="dismiss-button-container">
                        <button className="dismiss-button" onClick={this.props.onDismiss}><HiX id="icon"/></button>
                    </div>
                    <div className="header">{i18next.t("header_create_sauce")}</div>

                    <form className="editor-form" onSubmit={e => this.props.onSubmit(this.props.saucepanId, e)}>
                        <input
                            type="hidden"
                            id={insert_sauce_id}
                            name={insert_sauce_id}
                            ref={ (a) => this.inputSauceId = a }/>
                        <br/>
                        <label>{i18next.t("input_question")}</label>
                        <input
                            type="text"
                            id={insert_sauce_question}
                            name={insert_sauce_question}
                            ref={ (a) => this.inputSauceQuestion = a}/>
                        <br/>
                        <label>{i18next.t("input_answer")}</label>
                        <input
                            type="text"
                            id={insert_sauce_answer}
                            name={insert_sauce_answer}
                            ref={ (a) => this.inputSauceAnswer = a }/>
                        <br/>
                        <button type="submit">{i18next.t("button_save")}</button>
                    </form>
                </div>
            </div>
        );
    }
}

class Editor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            question: this.props.question,
            answer: this.props.answer
        }
    }

    render() {
        const rootClassName = this.props.isShown ? "container container-show" : "container container-hide";

        return (
            <div className={rootClassName}>
                <div className="wrapper">
                    <div className="dismiss-button-container">
                        <button className="dismiss-button" onClick={this.props.onDismiss}><HiX id="icon"/></button>
                    </div>
                    <div className="header">{i18next.t("header_edit_sauce")}</div>

                    <form className="editor-form"
                          onSubmit={e => this.props.onSubmit(this.props.saucepanId, this.props.id, e)}>
                        <input
                            type="hidden"
                            id={update_sauce_id}
                            name={update_sauce_id}
                            value={this.state.id}
                            ref={a => this.inputSauceId = a}
                            onChange={e => this.onInputChanged(e)}/>
                        <br/>
                        <label>{i18next.t("input_question")}</label>
                        <input
                            type="text"
                            id={update_sauce_question}
                            name={update_sauce_question}
                            value={this.state.question}
                            ref={a => this.inputSauceQuestion = a}
                            onChange={e => this.onInputChanged(e)}/>
                        <br/>
                        <label>{i18next.t("input_answer")}</label>
                        <input
                            type="text"
                            id={update_sauce_answer}
                            name={update_sauce_answer}
                            value={this.state.answer}
                            ref={a => this.inputSauceAnswer = a}
                            onChange={e => this.onInputChanged(e)}/>
                        <br/>
                        <button type="submit">{i18next.t("button_save")}</button>
                    </form>
                </div>
            </div>
        );
    }

    onInputChanged = event => {
        switch(event.target.id) {
            case update_sauce_id:
                this.setState({ id: event.target.value });
                break;
            case update_sauce_question:
                this.setState({ question: event.target.value });
                break;
            case update_sauce_answer:
                this.setState({ answer: event.target.value });
                break;
            default: break;
        }
    }
}

export { Creator, Editor };