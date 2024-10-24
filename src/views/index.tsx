import {BushAndFlowers} from "../assets/svgs";

interface IndexProps {
  start: () => void;
  fade: boolean
}

function Index(props: IndexProps) {
  return (
    <div
      className={
        'grid grid-rows-[200px_1fr_200px] ' +
        'w-screen h-screen overflow-clip ' +
        'transition duration-700' +
        (props.fade ? ' opacity-0' : '')
      }
    >
      <header className={'text-center font-kings flex flex-col gap-2 justify-center items-center'}>
        <p className={'text-7xl text-lottol-600'}>HERBARIUM</p>
        <p className={'text-lottol-600'}>LOvers To Think Of Life</p>
      </header>
      <main className={'flex flex-col justify-evenly items-center h-full'}>
        <button
          className={'overflow-clip w-80 flex justify-center items-center'}
          onClick={props.start}
        >
          <img
            src={'./src/assets/imgs/leaves_tr.png'}
            className={'hover:drop-shadow-lottol transition-all duration-200 ease-out'}
            alt={'start'}
          />
        </button>

        <div className={'w-3/4 text-lottol-800 text-center font-gothic'}>
          <p className={'my-2 desc'}>LOTTOL은 LOver To Think Of Life의 약자로 생명과학을 사랑하고 탐구하기를 좋아하는 사람들이라는 의미를 가진다.</p>
          <p className={'my-2 desc'}>인천과학고가 설립된 후 초창기에 창단된 동아리로, 긴 역사를 자랑하는 생명과학 동아리이다. 동아리는 생명과학에 대한 깊은 이해와 탐구를 통해 학문적 성장을 이루고, 이를 바탕으로 학교 내 생명과학 연구의 수준을 높이는 것을 목표로 하고 있다.</p>
          <p className={'my-2 desc'}>다양한 실험과 연구 활동을 통해 생명과학의 기초부터 응용까지 폭넓게 학습하며, 이를 통해 동아리 구성원들이 생명과학 분야에서 학문적 성취를 이루고, 학교 내 생명과학 교육의 발전에 기여하고자 한다.</p>
          <p className={'my-2 desc'}>또한, 동아리 활동을 통해 지식을 공유하고 협력하여 미래의 생명과학자로서 성장할 수 있는 기회를 마련하는 것을 비전으로 삼고 있다.</p>
        </div>
      </main>

      <div className={'flex items-end w-screen fill-lottol-500 relative mb-[-20px] text-lg'}>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-150'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-125'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-150'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-125'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-150'}/>
        <BushAndFlowers className={'w-80 h-40 mx-[-50px] transform-gpu origin-bottom scale-125'}/>
        <div className={'absolute bg-lottol-500 w-screen h-10 left-0 bottom-5'}></div>
      </div>
    </div>
  );
}

export default Index;
