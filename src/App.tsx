import React, { useEffect, useState } from 'react';
import './App.css';
import { Prompt } from './components/Prompt';
import { SwapButton } from './components/SwapButton';

function App(): JSX.Element {
  const [prompt, setPrompt] = useState<string>("Hello and welcome");

  /*useEffect(() => {
    setPrompt("Hello and welcome Actual")
  })*/

  return (
    <div className="App">
      <div>
        <Prompt text={prompt}></Prompt>
        <SwapButton change={setPrompt}></SwapButton>
      </div>
    </div>
  );
}

export default App;
