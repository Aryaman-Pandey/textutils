import React from 'react'

export default function About(props) {
  //const [myStyle,setMyStyle] = useState({
    //color: 'black',
    //backgroundColor: 'white'
  //})
  //const [btnText, setbtnText] = useState("Enable Dark Mode")
  let myStyle = {
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'black':'white'
  }
  return (

    <div className="container" style={{color: props.mode ==='dark'?'white':'black'}} > 
        <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>About TextUtils</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a personal project developed by <strong>Aryaman Pandey</strong>. The main purpose of this app is to develop an Online Text Editor with <strong>Minimal Features</strong> and to provide the users with a Smooth and <strong>Seamless Experience</strong>.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Utility</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            This Web Application provides multiple basic functionalities such as <strong>Coverting to UpperCase, Converting to LowerCase, Clear Text, Remove Extra Spaces and Copy the Text to the Clipboard</strong>. Apart from all these features this application also has a Well-Designed and Engaging <strong>Dark Mode</strong>.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>About Creator</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Hi, This is <strong>Aryaman Pandey</strong>. I'm a Computer Science Graduate. TextUtils is one of my personal projects. The Main aim behind developing this project was to learn React and Web Deployment and to strengthen my JavaScript Coding Skills. Hope you like this project. Feel free to send your suggestions for the improvement of this app.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
