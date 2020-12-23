import { Component } from 'react';
import i18n from 'i18next';
import { HiOutlineDuplicate, HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';

import './sauces.css';
import { colorOnPrimary, dimenIconSize } from '../res';

const md_bold = "**"
const md_code = "```"

class SauceList extends Component {
    render() {
        return (
            <div className="sauce-list">
                { this.props.sauces.map( sauce => {
                    return <SauceItem 
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
        
    onCopyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
    }
}

class SauceItem extends Component {
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
            <div key={sauce.id} className="sauce-container">
                <div>
                    { renderToMarkdown(question, answer) }
                </div>
                <div className="button-container">
                    <button 
                        title={ i18n.t("button_copy") } 
                        onClick={ () => this.props.copy(output) }>
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
                </div>
            </div>
        );
    }
}

export { SauceList, SauceItem };