import '../App.scss'
import Index from "./index.tsx";
import Trials from "./Trials.tsx";
import Result from "./Result.tsx";
import {useState} from "react";

function App() {
  const [fade, setFade] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [wt, setWt] = useState<number[]>([0, 0, 0, 0, 0, 0]);

  function startTrials() {
    setFade(true);

    setTimeout(() => setStart(true), 1000);
  }

  function finishTrials(wt: number[]) {
    setWt(wt);
    setFinished(true);
  }

  function reset() {
    setFade(false);
    setStart(false);
    setFinished(false);
    setWt([0, 0, 0, 0, 0, 0]);
  }

  if(!start) return <Index start={startTrials} fade={fade}/>
  else if(start && !finished) return <Trials finish={finishTrials}/>
  else if(finished) return <Result wt={wt} reset={reset}/>
}

export default App
