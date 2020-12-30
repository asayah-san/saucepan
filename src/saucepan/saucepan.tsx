import i18n from '../i18n';
import React, { Component, Fragment } from 'react';
import { IconPencil } from "@tabler/icons";
import { Input } from '../components/components';
import { List } from '../sauces/sauces';
import { Pan } from "../core/types";

const input_header_id = "input_id";
const input_header_name = "input_name";

type SaucepanProps = {
    data: Pan,
    autoRenderToMarkdown: boolean,
    isInHeaderEditMode: boolean,
    onHeaderEdit: Function,
    onHeaderChanged: Function,
    onCreate: Function,
    onEdit: Function,
    onRemove: Function,
    onCopy: Function
}

const Saucepan = (props: SaucepanProps) => {
    return (
        <Fragment>
            <SaucepanHeader
                id={props.data.id}
                header={props.data.name}
                isInHeaderEditMode={props.isInHeaderEditMode}
                onHeaderEdit={props.onHeaderEdit}
                onHeaderChanged={props.onHeaderChanged}/>
            <Fragment>
                <List
                    saucepanId={props.data.id}
                    sauces={props.data.sauces}
                    autoRenderToMarkdown={props.autoRenderToMarkdown}
                    onCreate={props.onCreate}
                    onEdit={props.onEdit}
                    onRemove={props.onRemove}
                    onCopy={props.onCopy}
                />
            </Fragment>
        </Fragment>
    );
}

type SaucepanHeaderProps = {
    id: number,
    header: string,
    isInHeaderEditMode: boolean,
    onHeaderEdit: Function,
    onHeaderChanged: Function
}

type SaucepanHeaderState = {
    header: string
}

class SaucepanHeader extends Component<SaucepanHeaderProps, SaucepanHeaderState> {
    constructor(props: SaucepanHeaderProps) {
        super(props);

        this.state = {
            header: this.props.header !== null ? this.props.header : i18n.t("pan_name_fallback")
        }
    }

    render() {
        const renderEditButton = () => {
            if (!this.props.isInHeaderEditMode) {
                return  <button 
                            className="text-xs text-transparent hover:text-white" 
                            onClick={() => this.props.onHeaderEdit(true) }>
                            <IconPencil/>
                        </button>
            }
        }

        const renderInputOrMarkdown = () => {
            if (!this.props.isInHeaderEditMode) {
                return <span className="font-bold text-3xl text-white" onClick={() => this.props.onHeaderEdit(true)}>{this.state.header}</span>
            } else {
                return <form onSubmit={e => this.props.onHeaderChanged(e)}>
                            <input
                                type="hidden"
                                id={input_header_id}
                                name={input_header_name}
                                value={this.props.id}/>
                            <Input
                                type="text"
                                id={input_header_name}
                                name={input_header_name}
                                value={this.state.header}
                                onChange={e => this.onInputChanged(e)}/>
                            <input
                                className="hidden"
                                type="submit"
                                id="input_submit"/>
                        </form>
            }
        }

        return(
            <div className="p-1">
                { renderInputOrMarkdown() }
                { renderEditButton() }
            </div>
        );
    }

    onInputChanged = event => {
        this.setState({ header: event.target.value });
    }
}

export { Saucepan };