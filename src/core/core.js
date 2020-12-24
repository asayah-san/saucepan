import i18next from 'i18next';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import Pan from '../pan/pan';
import Editor from '../editor/editor';

import 'react-toastify/dist/ReactToastify.css';
import './core.css';

class Core extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            pans: [ { id: 0, name: i18next.t("pan_name_default").concat(1), sauces: [] } ], 
            currentPanIndex: 0,
            isEditorShown: false,
        }
    }

    render() {
        const renderPan = () => {
            var pan = this.state.pans[this.state.currentPanIndex];
            return <Pan 
                        id={ pan.id } 
                        name={ pan.name } 
                        sauces={ pan.sauces }
                        onInsert={ this.onSauceInsert }
                        onRemove={ this.onSauceRemove }
                        onEdit={ this.onSauceEdit }
                        onEditorVisibilityStatusChange={() => this.onEditorVisibilityStatusChange(true) }/>
        }

        return (
            <div className="core-root">
                <div className="wrapper">
                    <div className="container"> 
                        <div className="pan-item-container">
                            <div className="app-header">{ i18next.t("app_name") }</div>
                            <div>
                                <button className="pan-item-add" onClick={ this.onSaucepanAdded }>
                                    { i18next.t("button_new") }
                                </button>
                            </div>
                            {
                            this.state.pans.map(pan => {
                                var buttonClassName = "pan-item"
                                if (pan.id === this.state.currentPanIndex) {
                                    buttonClassName = buttonClassName + " active";
                                }

                                return <div key={pan.id}>
                                            <button 
                                                className={buttonClassName} 
                                                onClick={() => this.onSaucepanSwitched(pan.id)}>
                                                <span>{pan.name}</span>
                                            </button>
                                        </div>
                            })
                        }
                        </div>
                    </div>
                    <div className="container"> { renderPan() } </div>
                </div>
                <Editor 
                    panId={ this.state.currentPanIndex }
                    isShown={ this.state.isEditorShown }
                    onInsert={ this.onSauceInsert }
                    onDismiss={() => this.onEditorVisibilityStatusChange(false) }
                />
                <ToastContainer />
            </div>
        );
    }

    onSaucepanAdded = () => {
        var currentSaucepanSize = this.state.pans.length;

        var pan = {
            id: currentSaucepanSize,
            name: i18next.t("pan_name_default").concat(currentSaucepanSize + 1),
            sauces: []
        }

        this.setState({
            pans: this.state.pans.concat(pan),
        })
        this.onShowToastNotification("feedback_saucepan_added");
    }

    onSaucepanModified(saucepan) {
        var currentSaucepans = this.state.pans;
        var index = currentSaucepans.findIndex(pan => saucepan.id === pan.id);
        if (index > - 1) {
            currentSaucepans[index] = saucepan;

            this.setState({
                pans: currentSaucepans,
            });
        }
    }

    onSaucepanSwitched(index) {
        this.setState({ currentPanIndex: index })
    }

    onSauceInsert = (saucepanId, event) => {
        event.preventDefault();
        this.onEditorVisibilityStatusChange(false);

        if (event.target.inputSauceQuestion.value === "" ||
            event.target.inputSauceAnswer.value === "") {
                return
            }

        var sauce = {
            id: Date.now(),
            question: event.target.inputSauceQuestion.value,
            answer: event.target.inputSauceAnswer.value
        }

        var saucepan = this.state.pans[saucepanId];
        saucepan.sauces = saucepan.sauces.concat(sauce);
        this.onSaucepanModified(saucepan);
    
        this.onShowToastNotification("feedback_sauce_added");
        this.setState({ 
            isEditorShown: false,
        });
    }

    onSauceRemove = (saucepanId, sauce, event) => {
        event.stopPropagation();

        var pan = this.state.pans[saucepanId];
        pan.sauces = pan.sauces.filter(function(it) {
            return it.id !== sauce.id;
        })

        this.onShowToastNotification("feedback_sauce_removed");
        this.onSaucepanModified(pan);
    }

    onSauceEdit = (saucepanId, sauce, event) => {
        event.stopPropagation();

        this.setState({
            isEditorShown: true,
        });
    }

    onEditorVisibilityStatusChange(status) {
        this.setState({
            isEditorShown: status,
        })
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
}

export default Core;