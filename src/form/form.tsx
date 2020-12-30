import React, { Component } from 'react';
import { IconX } from "@tabler/icons";
import { Input, InputHint, TextButton, DismissButton } from '../components/components';
import i18n from '../i18n';

const insert_sauce_id = "_insert_id";
const insert_sauce_question = "_insert_question";
const insert_sauce_answer = "_insert_answer";

const update_sauce_id = "_update_id";
const update_sauce_question = "_update_question";
const update_sauce_answer = "_update_answer";

type HeaderProps = {
    header: string,
    onDismiss: Function
}

const FormHeader = (props: HeaderProps) => {
    return <div className="mb-8">
                <DismissButton onClick={() => props.onDismiss()}/>
                <span className="my-1 font-semibold text-white text-2xl">{i18n.t(props.header)}</span>
            </div>
}

type CreatorProps = {
    saucepanId: number,
    isShown: boolean,
    onDismiss: Function,
    onSubmit: Function,
}

class Creator extends Component<CreatorProps, {}> {
    render() {
        var creatorClassName = "p-4 bg-gray-800"
        creatorClassName = this.props.isShown ? creatorClassName + " inline-block" : creatorClassName + " hidden";

        return(
            <div className={creatorClassName}>
                <FormHeader header="header_create_sauce" onDismiss={() => this.props.onDismiss()}/>                

                <form className="editor-form" onSubmit={e => this.props.onSubmit(this.props.saucepanId, e)}>
                    <input
                        type="hidden"
                        id={insert_sauce_id}
                        name={insert_sauce_id}/>
                    <InputHint hint={i18n.t("input_question")}/>
                    <Input
                        background="bg-gray-700"
                        type="text"
                        id={insert_sauce_question}
                        name={insert_sauce_question}/>
                    <InputHint hint={i18n.t("input_answer")}/>
                    <Input
                        background="bg-gray-700 "
                        type="text"
                        id={insert_sauce_answer}
                        name={insert_sauce_answer}/>
                    <br/>
                    <TextButton type="submit" text={i18n.t("button_save")}/>
                </form>
            </div>
        );
    }
}

type EditorState = {
    id: number,
    question: string,
    answer: string,
}

type EditorProps = {
    saucepanId: number,
    id: number,
    question: string, 
    answer: string
    isShown: boolean,
    onDismiss: Function,
    onSubmit: Function,
}

class Editor extends Component<EditorProps, EditorState> {
    constructor(props: EditorProps) {
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
                <div className="form-wrapper">
                    <div className="dismiss-button-container">
                        <button className="dismiss-button" onClick={() => this.props.onDismiss()}><IconX id="icon"/></button>
                    </div>
                    <div className="header">{i18n.t("header_edit_sauce")}</div>

                    <form className="editor-form"
                          onSubmit={e => this.props.onSubmit(this.props.saucepanId, this.props.id, e)}>
                        <input
                            type="hidden"
                            id={update_sauce_id}
                            name={update_sauce_id}
                            value={this.state.id}
                            onChange={e => this.onInputChanged(e)}/>
                        <br/>
                        <InputHint hint={i18n.t("input_question")}/>
                        <input
                            type="text"
                            id={update_sauce_question}
                            name={update_sauce_question}
                            value={this.state.question}
                            onChange={e => this.onInputChanged(e)}/>
                        <br/>
                        <InputHint hint={i18n.t("input_answer")}/>
                        <input
                            type="text"
                            id={update_sauce_answer}
                            name={update_sauce_answer}
                            value={this.state.answer}
                            onChange={e => this.onInputChanged(e)}/>
                        <br/>
                        <TextButton type="submit" text={i18n.t("button_save")}/>
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