import {ReactElement} from "react";

interface ObjectiveSelection {
  options: string[];
  question: string;
  onSelect: (selection: number) => void;
}

function ObjectiveSelection(props: ObjectiveSelection) {
  const btns: ReactElement[] = [];

  for(let i = 0; i < props.options.length; i++) {
    btns.push(
      <button
        className={
          'text-lottol-800 text-lg ' +
          'hover:bg-lottol-500 transition ' +
          'w-full px-5 py-2 ' +
          'border-2 border-lottol-500 rounded-2xl ' +
          'font-myeongjo'
        }
        onClick={() => props.onSelect(i)}
        key={i}
      >{props.options[i]}</button>
    );
  }

  return (
    <div className={'h-screen flex flex-col gap-5 justify-center items-center relative bg-lottol-200'}>
      <p className={'font-myeongjo text-center text-3xl font-bold text-lottol-700 z-10'}>
        {props.question}
      </p>

      <div className={'flex flex-col gap-4 w-1/2'}>
        {btns}
      </div>
    </div>
  )
}

export default ObjectiveSelection;
