import React, { useEffect } from 'react';
import '../../styles.css';
import { useState } from 'react';


const PanelHeader = (props) => {
    const [mouseDown,setMouseDown] = useState(false);
    const onDrag = props.onDrag;
    useEffect(()=>{
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup',handleMouseUp);
        return() =>{
            window.addEventListener('mouseup',handleMouseUp);
        }
    },[]);

    useEffect(()=>{
        const handleMouseMove = (e) => {
            onDrag(e.movementX,e.movementY)
        };

        if(mouseDown){
            window.addEventListener('mousemove',handleMouseMove);
        }
 
        return() =>{
            window.removeEventListener('mousemove',handleMouseMove);
        };
    },[mouseDown,onDrag]);

    const handleMouseDown = () =>setMouseDown(true);

    return (
        <div className = "panel__header" onMouseDown={handleMouseDown}>
            {props.header}
        </div>
    );
}

export default PanelHeader;