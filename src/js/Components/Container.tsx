import * as React from 'react';
import { connect } from 'react-redux'
import {ItemPresentation} from "./Visible";
import {egAction} from "../actions/action";
import {MapStateToProps, MapDispatchToPropsFunction} from "react-redux";

export interface ItemProps {
    content?: string;
    clicker?: (e: Event) => void;
}

const mapStateToProps: MapStateToProps<any, ItemProps> = function(state, ownProps): ItemProps {
    return {
        content: state.example.content
    }
};

const mapDispatchToProps: MapDispatchToPropsFunction<any, ItemProps> = (dispatch, ownProps) => {
    return {
        clicker: () => {
            dispatch(egAction(ownProps.content))
        }
    }
};

const ItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemPresentation);

export default ItemContainer;