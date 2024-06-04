// hw 8-5
import logo from './logo.svg';
import './App.css';
import {Counter} from './Counter';
import {Counter2} from './Counter2';
import {MyText2} from './MyText2';

function App(){
  return(
    <div className='App'>
      <Counter/>
      <br/><br/>
      <Counter2/>
      <MyText2/>
    </div>
  );
}

export default App;

// // hw 8-4
// import './App.css';
// import React , {useState} from 'react';
// import {useMemo} from 'react';

// function Mycomponent(){
//   const [state , setState] = useState(0);
//   const [state2 , setState2] = useState(0);
//   const memoizedValue = useMemo(() => {
//     return Math.random();
//   },[state]);

//   return (<>
//   {console.log("rendering")}
//   <h1>Value = {memoizedValue}</h1>
//   <button onClick={() => {setState(state +1)}}>Change state</button>
//   <button onClick={() => {setState2(state2 +1)}}>Change state</button>
//   </>);
// }

// function App(){
//   return(
//     <div className='App'>
//       <Mycomponent />
//     </div>
//   );
// }

// export default App;



// // hw 8-3
// import './App.css';
// import React, {useState} from 'react';
// import {useMemo} from 'react';

// function MyComponent(){
//   const [state , setState] = useState(0);
//   const memoizedValue = useMemo(() => {
//     return Math.random();
//   },[]);
//   // 當useMemo後面有加 ,[]  => 隨機產生的值將被儲存
//   // 當useMemo後面"沒有"加 ,[]  => 每一次都將會重新計算 產生新的值

//   return(<>
//   {console.log("rendering")}
//   <h1>Value = {memoizedValue}</h1>
//   <button onClick={() => {setState(state+1)}}>Change state</button>
//   </>);
// }

// function App(){
//   return(
//     <div className='App'>
//       <MyComponent/>
//     </div>
//   );
// }

// export default App;



// // hw 8-2
// import './App.css';
// import React, {useState} from 'react';
// import {useEffect} from 'react';

// function MyComponent(){
//   console.log('creating function component');

//   const [count1 , setCount1] = useState(0);
//   const [count2 , setCount2] = useState(0);
//   const [count3 , setCount3] = useState(0);

//   useEffect(() =>{
//     console.log('useEffect1 and useEffect3 excuted')
//   } , [count1 , count3]);

//   useEffect(() =>{
//     console.log('useEffect1 excuted')
//   } , [count1]);

//   useEffect(() =>{
//     console.log('useEffect2 excuted')
//   } , [count2]);

//   useEffect(() =>{
//     console.log('useEffect3 excuted')
//   } , [count3]);
  

//   const addCount = (() => {
//     console.log("button1 be clicked.");
//     setCount1(count1 +1);
//   });

//   const addCount2 = (() => {
//     console.log("button2 be clicked.");
//     setCount2(count2 +1);
//   });

//   const addCount3 = (() => {
//     console.log("button3 be clicked.");
//     setCount3(count3 +1);
//   });

//   return (
//     <>
//       {console.log('rendering')}
//       <h1>count1: {count1}</h1>
//       <h1>count2: {count2}</h1>
//       <h1>count3: {count3}</h1>
//       <button onClick={addCount}>addCount1</button>
//       <button onClick={addCount2}>addCount2</button>
//       <button onClick={addCount3}>addCount3</button>
//     </>
//   );
// }

// function App(){
//   return (
//     <div className='App'>
//       <MyComponent />
//     </div>
//   );
// }

// export default App;




// // hw 8-1

// import './App.css';

// import React, { createContext , useState ,useContext}  from 'react';
// import { MyText } from './myText';

// export const AppContext = createContext();
// export const ColorContext = createContext();
// export const CountContext = createContext();

// function App(){
//   let name1 = "YW";
//   let name2 = "Liao";
//   const [username , setUsername] = useState(name1);
//   const [color , setColor] = useState("red");
//   const [count , setCount] = useState(0);

//   const addCount = (() =>{
//     setCount(count +1);
//   });

//   return(
//     <div className='App'>
//       <ColorContext.Provider value={color}>
//         <AppContext.Provider value={username}>
//           <CountContext.Provider value={count}>
//             <MyText />
//           </CountContext.Provider>
//         </AppContext.Provider>
//       </ColorContext.Provider>
//       <button onClick={e => {setUsername(name1); setColor("blue"); addCount()}}>Liao</button>
//       <button onClick={e => {setUsername(name2); setColor("Green"); addCount()}}>YW</button>
//     </div>
//   );
// }
// export default App;


