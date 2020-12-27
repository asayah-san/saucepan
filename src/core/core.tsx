import React, { Component, FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Creator, Editor } from '../form/form';
import { HiOutlinePlus } from "react-icons/all";
import { Saucepan } from '../saucepan/saucepan';
import { Sauce, Pan } from './types';
import i18n from '../i18n';

import 'react-toastify/dist/ReactToastify.css';
import './core.css';

type State = {
    saucepans: Pan[],
    currentSaucepanId: number,
    isSauceRenderedInMarkdown: boolean,
    isInCreateMode: boolean,
    isInEditMode: boolean,
    isInHeaderEditMode: boolean,
    currentSauce: Sauce
}

class Core extends Component<{}, State> {
    constructor(props) {
        super(props);

        const saucepan: Pan = {
            id: Date.now(),
            name: null,
            sauces: []
        }
        this.state = { 
            saucepans: [ saucepan ],
            currentSaucepanId: saucepan.id,

            isSauceRenderedInMarkdown: true,
            isInCreateMode: false,
            isInEditMode: false,
            isInHeaderEditMode: false,
            
            currentSauce: null,
        }
    }

    render() {

        const renderSaucepanList = () => {
            return (<div>{
                this.state.saucepans.map(saucepan => {
                    let saucepanItemClassName = "saucepan-item";
                    if (saucepan.id === this.state.currentSaucepanId) {
                        saucepanItemClassName = saucepanItemClassName + " active";
                    }

                    return <button
                        key={saucepan.id}
                        className={saucepanItemClassName}
                        onClick={() => this.onSaucepanSwitched(saucepan)}>
                        {renderSaucepanHeader(saucepan)}
                    </button>
                })
            }</div>)
        }

        const renderSaucepan = () => {
            const index = this.state.saucepans.findIndex(saucepan => saucepan.id === this.state.currentSaucepanId);

            if (index > -1) {
                const saucepan = this.state.saucepans[index];

                return <Saucepan
                            data={saucepan}
                            autoRenderToMarkdown={this.state.isSauceRenderedInMarkdown}
                            isInHeaderEditMode={this.state.isInHeaderEditMode}
                            onRemove={this.onSauceRemove}
                            onEdit={this.onSauceEdit}
                            onCreate={this.onEnterCreateMode}
                            onCopy={this.onSauceCopied}
                            onHeaderEdit={this.onSaucepanHeaderEdit}
                            onHeaderChanged={this.onSaucepanHeaderChanged}/>
            }
        }

        const renderSaucepanHeader = saucepan => {
            if (saucepan.name !== null)
                return <span>{saucepan.name}</span>
            else return <span>{i18n.t("pan_name_fallback")}</span>
        }

        const renderSauceForm = () => {
            if (this.state.currentSauce !== null && this.state.isInEditMode) {
                const sauce = this.state.currentSauce;

                return <Editor
                            id={sauce.id}
                            question={sauce.question}
                            answer={sauce.answer}
                            saucepanId={this.state.currentSaucepanId}
                            isShown={this.state.isInEditMode}
                            onSubmit={this.onSauceUpdate}
                            onDismiss={this.onExitEditMode}/>
            } else if (this.state.isInCreateMode) {
                return <Creator
                            saucepanId={this.state.currentSaucepanId}
                            isShown={this.state.isInCreateMode}
                            onSubmit={this.onSauceInsert}
                            onDismiss={this.onExitCreateMode}/>
            }
        }

        return (
            <div className="core-root">
                <div className="wrapper">
                    <div className="container">
                        <div className="navigation-container">
                            <div className="header">{i18n.t("app_name")}</div>
                            <button className="saucepan-add" onClick={this.onSaucepanAdded}>
                                <HiOutlinePlus/>
                            </button>
                            {renderSaucepanList()}
                        </div>
                    </div>
                    <div className="container">{renderSaucepan()}</div>
                    {renderSauceForm()}
                </div>
                <ToastContainer />
            </div>
        );
    }

    onSaucepanAdded = () => {
        this.setState({
            saucepans: this.state.saucepans.concat({
                id: Date.now(),
                name: null,
                sauces: []
            }),
        })
        this.onShowToastNotification("feedback_saucepan_added");
    }
    
    onSaucepanModified = (saucepan: Pan) => {
        let currentSaucepans: Pan[] = this.state.saucepans;
        
        let index = currentSaucepans.findIndex(pan => saucepan.id === pan.id);
        if (index > - 1) {
            currentSaucepans[index] = saucepan;

            this.setState({
                saucepans: currentSaucepans,
            });
        }
    }

    onSaucepanSwitched = (saucepan: Pan) => {
        this.setState({ currentSaucepanId: saucepan.id });
    }

    onSaucepanHeaderEdit = (status: boolean) => {
        this.setState({ isInHeaderEditMode: status });
    }

    onSaucepanHeaderChanged = event => {
        event.preventDefault();

        const id: number = +event.target[0].value;
        const name: string = event.target[1].value;

        if (id !== null && name !== null) {
            const saucepan = this.state.saucepans.find(saucepan => saucepan.id === id);

            if (saucepan) {
                saucepan.name = name;

                this.onSaucepanHeaderEdit(false);
                this.onSaucepanModified(saucepan);
            }
        }
    }

    onSauceInsert = (saucepanId: number, event: FormEvent) => {
        event.preventDefault();

        const _question: string = event.target[1].value;
        const _answer: string = event.target[2].value;

        if (_question === "" || _answer === "")
                return

        const sauce: Sauce = {
            id: Date.now(),
            question: _question,
            answer: _answer
        };

        const saucepan = this.state.saucepans.find(saucepan => saucepanId === saucepan.id);
        if (saucepan) {
            saucepan.sauces = saucepan.sauces.concat(sauce);
            
            this.onSaucepanModified(saucepan);
            this.onShowToastNotification("feedback_sauce_added");
            this.onExitCreateMode();
        }
    }

    onSauceRemove = (saucepanId: number, sauce: Sauce, event: FormEvent) => {
        event.stopPropagation();

        const saucepan = this.state.saucepans.find(saucepan => saucepan.id === saucepanId);
        if (saucepan) {
            saucepan.sauces = saucepan.sauces.filter(function(it) {
                return it.id !== sauce.id;
            });

            this.onSaucepanModified(saucepan);
            this.onShowToastNotification("feedback_sauce_removed");
        }
    }

    onSauceEdit = (sauce: Sauce, event: FormEvent) => {
        event.stopPropagation();

        this.setState({
            isInEditMode: true,
            currentSauce: sauce,
        });
    }

    onSauceUpdate = (saucepanId: number, sauceId: number, event: FormEvent) => {
        event.preventDefault();

        const _question = event.target[1].value;
        const _answer = event.target[2].value;
        if (_question === "" || _answer === "") {
            return
        }

        const saucepan = this.state.saucepans.find(saucepan => saucepan.id === saucepanId);

        if (saucepan) {
            const index = saucepan.sauces.findIndex(sauce => sauce.id === sauceId);

            if (index > -1) {
                const sauce = saucepan.sauces[index];
                sauce.question = _question;
                sauce.answer = _answer;

                saucepan.sauces[index] = sauce;

                this.onSaucepanModified(saucepan);
                this.onShowToastNotification("feedback_sauce_updated");
                this.onExitEditMode();
            }
        }
    }

    onSauceCopied = (output: string) => {
        navigator.clipboard.writeText(output)
            .then(() => {
                this.onShowToastNotification("feedback_sauce_copied");
            });
    }

    onShowToastNotification = (message: string) => {
        toast.dark(i18n.t(message), {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    onEnterCreateMode = () => {
        this.setState({
            isInCreateMode: true,
            isInEditMode: false,
        });
    }
    onExitCreateMode = () => {
        this.setState({
            isInCreateMode: false,
            currentSauce: null
        });
    }

    onEnterEditMode = () => {
        this.setState({
            isInEditMode: true
        });
    }
    onExitEditMode = () => {
        this.setState({
            isInCreateMode: false,
            isInEditMode: false,
            currentSauce: null,
        });
    }
}

export { Core }