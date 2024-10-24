import {ReactElement, useEffect, useState} from "react";
import TwoSelection from "./selects/TwoSelection.tsx";
import {ColorBall, MultipleChoice} from "./selects/MultipleChoice.tsx";
import ObjectiveSelection from "./selects/ObjectiveSelection.tsx";
import {ImageOption} from "./selects/Options.tsx";

function Trials(props: {finish: (wt: number[]) => void}) {
  const [trials, setTrials] = useState<number>(0);
  const [wt, setWt] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [begin, setBegin] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setBegin(true);
    }, 10);
  }, []);

  const wtMatrix: number[][][] = [
    [
      [3, 1, 3, 3, 1, 5],
      [3, 1, 3, 3, 5, 1]
    ],
    [
      [0, 5, 0, 0, 0, 5],
      [5, 0, 0, 0, 0, 0],
      [0, 0, 5, 5, 5, 0]
    ],
    [
      [0, 5, 0, 0, 0, 3],
      [3, 0, 5, 5, 5, 3],
      [2, 0, 0, 0, 0, 0],
      [2, 0, 0, 4, 0, 0]
    ],
    [
      [0, 0, 3, 0, 0, 0],
      [4, 3, 3, 0, 2, 0],
      [2, 3, 0, 5, 3, 0],
      [0, 0, 0, 0, 0, 5]
    ],
    [
      [0, 0, 5, 0, 0, 0],
      [5, 0, 0, 0, 0, 0],
      [0, 0, 0, 5, 0, 0],
      [0, 0, 0, 0, 5, 0],
      [0, 5, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 5]
    ],
    [
      [0, 5, 5, 5, 5, 5],
      [5, 0, 0, 0, 0, 0],
    ],
    [
      [5, 0, 0, 0, 5, 5],
      [0, 0, 5, 0, 0, 0],
      [0, 5, 0, 0, 0, 0],
    ],
    [
      [0, 5, 0, 0, 0, 0],
      [5, 0, 5, 5, 5, 5]
    ]
  ]

  function nextTrial(selection: number) {
    if(trials === 7) {
      props.finish(wt);
    }
    else {
      let newWt = wt;
      for(let i = 0; i < 6; i++) {
        newWt[i] += wtMatrix[trials][selection][i];
      }
      setWt(newWt);
      setTrials(trials + 1);
    }
  }

  let trial: ReactElement = <p>Loading</p>;
  switch (trials) {
    case 0:
      trial = (
        <TwoSelection
          question={'줄기는 단단한가요 부드러운가요?'}
          optionA={'단단함'}
          optionB={'부드러움'}
          onSelect={nextTrial}
        />
      );
      break;
    case 1:
      trial = (
        <MultipleChoice
          question={'꽃잎은 어떤 색인가요?'}
          options={[
            <ColorBall color={'#F93822'}/>,
            <ColorBall color={'#FFFFFF'}/>,
            <ColorBall color={'conic-gradient(from 0deg, #FFDEE9, #FFEDBC 20%, #C9FFBF 40%, #B5FFFC 60%, #F3C5FF 80%, #FFDEE9 100%)'}/>
          ]}
          onSelect={nextTrial}
        />
      );
      break;
    case 2:
      trial = (
        <ObjectiveSelection
          options={['달걀형', '타원형', '긴 선형', '넓직한 선형']}
          question={'잎은 어떤 모양인가요?'}
          onSelect={nextTrial}
        />
      );
      break;
    case 3:
      trial = (
        <MultipleChoice
          question={'사계절 중 언제 피어나나요?'}
          options={[
            <ImageOption path={'./src/assets/imgs/fourseasons_neon/spring.png'}/>,
            <ImageOption path={'./src/assets/imgs/fourseasons_neon/summer.png'}/>,
            <ImageOption path={'./src/assets/imgs/fourseasons_neon/fall.png'}/>,
            <ImageOption path={'./src/assets/imgs/fourseasons_neon/winter.png'}/>
          ]}
          onSelect={nextTrial}
        />
      );
      break;
    case 4:
      trial = (
        <ObjectiveSelection
          options={[
            '아름다움, 기쁨, 불타는 사랑',
            '깨끗하고 맑은 마음, 사랑의 성공',
            '진실, 행복, 즐거움',
            '변덕과 변심에 가려진 진실된 마음',
            '변치 않는 사랑과 영원한 기억',
            '진정한 사랑과 우정']
          }
          question={'꽃은 무엇을 상징하나요?'}
          onSelect={nextTrial}
        />
      );
      break;
    case 5:
      trial = (
        <TwoSelection
          optionA={'그물맥'}
          optionB={'나란히맥'}
          question={'잎맥은 어느 모양인가요?'}
          onSelect={nextTrial}
        />
      );
      break;
    case 6:
      trial = (
        <MultipleChoice
          question={'꽃은 어디에 사나요?'}
          options={[
            <p className={'text-lottol-800 text-3xl font-myeongjo'}>온대</p>,
            <p className={'text-lottol-800 text-3xl font-myeongjo'}>아열대</p>,
            <p className={'text-lottol-800 text-3xl font-myeongjo'}>열대</p>,
          ]}
          onSelect={nextTrial}
        />
      );
      break;
    case 7:
      trial = (
        <TwoSelection
          optionA={'한해'}
          optionB={'여러해'}
          question={'꽃은 얼마나 오래 사나요?'}
          onSelect={nextTrial}
        />
      );
      break;
  }

  return (
    <div className={'transition duration-500 ' + (begin ? 'opacity-100' : 'opacity-0')}>
      {trial}
    </div>
  );
}

export default Trials;
