import React from 'react';
import i18n from '../i18n';
import { HiOutlinePencil, HiOutlineTrash, HiOutlinePlus } from 'react-icons/hi';
import ReactMarkdown from 'react-markdown';

import './sauces.css';
import {Sauce} from "../core/types";

const md_bold = "**"
const md_code = "```"

type ListProps = {
    sauces: Sauce[]
    saucepanId: number,
    autoRenderToMarkdown: boolean,
    onCreate: Function
    onEdit: Function,
    onRemove: Function,
    onCopy: Function
}

const List = (props: ListProps) => {
    const renderItem = sauce => {
        return <Item
                    key={sauce.id}
                    sauce={sauce}
                    saucepanId={props.saucepanId}
                    autoRenderToMarkdown={props.autoRenderToMarkdown}
                    onEdit={props.onEdit}
                    onRemove={props.onRemove}
                    onCopy={props.onCopy}
                />
    }

    return <div className="sauce-list">
            <button className="add-action" onClick={() => props.onCreate()}>
                <div className="wrapper">
                    <HiOutlinePlus id="icon"/>
                </div>
            </button>
            {props.sauces.map(sauce => renderItem(sauce))}
        </div>
}

type ItemProps = {
    sauce: Sauce,
    saucepanId: number,
    autoRenderToMarkdown: boolean
    onCopy: Function,
    onEdit: Function,
    onRemove: Function
}

const Item = (props: ItemProps) => {
    const sauce = props.sauce;

    const renderQuestion = question => {
        return <div className="sauce-question">
            { props.autoRenderToMarkdown
                ? <ReactMarkdown>{question}</ReactMarkdown>
                : {question}
            }
        </div>
    }
    const renderAnswer = answer => {
        return <div className="sauce-answer">
            { props.autoRenderToMarkdown
                ? <ReactMarkdown>{answer}</ReactMarkdown>
                : {answer}
            }
        </div>
    }

    const question = md_bold.concat(sauce.question).concat(md_bold);
    const answer = md_code.concat(sauce.answer).concat(md_code);
    const output = question.concat("  ").concat(answer);

    return (
        <div className="sauce-container" onClick={() => props.onCopy(output)}>
            <div>
                {renderQuestion(question)}
                {renderAnswer(answer)}
            </div>
            <div className="button-container">
                <div className="button-wrapper">
                    <button
                        title={ i18n.t("button_copy") }
                        onClick={ (e) => props.onEdit(sauce, e) }>
                        <HiOutlinePencil/>
                    </button>
                </div>
                <div className="button-wrapper">
                    <button
                        title={ i18n.t("button_remove") }
                        onClick={ (e) => props.onRemove(props.saucepanId, sauce, e) }>
                        <HiOutlineTrash/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export { List, Item };