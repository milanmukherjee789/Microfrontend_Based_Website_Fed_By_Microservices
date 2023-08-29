import React from "react";
import Resizer from './components/Resizer';
import PanelHeader from './components/PanelHeader'
import "./styles.css";
import { useRef } from "react";
import { Direction } from './components/Resizer/Constants';


const Panel = ({children}) => {
    const panelRef = useRef(null);
    
const handleDrag = (movementX,movementY) => {
    const panel = panelRef.current;
    if(!panel) return;

    const {x,y} = panel.getBoundingClientRect();
    panel.style.left = `${parseInt(window.getComputedStyle(panel).left,10) + movementX}px`;
    panel.style.top = `${parseInt(window.getComputedStyle(panel).top,10) + movementY}px`;
    console.log(panel.style.top);
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
  };
    return (
<div className="panel" ref={panelRef}>
  <div className="panel__container" >
    <Resizer onResize={handleResize} />
    <PanelHeader onDrag={handleDrag} />
    <div className = "panel_all_content">
      <div
        contentEditable="true"
        className="panel__content"     
      >
        {children}
      </div>
      <form>
        <div className="container">
          <div class="left-content" >
            <div class = "font-class">
                Description: Mention if the research was part of larger body of work like a group of continuation of research or blah blah blah blah blah
            </div>
          </div>
          <div class="right-content">  
            <input
              type="text"
              class="text-box"
              placeholder="Enter text here"
            />
            <select class="dropdown">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="container">
          <div class = "words">
            <div className = "font-class" style={{ fontSize: '20px' }}>
                <p> 
                  <span >General Comments and desciption</span>        
                </p>
            </div>
            
            <div className = "font-class" style={{ fontSize: '12px' }}>
                <p><span >Do not enter any marks in this section </span></p>
            </div>
          </div>
        </div>
        <div className="container">
          
          <div class="left-content">
            <div class = "font-class">
                Description: Mention if the research was part of larger body of work like a group of continuation of research or blah blah blah blah blah
            </div>
          </div>
          <div class="right-content">  
            <input
              type="text"
              class="text-box"
              placeholder="Enter text here"
            />
            <select class="dropdown">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select class="dropdown">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="container2">
          
          <div class="left-content2">
            <div class="description">
              <div class = "font-class">
                  Description: Mention if the research was part of larger body of work like a group of continuation of research or blah blah blah blah blah
              </div>
            </div>
            <div class="description">
              <div class = "font-class">
                  Description: Mention if the research was part of larger body of work like a group of continuation of research or blah blah blah blah blah
              </div>
            </div>
            <div class="description">
              <div class = "font-class">
                  Description: Mention if the research was part of larger body of work like a group of continuation of research or blah blah blah blah blah
              </div>
            </div>
          </div>
          <div class="right-content2">  
            <input
              type="text"
              class="text-box2"
              placeholder="Enter text here"
            />
            <select class="dropdown2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select class="dropdown2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="container2">
          
          <div class="left-content2">
            <div class="description">
              <div class = "font-class">
                  Description: Mention if the research was part of larger body of work like a group of continuation of research or blah blah blah blah blah
              </div>
            </div>
            <div class="description">
              <div class = "font-class">
                  Description: Mention if the research was part of larger body of work like a group of continuation of research or blah blah blah blah blah
              </div>
            </div>
            <div class="description">
              <div class = "font-class">
                  Description: Mention if the research was part of larger body of work like a group of continuation of research or blah blah blah blah blah
              </div>
            </div>
          </div>
          <div class="right-content2">  
            <input
              type="text"
              class="text-box2"
              placeholder="Enter text here"
            />
            <select class="dropdown2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <select class="dropdown2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  </div>


</div>
    );
};
export default Panel;