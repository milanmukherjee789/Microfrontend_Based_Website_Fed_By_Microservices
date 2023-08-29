import React from 'react';
import usePortal from "react-useportal";
import Panel from './Panel';

const PanelPortal = (props) => {


    return (
        // <Portal>
            <Panel{...props} />
        // </Portal>
    )
}
export default PanelPortal;