import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Creator, Editor } from '../form/form';
import { HiOutlinePlus } from "react-icons/all";
import Saucepan from '../saucepan/saucepan';
import i18next from 'i18next';

import 'react-toastify/dist/ReactToastify.css';
import './core.css';


class Core extends Component {
    constructor(props) {
        super(props);

        const _currentSaucepanId = Date.now()
        console.log(_currentSaucepanId);
        this.state = { 
            saucepans: [ { id: _currentSaucepanId, name: null, sauces: [] } ],
            currentSaucepanId: _currentSaucepanId,

            isSauceRenderedInMarkdown: true,
            isInCreateMode: false,
            isInEditMode: false,
            isInHeaderEditMode: false,
            
            currentSauce: null,
        }
    }

    render() {
        const renderSaucepanList = _ => {
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

        const renderSaucepan = _ => {
            const index = this.state.saucepans.findIndex(saucepan => saucepan.id === this.state.currentSaucepanId);

            if (index > -1) {
                const saucepan = this.state.saucepans[index];

                return <Saucepan
                            data={saucepan}
                            autoRender={this.state.isSauceRenderedInMarkdown}
                            isInHeaderEditMode={this.state.isInHeaderEditMode}
                            onInsert={this.onSauceInsert}
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
            else return <span>{i18next.t("pan_name_fallback")}</span>
        }

        const renderSauceForm = _ => {
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
                            <div className="header">{i18next.t("app_name")}</div>
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
    
    onSaucepanModified = saucepan => {
        let currentSaucepans = this.state.saucepans;
        let index = currentSaucepans.findIndex(pan => saucepan.id === pan.id);
        if (index > - 1) {
            currentSaucepans[index] = saucepan;

            this.setState({
                pans: currentSaucepans,
            });
        }
    }

    onSaucepanSwitched = saucepan => {
        this.setState({ currentSaucepanId: saucepan.id });
    }

    onSaucepanHeaderEdit = status => {
        this.setState({ isInHeaderEditMode: status });
    }

    onSaucepanHeaderChanged = event => {
        event.preventDefault();

        const id = event.target[0].value;
        const name = event.target[1].value;

        if (id !== "" && name !== "") {
            var saucepan = this.state.saucepans.find(saucepan => saucepan.id == id);

            if (saucepan) {
                saucepan.name = name;

                this.onSaucepanHeaderEdit(false);
                this.onSaucepanModified(saucepan);
            }
        }
    }

    onSauceInsert = (saucepanId, event) => {
        event.preventDefault();

        if (event.target._insert_question.value === "" ||
            event.target._insert_answer.value === "") {
                return
            }

        const sauce = {
            id: Date.now(),
            question: event.target._insert_question.value,
            answer: event.target._insert_answer.value
        };

        const index = this.state.saucepans.findIndex(saucepan => saucepanId === saucepan.id);
        if (index > -1) {
            const saucepan = this.state.saucepans[index];
            saucepan.sauces = saucepan.sauces.concat(sauce);
            this.onSaucepanModified(saucepan);

            this.onShowToastNotification("feedback_sauce_added");
            this.onExitCreateMode();
        }
    }

    onSauceRemove = (saucepanId, sauce, event) => {
        event.stopPropagation();

        const index = this.state.pans.findIndex(saucepan => saucepan.id === saucepanId);

        if (index > -1) {
            const pan = this.state.pans[index];
            pan.sauces = pan.sauces.filter(function(it) {
                return it.id !== sauce.id;
            });

            this.onShowToastNotification("feedback_sauce_removed");
            this.onSaucepanModified(pan);
        }
    }

    onSauceEdit = (sauce, event) => {
        event.stopPropagation();

        this.setState({
            isInEditMode: true,
            currentSauce: sauce,
        });
    }

    onSauceUpdate = (saucepanId, sauceId, event) => {
        event.preventDefault();

        if (event.target._update_question.value === "" ||
            event.target._update_answer.value === "") {
            return
        }

        const index = this.state.saucepans.findIndex(saucepan => saucepanId === saucepan.id);
        if (index > -1) {
            const saucepan = this.state.saucepans[index];

            const sauceIndex = saucepan.sauces.findIndex(sauce => sauce.id === sauceId);
            if (sauceIndex > -1) {
                const sauce = saucepan.sauces[sauceIndex];
                sauce.question = event.target._update_question.value;
                sauce.answer = event.target._update_answer.value;

                saucepan.sauces[sauceIndex] = sauce;
                this.onSaucepanModified(saucepan);

                this.onShowToastNotification("feedback_sauce_updated");
                this.onExitEditMode();
            }
        }
    }

    onSauceCopied = output => {
        navigator.clipboard.writeText(output)
            .then(() => {
                this.onShowToastNotification("feedback_sauce_copied");
            });
    }

    onShowToastNotification = (message) => {
        toast.dark(i18next.t(message), {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

    onEnterCreateMode = _ => { this.setState({ isInCreateMode: true, currentSauce: null, isInEditMode: false }); }
    onExitCreateMode = _ => { this.setState({ isInCreateMode: false, currentSauce: null }); }

    onEnterEditMode = _ => { this.setState({ isInEditMode: true }); }
    onExitEditMode = _ => { this.setState({ isInEditMode: false, currentSauce: null, isInCreateMode: false }); }
}

export { Core }