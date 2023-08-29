import React, { useRef, useState,useEffect } from 'react';
import "./styles.css"
import Panel from "./components/Panel";
import './App.css';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
        {/* Route for the login page */}
        <Route path="/*" element={<AppComponent1 />} />

        {/* Route for the main App component */}
        <Route path="/AppComponent2/*" element={<AppComponent2 />} />
      </Routes>
    </Router>
  );
}

function AppComponent1(){

    const navigate = useNavigate();

      const formRef = useRef(null);
  const [productsInCartCount, setProductsInCartCount] = useState(0);
const [pdfName, setpdfName] = useState('');

//         useEffect(() => {
//     window.dispatchEvent(window.addToCartEvent);
//   }, [pdfName]);
  const handleSubmit = (e) => {
    
    const a = productsInCartCount;
    let formData = formRef.current;
    
    

    const dataObject = {
      "username": window.username,
      "student_name" : formData.student_name.value,
      "text" : formData.sample_text.value,
      "dropdown1": formData.dropdown1.value,
      "dropdown2": formData.dropdown2.value,
      "dropdown3": formData.dropdown3.value,
      "dropdown4": formData.dropdown4.value,
      "dropdown5": formData.dropdown5.value,
      "dropdown6": formData.dropdown6.value,
      "dropdown7": formData.dropdown7.value,
    };
    e.preventDefault();

    fetch('http://localhost:5000/post/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObject),
    })
      .then((response) => {
        if (response.ok) {
          
        return response.json();

        } else {
          console.error('Form submission failed.');
        }
      })
    .then((data) => {
    navigate('/AppComponent2');
    console.log("pdfName");
    setpdfName(data.message);
    let sampleData = data.message;
    window.addToCartEvent = new CustomEvent('ADD_TO_CART', { detail: { name: sampleData} });
    window.dispatchEvent(window.addToCartEvent);
    
    })
      .catch((error) => {
        console.error('Error occurred while submitting the form:', error);
      });
  };
return(
<div className="panel_all_content">
    <form ref = {formRef} onSubmit={(e) => handleSubmit(e)}>
        <div className="container">
            <div className="left-content">
                <div className="font-class">
                    Description: Mention if the research was part of larger body of work like a group of continuation of
                    research or sample content sample content
                </div>
            </div>
            <div className="right-content">
                <input id="student_name" type="text" className="text-box" placeholder="Enter text here" />
                <select id="dropdown1" className="dropdown">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
        <div className="container">
            <div className="words">
                <div className="font-class" style={{ fontSize: '20px' }}>
                    <p>
                        <span>General Comments and desciption</span>
                    </p>
                </div>

                <div className="font-class" style={{ fontSize: '12px' }}>
                    <p><span>Do not enter any marks in this section </span></p>
                </div>
            </div>
        </div>
        <div className="container">

            <div className="left-content">
                <div className="font-class">
                    Description: Mention if the research was part of larger body of work like a group of continuation of
                    research or sample content sample content
                </div>
            </div>
            <div className="right-content">
                <input id = "sample_text"  type="text" className="text-box" placeholder="Enter text here" />
                <select id="dropdown2" className="dropdown">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <select id="dropdown3" className="dropdown">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
        <div className="container2">

            <div className="left-content2">
                <div className="description">
                    <div className="font-class">
                        Description: Mention if the research was part of larger body of work like a group of
                        continuation of research or sample content sample content
                    </div>
                </div>
                <div className="description">
                    <div className="font-class">
                        Description: Mention if the research was part of larger body of work like a group of
                        continuation of research or sample content sample content
                    </div>
                </div>
                <div className="description">
                    <div className="font-class">
                        Description: Mention if the research was part of larger body of work like a group of
                        continuation of research or sample content sample content
                    </div>
                </div>
            </div>
            <div className="right-content2">
                <input type="text" className="text-box2" placeholder="Enter text here" />
                <select id="dropdown4" className="dropdown2">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <select id="dropdown5" className="dropdown2">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
        <div className="container2">

            <div className="left-content2">
                <div className="description">
                    <div className="font-class">
                        Description: Mention if the research was part of larger body of work like a group of
                        continuation of research or sample content sample content
                    </div>
                </div>
                <div className="description">
                    <div className="font-class">
                        Description: Mention if the research was part of larger body of work like a group of
                        continuation of research or sample content sample content
                    </div>
                </div>
                <div className="description">
                    <div className="font-class">
                        Description: Mention if the research was part of larger body of work like a group of
                        continuation of research or sample content sample content
                    </div>
                </div>
            </div>
            <div className="right-content2">
                <input type="text" className="text-box2" placeholder="Enter text here" />
                <select id="dropdown6" className="dropdown2">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
                <select id="dropdown7" className="dropdown2">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
        <button type="submit">Submit</button>
    </form>
</div>
);
}

function AppComponent2(){
    return(
<div className="panel_all_content">
    Form Submitted
</div>
    );
};
export default App;