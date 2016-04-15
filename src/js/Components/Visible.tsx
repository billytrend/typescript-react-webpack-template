import * as React from 'react';
import { connect } from 'react-redux'
import {ItemProps} from "./Container";

export class ItemPresentation extends React.Component<ItemProps, any> {

    constructor(props: ItemProps) {
        super(props);
    }

    render() {
        return (<div>
            <button onClick={ this.props.clicker }>Update</button>
            <div>Some text: { this.props.content }</div>
        </div>)
    }
}