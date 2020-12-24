import { Component } from 'react';
import i18n from 'i18next';
import { HiOutlinePencil, HiOutlineTrash, HiOutlinePlus } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';

import './sauces.css';
import { colorOnPrimary, dimenIconSize } from '../res';

const md_bold = "**"
const md_code = "```"

class List extends Component {
    render() {
        return (
            <div className="sauce-list">
                <button className="add-action" onClick={ this.props.onAddAction }>
                    <div className="wrapper">
                        <HiOutlinePlus id="icon"/>
                    </div>
                </button>
                { this.props.sauces.map( sauce => {
                    return <Item 
                                saucepanId={ this.props.saucepanId }
                                sauce={ sauce }
                                key={ sauce.id }
                                autoRender={ this.props.autoRender }
                                onEdit={ this.props.onEdit }
                                onRemove={ this.props.onRemove }
                                onCopy={ this.onCopyToClipboard }
                            />
                })}
            </div>
        );
    }
        
    onCopyToClipboard = (code) => {
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
            <button key={sauce.id} className="sauce-container" onClick={() => this.props.onCopy(output) }>
                <div>
                    { renderToMarkdown(question, answer) }
                </div>
                <div className="button-container">
                    <div className="button-wrapper">
                        <button
                            title={ i18n.t("button_copy") } 
                            onClick={ (e) => this.props.onEdit(this.props.saucepanId, sauce, e) }>
                                <HiOutlinePencil size={dimenIconSize} color={colorOnPrimary}/>
                        </button>
                    </div>
                    <div className="button-wrapper">
                        <button
                            title={ i18n.t("button_remove") } 
                            onClick={ (e) => this.props.onRemove(this.props.saucepanId, sauce, e) }>
                                <HiOutlineTrash size={dimenIconSize} color={colorOnPrimary}/>
                        </button>
                    </div>
                </div>
            </button>
        );
    }
}

export { List, Item };