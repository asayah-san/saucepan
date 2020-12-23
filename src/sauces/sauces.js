import { Component } from 'react';
import i18n from 'i18next';
import { HiOutlineDuplicate, HiOutlineTrash, HiOutlinePencil, HiOutlinePlus } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';

import './sauces.css';
import { colorOnPrimary, dimenIconSize } from '../res';

const md_bold = "**"
const md_code = "```"

class List extends Component {
    render() {
        return (
            <div className="sauce-list">
                <button className="add-action" onClick={ this.props.onInsert }>
                    <div className="wrapper">
                        <HiOutlinePlus/>
                        <div>Add</div>
                    </div>
                </button>
                { this.props.sauces.map( sauce => {
                    return <Item 
                                key={ sauce.id }
                                sauce={ sauce }
                                autoRender={ this.props.autoRender }
                                edit={ this.props.onEdit }
                                remove={ this.props.onRemove }
                                copy={ this.onCopyToClipboard }
                            />
                })}
            </div>
        );
    }
        
    onCopyToClipboard = (code, event) => {
        event.stopPropagation();
        navigator.clipboard.writeText(code);
    }
}

class Item extends Component {
    render() {
        const sauce = this.props.sauce;
        
        const renderToMarkdown = (question, answer) => {
            if (this.props.autoRender) {
                return <div>
                            <div className="sauce-question">
                                <ReactMarkdown>{ question }</ReactMarkdown>
                            </div>
                            <div className="sauce-answer">
                                <ReactMarkdown>{ answer }</ReactMarkdown>
                            </div>
                        </div>
            } else {
                return  <div>
                            <div className="sauce-question">{question}</div>
                            <div className="sauce-answer">{answer}</div>
                        </div>
            }
        }

        const question = md_bold.concat(sauce.question).concat(md_bold);
        const answer = md_code.concat(sauce.answer).concat(md_code);
        const output = question.concat("  ").concat(answer);

        return (
            <button key={sauce.id} className="sauce-container" onClick={() => this.props.edit(sauce) }>
                <div>
                    { renderToMarkdown(question, answer) }
                </div>
                <div className="button-container">
                    <button 
                        title={ i18n.t("button_copy") } 
                        onClick={ (e) => this.props.copy(output, e) }>
                            <HiOutlineDuplicate size={dimenIconSize} color={colorOnPrimary}/>
                    </button>
                    <button 
                        title={ i18n.t("button_remove") } 
                        onClick={ (e) => this.props.remove(sauce, e) }>
                            <HiOutlineTrash size={dimenIconSize} color={colorOnPrimary}/>
                    </button>
                </div>
            </button>
        );
    }
}

export { List, Item };