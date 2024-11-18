import { Icon } from "@rneui/base";
import React from "react";
import { TouchableHighlight, StyleSheet } from "react-native";

const VisibilityBtn = ({ visible, toggleVisibility }) => {
    return (
        <TouchableHighlight onPress={toggleVisibility}>
            <Icon name={visible ? 'visibility' : 'visibility-off'} size={20} color='#FFFFFF' />
        </TouchableHighlight>
    );
};

export default VisibilityBtn;