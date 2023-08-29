import React from "react";
import Resizer from './components/Resizer';
import PanelHeader from './components/PanelHeader'
import "./styles.css";
import { useState, useEffect, useRef } from 'react';

import { Direction } from './components/Resizer/Constants';
import axios from 'axios';


const Panel = (props) => {
    const panelRef = useRef(null);
      const [panelStyle, setPanelStyle] = useState({});
// 
      // window.dispatchEvent(window.addToCartEvent);
    
useEffect(() => {
    fetchData();
  }, []);

const handleDrag = (movementX,movementY) => {
    const panel = panelRef.current;
    if(!panel) return;

    const {x,y} = panel.getBoundingClientRect();
    panel.style.left = `${parseInt(window.getComputedStyle(panel).left,10) + movementX}px`;
    panel.style.top = `${parseInt(window.getComputedStyle(panel).top,10) + movementY}px`;
    console.log(panel.style.top);
    sendDataToServer(panel);
};

const fetchData = async () => {
  try {
    const user_div = props.username + "_" + props.id
    const headers = {
      'User-Div': user_div
    };
    const response = await axios.get('http://localhost:5000/get/style',{headers});
    setPanelStyle(response.data)
  } catch (error) {
    console.error('Error:', error);
    return null; 
  }
};
  
  const sendDataToServer = (panel) => {
    const user_div = props.username + "_" + props.id
    const dataToSend = {'User-Div': user_div,'style':
    
    {top: window.getComputedStyle(panel).top, left: window.getComputedStyle(panel).left, height: window.getComputedStyle(panel).height, width: window.getComputedStyle(panel).width}};
    fetch('http://localhost:5000/post/style', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    })
    .then(response => response.json())
    .then(data => {
      console.log("succesfully sent data")
      // setData(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

const handleResize = (direction,movementX , movementY) => {
    console.log('resize called')
    const panel = panelRef.current;
    if (!panel) return;

    const { width, height, x, y } = panel.getBoundingClientRect();
    
    const resizeTop = () => {
      panel.style.height = `${height - movementY}px`;
      panel.style.top = `${parseInt(window.getComputedStyle(panel).top,10) + movementY}px`;
    };

    const resizeRight = () => {
      panel.style.width = `${width + movementX}px`;
    };

    const resizeBottom = () => {
      panel.style.height = `${height + movementY}px`;
    };

    const resizeLeft = () => {
      panel.style.width = `${width - movementX}px`;
      panel.style.left = `${parseInt(window.getComputedStyle(panel).left,10) + movementX}px`;
    };

    switch (direction) {
      case Direction.TopLeft:
        resizeTop();
        resizeLeft();
        break;

      case Direction.Top:
        resizeTop();
        break;

      case Direction.TopRight:
        resizeTop();
        resizeRight();
        break;

      case Direction.Right:
        resizeRight();
        break;

      case Direction.BottomRight:
        resizeBottom();
        resizeRight();
        break;

      case Direction.Bottom:
        resizeBottom();
        break;

      case Direction.BottomLeft:
        resizeBottom();
        resizeLeft();
        break;

      case Direction.Left:
        resizeLeft();
        break;

      default:
        break;
      }

      sendDataToServer(panel);
  };
    return (
        
        <div className="panel"  id={props.id} ref={panelRef} style = {panelStyle} >
            <div className = "panel__container">
                <Resizer onResize = {handleResize} />
                <PanelHeader onDrag={handleDrag} header = {props.header} />
                <div  className = "panel__content">
                    {props.children}
                </div>
            </div>
        </div>
    );
};
export default Panel;