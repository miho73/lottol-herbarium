import {BushAndFlowers} from "../assets/svgs";
import {useEffect, useState} from "react";

function shuffle(array: any[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function Result(props: {wt: number[], reset: () => void}) {
  const [mostFit, setMostFit] = useState<string>('');
  const [mostFitPath, setMostFitPath] = useState<string>('');
  const [cardFliped, setCardFlip] = useState<boolean>(false);

  useEffect(() => {
    const flowers = [
      {name: '안개꽃', wt: props.wt[0], path: '안개꽃.jpg'},
      {name: '천일홍', wt: props.wt[1], path: '천일홍.jpg'},
      {name: '장미', wt: props.wt[2], path: '장미.jpg'},
      {name: '폼폰국화', wt: props.wt[3], path: '폼폰국화.jpg'},
      {name: '수국', wt: props.wt[4], path: '수국.png'},
      {name: '플로렌티나', wt: props.wt[5], path: '플로렌티나.png'}
    ];

    shuffle(flowers);
    flowers.sort((a, b) => b.wt - a.wt);
    setMostFit(flowers[0].name);
    setMostFitPath(flowers[0].path);
  }, []);

  let card = null;
  switch (mostFit) {
    case '안개꽃':
      card = (
        <img src={'./src/assets/imgs/cards/003.png'}/>
      );
      break;
    case '천일홍':
      card = (
        <img src={'./src/assets/imgs/cards/005.png'}/>
      );
      break;
    case '장미':
      card = (
        <img src={'./src/assets/imgs/cards/002.png'}/>
      );
      break;
    case '폼폰국화':
      card = (
        <img src={'./src/assets/imgs/cards/001.png'}/>
      );
      break;
    case '수국':
      card = (
        <img src={'./src/assets/imgs/cards/004.png'}/>
      );
      break;
    case '플로렌티나':
      card = (
        <img src={'./src/assets/imgs/cards/006.png'}/>
      );
      break;
  }

  return (
    <div
      className={
        'grid grid-rows-[200px_1fr_200px] ' +
        'w-screen h-screen overflow-clip ' +
        'transition duration-1000'
      }
    >
      <header className={'text-center font-kings flex flex-col gap-2 justify-center items-center'}>
        <p className={'text-7xl text-lottol-600'} onClick={props.reset}>HERBARIUM</p>
        <p className={'text-lottol-600'}>LOvers To Think Of Life</p>
      </header>
      <main className={'flex flex-col justify-evenly items-center h-full'}>
        <div className={'flip-card'} onClick={() => setCardFlip(!cardFliped)}>
          <div className={'flip-card-inner' + (cardFliped ? ' flipped' : '')}>
            <div className={'shadow-xl flip-card-front'}>
              {card}
            </div>
            <div className={'shadow-xl flip-card-back'}>
              <img
                src={'./src/assets/imgs/flowers/' + mostFitPath}
                className={'h-full aspect-auto'}
              />
            </div>
          </div>
        </div>
      </main>

      <div className={'flex items-end w-screen fill-lottol-500 relative mb-[-20px] text-lg'}>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-150'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-125'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-150'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-125'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-150'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-125'}/>
        <div className={'absolute bg-lottol-500 w-screen h-10 left-0 bottom-5'}/>
      </div>
    </div>
  );
}

export default Result;
