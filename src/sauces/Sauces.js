import { Component } from 'react';
import { Clipboard, Trash, Edit2, Save } from 'react-feather';
import ReactMarkdown from 'react-markdown';
import './Sauces.css';

const style = getComputedStyle(document.body);
const color_on_primary = style.getPropertyValue("--color-on-primary");
const dimen_icon_size = style.getPropertyValue("--dimen-icon-size");

const markdown_bold = "**"
const markdown_block = "```"

const input_sauce_id = "_sauce-id";
const input_sauce_question = "_sauce-question";
const input_sauce_answer = "_sauce-answer";

class Sauces extends Component {
    constructor(props) {
        super(props);

        this.state = { sauces: [] }
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
        var current_sauces = this.state.sauces;
        var index = current_sauces.findIndex(x => x.id === sauce.id);
        if (index > -1) {
            current_sauces = current_sauces.splice(index, 1);
            this.setState({ sauces: current_sauces, });
        }
    }

    onEdit = (sauce) => {}

    render() {
        return (
            <div className="component-root">
                <div className="container">
                    <SauceList sauces={this.state.sauces} edit={this.onEdit} remove={this.onRemove}/>
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
                            ref={ (a) => this.inputSauceQuestion = a} />
                        <br/>
                        <input
                            type="text"
                            id={input_sauce_answer}
                            ref={ (a) => this.inputSauceAnswer = a } />
                        <br/>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

class SauceList extends Component {

    copy = (sauce) => {
        navigator.clipboard.writeText(sauce.id);
    }

    render() {
        return (
            <ul className="sauce-list">
                { this.props.sauces.map( sauce => {
                    return (
                        <li key={sauce.id} className="sauce-container">
                            <div className="sauce-question">
                                <ReactMarkdown>{ markdown_bold.concat(sauce.question).concat(markdown_bold) }</ReactMarkdown>
                            </div>
                            <div className="sauce-answer">
                                <ReactMarkdown>{ markdown_block.concat(sauce.answer).concat(markdown_block) }</ReactMarkdown>
                            </div>
                            <button title={"Copy to Clipboard"} onClick={ e => this.copy(sauce) }><Clipboard size={dimen_icon_size} color={color_on_primary}/></button>
                            <button title={"Edit"} onClick={ e => this.props.edit(sauce) }><Edit2 size={dimen_icon_size} color={color_on_primary}/></button>
                            <button title={"Remove"} onClick={ e => this.props.remove(sauce)}><Trash size={dimen_icon_size} color={color_on_primary}/></button>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default Sauces;