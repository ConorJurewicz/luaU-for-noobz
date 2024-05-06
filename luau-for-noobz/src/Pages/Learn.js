import React from 'react';
import './Learn.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CopyBlock, dracula, github, googlecode, hybrid, monoBlue, monokai, monokaiSublime, obsidian, solarizedDark, solarizedLight } from 'react-code-blocks';




const Learn = () => {
  return (
    <div className="Theme">
      <h1 className="main-header">Strings!!</h1>
      <h1>What even are they? Why should I care? When can I make my game?!!</h1>
      <p className="text">
        All good questions<br />
        1. They are very important ways to represent data!<br />
        2. Because you should, and I said so.<br />
        3. Actually, you can start in a couple pages :)
      </p>

      <div className="code_block">
        <CopyBlock
          text={`print("Hello, World!")
print("This is a test.")`}
          language={"lua"}
          showLineNumbers={true}
          theme={monokaiSublime}
          />
      </div>
    </div>
  )
};

export default Learn;