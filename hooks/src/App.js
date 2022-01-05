
import './App.css';
import React from 'react'
import ComponentA from './Components/UseContext/ComponentA';
import DataFetching from './Components/UseEffect/DataFetching';
import DataFetching2 from './Components/UseEffect/DataFetching2';
import IntervalHookCounter from './Components/UseEffect/IntervalHookCounter';
import UseEffectConditionly from './Components/UseEffect/UseEffectConditionly';
import UseEffectEg from './Components/UseEffect/UseEffectEg';
import UseEffectRunOnlyOnce from './Components/UseEffect/UseEffectRunOnlyOnce';
import ClassCount from './Components/UseState/ClassCount';
import HookCounter from './Components/UseState/HookCounter';
import HookCounter2 from './Components/UseState/HookCounter2';
import HookWithArray from './Components/UseState/HookWithArray';
import HookWithObj from './Components/UseState/HookWithObj';
import ParentComponent from './Components/UseCallBack/ParentComponent';
import UseMemoExample from './Components/UseMemo/UseMemoExample';

export const UserContext1 = React.createContext()
export const UserContext2 = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCount></ClassCount>
      <HookCounter></HookCounter>
      <HookCounter2></HookCounter2>
      <HookWithObj></HookWithObj>
      <HookWithArray></HookWithArray>
      <UseEffectEg></UseEffectEg>
      <UseEffectConditionly></UseEffectConditionly>
      <UseEffectRunOnlyOnce></UseEffectRunOnlyOnce>
      <IntervalHookCounter></IntervalHookCounter> */}
      {/* <DataFetching></DataFetching> */}
     
      {/* <DataFetching2></DataFetching2>

      <UserContext1.Provider value={"Shubham"}>
      <UserContext2.Provider value={"Raut"}>
          <ComponentA></ComponentA>
      </UserContext2.Provider>
      </UserContext1.Provider> */}


      <ParentComponent></ParentComponent>
      <UseMemoExample></UseMemoExample>
    </div>
  );
}

export default App;

