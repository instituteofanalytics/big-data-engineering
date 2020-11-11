import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Disease Risk Prediction using Spark</h1>
        <div>
        <ul className="nav nav-tabs" role="tablist">
          <li><a href="#jquerytab" role="tab" data-toggle="tab">Stroke</a></li>
        </ul>

        {/* Stoke Tab Pane */}
        <div className="tab-content">

            <div className="tab-pane" id="jquerytab">
          <img src="stroke.jpg" alt="Stroke" height="25%" width="25%" ></img>
            <p>Important factors affecting stroke occurance are </p>
              <p>diabetes, heart disease, hypertension and smoking history of a patient.</p>
          <form method="post" className="form1" id="stroke">
 
              <div className="group">
                <input type="text" name="BMI"/><span className="highlight" /><span className="bar" />
                <label>BMI</label>
              </div>

              <div className="group">
                <input type="text" id="age" name="age"/><span className="highlight" /><span className="bar" />
                <label>Age</label>
              </div>

              <div className="group">
              <select name="diabetes" defaultValue={'DEFAULT'} >
               <option value="DEFAULT" disabled  hidden>Diabetes</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
              </select>
              <label>Diabetes</label>
              </div>

              <div className="group">
              <select name="gender" defaultValue={'DEFAULT'} >
              <option value="DEFAULT" disabled  hidden>Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
              <label>Gender</label>
              </div>

              <div className="group">
              <select name="heart disease" defaultValue={'DEFAULT'} >
               <option value="DEFAULT" disabled  hidden>Heart Disease</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
              </select>
              <label>Heart Disease</label>
              </div>

              <div className="group">
              <select name="hypertension" defaultValue={'DEFAULT'} >
               <option value="DEFAULT" disabled  hidden>Hypertension</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
              </select>
              <label>Hypertension</label>
              </div>

              <div className="group">
                <select name="smoking history" defaultValue={'DEFAULT'} >
                <option value="DEFAULT" disabled  hidden>Smoking History</option>
                  <option value="0">Never</option>
                  <option value="0.25">ever</option>
                  <option value="1.0">current</option>
                  <option value="0.5">former</option>
                  <option value="0.75">not current</option>
                </select>
                <label>Smoking History</label>
              </div>

              <button type="button" id="submitbtn" className="button buttonBlue">Predict
                <div className="ripples buttonRipples"><span className="ripplesCircle" /></div>
              </button>

              <h2 id="head-stroke" style={{opacity:0}}>Result:</h2>
              <p id='message-stroke1'></p>
                <p id='message-stroke2'></p>
                <p id='message-stroke3'></p>
</form>
          
          
          </div>

        </div>
        
      </div>

      </div>
    );
  }
}

export default App;
