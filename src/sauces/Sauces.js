import { Component } from 'react';
import i18n from 'i18next';
import { HiOutlineDuplicate, HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';

import './Sauces.css';
import { colorOnPrimary, dimenIconSize } from '../res/colors';

const markdown_bold = "**"
const markdown_block = "```"

const input_sauce_id = "_sauce-id";
const input_sauce_question = "_sauce-question";
const input_sauce_answer = "_sauce-answer";

class Sauces extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            sauces: [],
            autoRender: true,
        }

        this.onAutoRenderStatusChange = this.onAutoRenderStatusChange.bind(this);
    }

    onInsert = (event) => {
        event.preventDefault();

        if (this.inputSauceQuestion.value === "" ||
            this.inputSauceAnswer.value === "") {
                return
            }

        var sauce = {
            id: Date.now(),
            question: this.inputSauceQuestion.value,
            answer: this.inputSauceAnswer.value
        }

        this.setState({ sauces: this.state.sauces.concat(sauce) });
        
        this.inputSauceId.value = ""
        this.inputSauceQuestion.value = ""
        this.inputSauceAnswer.value = ""
    }

    onRemove = (sauce) => {
        this.setState({ 
            sauces: this.state.sauces.filter(function(it) {
                return it.id !== sauce.id;
            }) 
        });
    }

    onEdit = (sauce) => {}

    onAutoRenderStatusChange(isAutoRender)  {
        this.setState({
            autoRender: isAutoRender,
        })
    }

    render() {
        return (
            <div clasName="component-root">
                <div className="container-wrapper">
                    <div className="container">
                        <SauceList sauces={this.state.sauces} edit={this.onEdit} remove={this.onRemove} render={this.state.autoRender}/>
                    </div>
                    <div className="container">
                        <form onSubmit={ e => this.onInsert(e) }>
                            <input 
                                type="hidden"
                                id={input_sauce_id}
                                ref={ (a) => this.inputSauceId = a }/>
                            <br/>
                            <input
                                type="text"
                                id={input_sauce_question}
                                placeholder={ i18n.t("input_question") }
                                ref={ (a) => this.inputSauceQuestion = a} />
                            <br/>
                            <input
                                type="text"
                                id={input_sauce_answer}
                                placeholder={ i18n.t("input_answer") }
                                ref={ (a) => this.inputSauceAnswer = a } />
                            <br/>
                            <button type="submit">{ i18n.t("button_save") }</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

class SauceList extends Component {
    constructor(props) {
        super(props);

        this.state = { isInEditMode: true, }
    }

    onCopyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
    }

    render() {
        const handleMarkdownRender = (question, answer) => {
            if (this.props.render) 
                return <div>
                            <div className="sauce-question">
                                <ReactMarkdown>{ question }</ReactMarkdown>
                            </div>
                            <div className="sauce-answer">
                                <ReactMarkdown>{ answer }</ReactMarkdown>
                            </div>
                        </div>
            else return <div>
                            <div className="sauce-question">{question}</div>
                            <div className="sauce-answer">{answer}</div>
                        </div>
        }

        return (
            <ul className="sauce-list">
                { this.props.sauces.map( sauce => {
                    const question = markdown_bold.concat(sauce.question).concat(markdown_bold)
                    const answer = markdown_block.concat(sauce.answer).concat(markdown_block)
                    const code = question.concat("  ").concat(answer)

                    return (
                        <li key={sauce.id} className="sauce-container">
                            <div>
                                { handleMarkdownRender(question, answer) }
                            </div>
                            <button 
                                title={ i18n.t("button_copy") } 
                                onClick={ e => this.onCopyToClipboard(code) }>
                                    <HiOutlineDuplicate size={dimenIconSize} color={colorOnPrimary}/>
                            </button>
                            <button 
                                title={ i18n.t("button_edit") } 
                                onClick={ () => this.props.edit(sauce) }>
                                    <HiOutlinePencil size={dimenIconSize} color={colorOnPrimary}/>
                            </button>
                            <button 
                                title={ i18n.t("button_remove") } 
                                onClick={ () => this.props.remove(sauce)}>
                                    <HiOutlineTrash size={dimenIconSize} color={colorOnPrimary}/>
                            </button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Sauces;