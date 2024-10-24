import {useState} from "react";

interface TwoSelectionProps {
  optionA: string;
  optionB: string;
  question: string;
  onSelect: (selection: number) => void;
}

function TwoSelection(props: TwoSelectionProps) {
  const [selection, setSelection] = useState<number | null>(null);
  const [fired, setFired] = useState<boolean>(false);

  function changeHover(selection: number | null) {
    if(!fired) setSelection(selection);
  }

  function fireSelection(selection: number) {
    setFired(true);
    setTimeout(() => {
      props.onSelect(selection);
    }, 800);
  }

  return (
    <div
      className={
        'h-screen flex justify-center items-center relative'
      }
    >
      <p className={'font-myeongjo text-center text-3xl font-bold text-lottol-700 z-10'}>
        {selection === 0 && props.optionA}
        {selection === 1 && props.optionB}
        {selection === null && props.question}
      </p>

      <div className={'absolute left-[-10vw] top-[-10vh] w-[120vw] h-[120vh] transform-gpu rotate-[-10deg]'}>
        <button
          onMouseOver={() => changeHover(0)}
          onMouseOut={() => changeHover(null)}
          onClick={() => fireSelection(0)}
          className={
            'bg-lottol-400 opacity-30 ' +
            'transform-gpu origin-left duration-300 transition ' +
            'w-1/2 h-full ' +
            'absolute left-0 top-0 ' +
            'shadow-2xl shadow-lottol-400 ' +
            'text-lottol-800 text-3xl font-myeongjo' +
            (selection === 0 ? ' opacity-40 scale-x-110' : '') +
            (selection === 1 ? ' scale-x-90' : '') +
            ((fired && selection === 1) ? ' !opacity-0' : '') +
            ((fired && selection === 0) ? ' scale-x-200' : '')
          }
        >
          <span
            className={
              'absolute right-5 top-[30%] ' +
              'text-5xl text-lottol-800 ' +
              'two-selection-label' +
              (fired ? ' opacity-0' : '')
            }
          >
            {props.optionA}
          </span>
        </button>
        <button
          onMouseOver={() => changeHover(1)}
          onMouseOut={() => changeHover(null)}
          onClick={() => fireSelection(1)}
          className={
            'bg-lottol-600 opacity-30 ' +
            'transform-gpu origin-right duration-300 transition ' +
            'w-1/2 h-full ' +
            'absolute right-0 top-0 ' +
            'shadow-2xl shadow-lottol-600 ' +
            'text-lottol-800 text-3xl font-myeongjo' +
            (selection === 1 ? ' opacity-40 scale-x-110' : '') +
            (selection === 0 ? ' scale-x-90' : '') +
            ((fired && selection === 0) ? ' !opacity-0' : '') +
            ((fired && selection === 1) ? ' scale-x-200' : '')
          }
        >
          <span
            className={
              'absolute left-5 bottom-[30%] ' +
              'text-5xl text-lottol-800 ' +
              'two-selection-label' +
              (fired ? ' opacity-0' : '')
            }
          >
            {props.optionB}
          </span>
        </button>
      </div>
    </div>
  );
}

export default TwoSelection;
