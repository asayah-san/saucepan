import React, { Component } from 'react';
import { Input, Label, TextButton, DismissButton } from '../components/components';
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
    return <div className="mb-8 flex flex-row items-center">
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
        var creatorTheme = "p-4 bg-gray-800 ";
        creatorTheme += this.props.isShown ? + " inline-block" : + " hidden";

        return (
            <div className={creatorTheme}>
                <FormHeader header="header_create_sauce" onDismiss={() => this.props.onDismiss()}/>                

                <form onSubmit={e => this.props.onSubmit(this.props.saucepanId, e)}>
                    <input
                        type="hidden"
                        id={insert_sauce_id}
                        name={insert_sauce_id}/>
                    <Label hint={i18n.t("input_question")} htmlFor={insert_sauce_question}/>
                    <br/>
                    <Input
                        background="bg-gray-700"
                        type="text"
                        id={insert_sauce_question}
                        name={insert_sauce_question}/>
                    <br/>
                    <Label hint={i18n.t("input_answer")} htmlFor={insert_sauce_answer}/>
                    <br/>
                    <Input
                        background="bg-gray-700"
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
        let editorTheme = "p-4 bg-gray-800 ";
        editorTheme += this.props.isShown ? + " inline-block" : + " hidden";

        return (
            <div className={editorTheme}>
                <FormHeader header="header_edit_sauce" onDismiss={() => this.props.onDismiss()}/>                

                <form onSubmit={e => this.props.onSubmit(this.props.saucepanId, this.props.id, e)}>
                    <input
                        type="hidden"
                        id={update_sauce_id}
                        name={update_sauce_id}
                        value={this.state.id}
                        onChange={e => this.onInputChanged(e)}/>
                    <Label hint={i18n.t("input_question")} htmlFor={update_sauce_question}/>
                    <br/>
                    <Input
                        background="bg-gray-700"
                        type="text"
                        id={update_sauce_question}
                        name={update_sauce_question}
                        value={this.state.question}
                        onChange={e => this.onInputChanged(e)}/>
                    <br/>
                    <Label hint={i18n.t("input_answer")} htmlFor={update_sauce_answer}/>
                    <br/>
                    <Input
                        background="bg-gray-700"
                        type="text"
                        id={update_sauce_answer}
                        name={update_sauce_answer}
                        value={this.state.answer}
                        onChange={e => this.onInputChanged(e)}/>
                    <br/>
                    <TextButton type="submit" text={i18n.t("button_save")}/>
                </form>
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