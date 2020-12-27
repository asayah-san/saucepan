import React, { Component } from 'react';
import i18n from 'i18next';
import { HiOutlinePencil, HiOutlineTrash, HiOutlinePlus } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';

import './sauces.css';
import { dimenIconSize, colorOnPrimary } from '../res';

const md_bold = "**"
const md_code = "```"

class List extends Component {
    render() {
        const renderItem = sauce => {
            return <Item
                        key={sauce.id}
                        sauce={sauce}
                        saucepanId={this.props.saucepanId}
                        autoRender={this.props.autoRender}
                        onEdit={this.props.onEdit}
                        onRemove={this.props.onRemove}
                        onCopy={this.props.onCopy}
                    />
        }

        return (
            <div className="sauce-list">
                <button className="add-action" onClick={this.props.onCreate}>
                    <div className="wrapper">
                        <HiOutlinePlus id="icon"/>
                    </div>
                </button>
                {this.props.sauces.map(sauce => renderItem(sauce))}
            </div>
        );
    }
}

class Item extends Component {
    render() {
        const sauce = this.props.sauce;

        const renderQuestion = question => {
            if (this.props.autoRender)
                return <div className="sauce-question">
                    <ReactMarkdown>{question}</ReactMarkdown>
                </div>
            else return <div className="sauce-question">{question}</div>
        }
        const renderAnswer = answer => {
            if (this.props.autoRender)
                return <div className="sauce-answer">
                    <ReactMarkdown>{answer}</ReactMarkdown>
                </div>
            else return <div className="sauce-answer">{answer}</div>
        }

        const question = md_bold.concat(sauce.question).concat(md_bold);
        const answer = md_code.concat(sauce.answer).concat(md_code);
        const output = question.concat("  ").concat(answer);

        return (
            <div className="sauce-container" onClick={() => this.props.onCopy(output)}>
                <div>
                    {renderQuestion(question)}
                    {renderAnswer(answer)}
                </div>
                <div className="button-container">
                    <div className="button-wrapper">
                        <button
                            title={ i18n.t("button_copy") } 
                            onClick={ (e) => this.props.onEdit(sauce, e) }>
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
            </div>
        );
    }
}

export { List, Item };