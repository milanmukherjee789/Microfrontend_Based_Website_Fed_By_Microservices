import React from 'react';
import './styles.css';
import Panel from './components/Panel';
import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';
import { Worker } from '@react-pdf-viewer/core';
import { useState, useEffect, useRef } from 'react';
// import pdfFile from './sample.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdfFile = '/sample.pdf';// 'https://www.africau.edu/images/default/sample.pdf';

function App(props) {
    const [pdfName, setpdfName] = useState('./sample.pdf');
    let studentName = "Ram";
    // setpdfName(pdfFile);
      const showData = (studentName) => { 
      studentName = studentName+".pdf";
      const showDataEvent = new CustomEvent('STUDENT_DATA', { detail: { name: studentName } });
      window.dispatchEvent(showDataEvent);
    }

      const closePanel = (panel) => { 
        if(document.getElementById(panel).style.visibility != 'hidden'){
          document.getElementById(panel).style.visibility = "hidden";
        }
        else{
          document.getElementById(panel).style.visibility = "visible";
        }
      

    }

  return (
    <div className="panel_all_content">
      
      <div className="container">
        <h1>Students</h1>
        <div className= "student_details">
          <div className = "student"  onClick = {() => showData('Stefano')}>
              <p  style={{ textDecoration: 'underline' }}>Stefano</p>
          </div>
          <br></br>
          <div className = "student"  onClick = {() => showData('Jeeva')}>
             <p  style={{ textDecoration: 'underline' }}>Jeeva</p> 
          </div>
          <br></br>
          <div className = "student"  onClick = {() => showData('Jenny')}>
              <p  style={{ textDecoration: 'underline' }}>Jenny</p>
          </div>
          <div className = "close button"onClick = {() => closePanel('second_panel')}>
              <p  style={{ textDecoration: 'underline' }}>Close Submitted Form</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;



// const pdfFile = 'https://researchtorevenue.files.wordpress.com/2015/04/1r41ai10801601_fong.pdf';// 'https://www.africau.edu/images/default/sample.pdf';



// {/* <div className="panel_all_content">
//     <form>
//         <div className="container">
//             <div className="left-content">
//                 <div className="font-class">
//                     Description: Mention if the research was part of larger body of work like a group of continuation of
//                     research or blah blah blah blah blah
//                 </div>
//             </div>
//             <div className="right-content">
//                 <input type="text" className="text-box" placeholder="Enter text here" />
//                 <select className="dropdown">
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                     <option value="option3">Option 3</option>
//                 </select>
//             </div>
//         </div>
//         <div className="container">
//             <div className="words">
//                 <div className="font-class" style={{ fontSize: '20px' }}>
//                     <p>
//                         <span>General Comments and desciption</span>
//                     </p>
//                 </div>

//                 <div className="font-class" style={{ fontSize: '12px' }}>
//                     <p><span>Do not enter any marks in this section </span></p>
//                 </div>
//             </div>
//         </div>
//         <div className="container">

//             <div className="left-content">
//                 <div className="font-class">
//                     Description: Mention if the research was part of larger body of work like a group of continuation of
//                     research or blah blah blah blah blah
//                 </div>
//             </div>
//             <div className="right-content">
//                 <input type="text" className="text-box" placeholder="Enter text here" />
//                 <select className="dropdown">
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                     <option value="option3">Option 3</option>
//                 </select>
//                 <select className="dropdown">
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                     <option value="option3">Option 3</option>
//                 </select>
//             </div>
//         </div>
//         <div className="container2">

//             <div className="left-content2">
//                 <div className="description">
//                     <div className="font-class">
//                         Description: Mention if the research was part of larger body of work like a group of
//                         continuation of research or blah blah blah blah blah
//                     </div>
//                 </div>
//                 <div className="description">
//                     <div className="font-class">
//                         Description: Mention if the research was part of larger body of work like a group of
//                         continuation of research or blah blah blah blah blah
//                     </div>
//                 </div>
//                 <div className="description">
//                     <div className="font-class">
//                         Description: Mention if the research was part of larger body of work like a group of
//                         continuation of research or blah blah blah blah blah
//                     </div>
//                 </div>
//             </div>
//             <div className="right-content2">
//                 <input type="text" className="text-box2" placeholder="Enter text here" />
//                 <select className="dropdown2">
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                     <option value="option3">Option 3</option>
//                 </select>
//                 <select className="dropdown2">
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                     <option value="option3">Option 3</option>
//                 </select>
//             </div>
//         </div>
//         <div className="container2">

//             <div className="left-content2">
//                 <div className="description">
//                     <div className="font-class">
//                         Description: Mention if the research was part of larger body of work like a group of
//                         continuation of research or blah blah blah blah blah
//                     </div>
//                 </div>
//                 <div className="description">
//                     <div className="font-class">
//                         Description: Mention if the research was part of larger body of work like a group of
//                         continuation of research or blah blah blah blah blah
//                     </div>
//                 </div>
//                 <div className="description">
//                     <div className="font-class">
//                         Description: Mention if the research was part of larger body of work like a group of
//                         continuation of research or blah blah blah blah blah
//                     </div>
//                 </div>
//             </div>
//             <div className="right-content2">
//                 <input type="text" className="text-box2" placeholder="Enter text here" />
//                 <select className="dropdown2">
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                     <option value="option3">Option 3</option>
//                 </select>
//                 <select className="dropdown2">
//                     <option value="option1">Option 1</option>
//                     <option value="option2">Option 2</option>
//                     <option value="option3">Option 3</option>
//                 </select>
//             </div>
//         </div>
//         <input type="submit" value="Submit"></input>
//     </form>
// </div> */}
