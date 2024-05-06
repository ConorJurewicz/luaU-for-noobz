import React from 'react';
import './Learn.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CopyBlock, dracula, github, googlecode, hybrid, monoBlue, monokai, monokaiSublime, obsidian, solarizedDark, solarizedLight } from 'react-code-blocks';
import execute from '../images/execute.png';


const Learn = () => {
  return (
    <div className="Theme">
      <h1 className="main-header">Strings!!</h1>
      <h2>What even are they? Why should I care? When can I make my game?!!</h2>
      <p>
        <br />
        1. They are very important ways to represent data!<br />
        2. Because you should, and I said so.<br />
        3. Actually, you can start in a couple pages :)
      </p>
        
      <p>
        Look around your room and pick an object. Go on now...
        I chose my water bottle, and it just so happens to be black. <br />
        Take a look at this super fancy cool code. 
      </p>

      <div className="code_block" style={{width:"30%"}}>
        <CopyBlock
          text={`very super dooper fancy code
"black"`}
          language={"lua"}
          showLineNumbers={true}
          theme={monokaiSublime}
          />
      </div>
      <p>
        It's a string! <br /> <br />Now what color is your object? Go to your compiler
        and type in what color your object is surrounded by with these little things ".
        These little things ", are called double qoutes.<br />
      </p>

      <p>
        Not even 10 minutes in and you have already written your first line of code. <br />
        You are going to be a pro.
      </p>

      <p>
        Now I want you to execute your code. It's a little button located on the top right of
        where your code is.
      </p>
      <img src={execute} alt="execute" style={{width:"40%"}} />
    </div>
  )
};

export default Learn;