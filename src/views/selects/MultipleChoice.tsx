import {ReactElement, useState} from "react";
import {Left, Right} from "../../assets/svgs";

interface MultipleChoiceProps {
  question: string;
  options: string[] | ReactElement[];
  onSelect: (selection: number) => void;
}

function MultipleChoice(props: MultipleChoiceProps) {
  const [selection, setSelection] = useState<number>(0);
  const [transition, setTransition] = useState<number>(0);
  const [fireTransition, setFireTransition] = useState<boolean>(false);
  const [tTo, settTo] = useState<number>(0);
  const cnt = props.options.length;

  function nextSelection() {
    if(selection + 1 < cnt) {
      settTo(selection + 1);
      setTransition(1);

      setTimeout(() => {
        setFireTransition(true);
      }, 10);
      setTimeout(() => {
        setTransition(0);
        setFireTransition(false);
        setSelection(selection + 1);
      }, 500);
    }
  }
  function prevSelection() {
    if(selection - 1 >= 0) {
      settTo(selection -1);
      setTransition(2);

      setTimeout(() => {
        setFireTransition(true);
      }, 10);
      setTimeout(() => {
        setTransition(0);
        setFireTransition(false);
        setSelection(selection - 1);
      }, 500);
    }
  }

  return (
    <div className={'h-screen flex flex-col justify-center items-center gap-5 relative bg-lottol-200'}>
      <p className={'font-myeongjo text-center text-3xl font-bold text-lottol-700 z-10'}>{props.question}</p>

      <div className={'flex gap-4'}>
        <button
          className={
            'text-5xl text-lottol-700 px-3 ' +
            'transition duration-150' +
            (selection === 0 ? ' opacity-0' : '')
          }
          onClick={() => prevSelection()}
          disabled={transition !== 0}
        >
          <Left className={'w-14 h-14 fill-lottol-700'}/>
        </button>

        <div className={'w-40 h-40 relative'}>
          { transition !== 0 &&
            <>
              <button
                className={
                  'transition ease-out duration-500 transform-gpu ' +
                  'absolute top-0 left-0 w-full h-full' +
                  (transition === 1 && !fireTransition ? ' translate-x-20 opacity-0' : '') +
                  (transition === 2 && !fireTransition ? ' -translate-x-20 opacity-0' : '')
                }
              >
                {props.options[tTo]}
              </button>
              <button
                className={
                  'transition ease-out duration-500 transform-gpu ' +
                  'absolute top-0 left-0 w-full h-full' +
                  (transition === 1 ? ' -translate-x-20 opacity-0' : '') +
                  (transition === 2 ? ' translate-x-20 opacity-0' : '')
                }
              >
                {props.options[selection]}
              </button>
            </>
          }
          {transition === 0 &&
            <button
              onClick={() => props.onSelect(selection)}
              className={
                'transition ease-out duration-500 transform-gpu ' +
                'absolute top-0 left-0 w-full h-full'
              }
            >
              {props.options[selection]}
            </button>
          }
        </div>

        <button
          className={
            'text-5xl text-lottol-700 px-3 ' +
            'transition duration-150' +
            (selection + 1 === cnt ? ' opacity-0' : '')
          }
          disabled={transition !== 0}
          onClick={() => nextSelection()}
        >
          <Right className={'w-14 h-14 fill-lottol-700'}/>
        </button>
      </div>
    </div>
  )
}

function ColorBall(props: {
  color: string
}) {
  return (
    <div
      className={'w-40 h-40 rounded-full'}
      style={{
        background: props.color
      }}
    />
  )
}

export {
  MultipleChoice,
  ColorBall
}
