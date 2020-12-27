import i18next from 'i18next';
import React, { Component } from 'react';
import { HiOutlinePencil } from 'react-icons/hi';
import { List } from '../sauces/sauces';

import './saucepan.css';

const input_header_id = "input_id";
const input_header_name = "input_name";

class Saucepan extends Component {

	render() {
		return (
			<div className="saucepan-root">
                <div className="wrapper">
                    <SaucepanHeader
                        id={this.props.data.id}
                        header={this.props.data.name}
                        isInHeaderEditMode={this.props.isInHeaderEditMode}
                        onHeaderEdit={this.props.onHeaderEdit}
                        onHeaderChanged={this.props.onHeaderChanged}/>
                    <div className="container-main">
                        <List
                            saucepanId={this.props.data.id}
                            sauces={this.props.data.sauces}
                            autoRender={this.props.autoRender}
                            onCreate={this.props.onCreate}
                            onEdit={this.props.onEdit}
                            onRemove={this.props.onRemove}
                            onCopy={this.props.onCopy}
                        />
                    </div> 
                </div>
			</div>
		);
	}
}

class SaucepanHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: this.props.header !== null ? this.props.header : i18next.t("pan_name_fallback")
        }
    }

    render() {
        const renderEditButton = _ => {
            if (!this.props.isInHeaderEditMode) {
                return  <button className="header-edit" onClick={() => this.props.onHeaderEdit(true) }>
                            <HiOutlinePencil/>
                        </button>
            }
        }

        const renderInputOrMarkdown = _ => {
            if (!this.props.isInHeaderEditMode) {
                return <span id="header">{this.state.header}</span>
            } else {
                return <form onSubmit={e => this.props.onHeaderChanged(e)}>
                            <input
                                type="hidden"
                                id={input_header_id}
                                name={input_header_name}
                                value={this.props.id}
                                ref={a => this.input_id = a}/>
                            <input
                                type="text"
                                id={input_header_name}
                                name={input_header_name}
                                value={this.state.header}
                                ref={a => this.input_name = a }
                                onChange={e => this.onInputChanged(e)}/>
                            <input
                                type="submit"
                                id="input_submit"/>
                        </form>
            }
        }

        return(
            <div className="header-container">
                <div className="header-wrapper">{ renderInputOrMarkdown() }</div>
                { renderEditButton() }
            </div>
        );
    }

    onInputChanged = event => {
        this.setState({ header: event.target.value });
    }
}

export { Saucepan as SaucepanView };