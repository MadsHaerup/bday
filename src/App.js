import Scratch from "./components/Scratch";
import Whitespace from "./components/Whitespace";
import Home from "./pages/Home";
import wullf from './wullf.jpg';
import creative from './components/creative.svg';
import space2 from './space2.jpg';
import present from './present.svg';
import present2 from './present2.svg';
import tivoli from './tivoli.jpg';
import horse from './horse.jpg';
import scarpetta from './scarpetta.jpg';
import moneytree from './moneytree.svg';
import dinner from './dinner.svg';

function App() {
  return (
  <>
  <Home/>
  <Scratch  title="Where are we going, to eat Brunch?" text="At Wulff & Konstali!" img={wullf} />
  <Whitespace img={creative} title="I guess we should also do something creative?" />
  <Scratch  title="Where should we go to be creative?" text="Creative Space" img={space2} />
  <Whitespace img={present} title="Don't you think it's time for a present?" />
  <Scratch img={tivoli} title="Ready for a present?" text="Tivoli Silver Card"/>
  <Whitespace img={present2} title="Okay OKay OKay... Not so impressive? I have another one for you 💖" />
  <Scratch img={horse} title="You Know what to do" text="Horse Riding and whale Wathcing in Iceland!"/>
  <Whitespace img={dinner} title="That's all great, isn't it? But where should we have dinner?" />
  <Scratch title="Well here we go again!" img={scarpetta} text="Scarpetta! Just for the burrata!" />
  <Whitespace img={moneytree} title="Okay.. I'm starting to run out of cash! Quick water the moneytree" text="uuhj! that was close.." />
  <Scratch title="One more present for you! Drum rolls please...." text="HA ! Got you!........ No look in your drawer 💝" />
  
  </>
  );
}

export default App;
