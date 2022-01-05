import React from 'react';
import './App.css';
import Button from './Components/PropsInTs/Button';
import Container from './Components/PropsInTs/Container';
import Heading from './Components/PropsInTs/Heading';
import Input from './Components/PropsInTs/Input';
import Oscar from './Components/PropsInTs/Oscar';
import Person from './Components/PropsInTs/Person';
import PersonList from './Components/PropsInTs/PersonList';
import PropsEg from './Components/PropsInTs/PropsEg';
import Status from './Components/PropsInTs/Status';
import LogedEg from './Components/States/LogedEg';
import User from './Components/States/User';
import Box from './Components/UseContex/Box';
import TheamContextProvider from './Components/UseContex/TheamContex';
import User1 from './Components/UseContex/User1';
import UserContextProvider from './Components/UseContex/UserContext';
import Private from './Components/ComponenAsProps/Private'
import Profile from './Components/ComponenAsProps/Profile';
import RandomNumber from './Components/RestrictingProps/RandomNumber';
import Login from './Components/ComponenAsProps/Login';

function App() {
  const PersonName ={
    first : 'Bruce',
    last : 'Wayne'
  }

  const nameList = [
    {
      id: 1,
      first:'Bruce',
      last:'Wayne'
    },
    {
      id: 2,
      first:'Clark',
      last:'Kent'
    },
    {
      id: 3,
      first:'Princess',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
      {/* props */}
      <PropsEg name="Vishal" messageCount={10} isLoggedIn={true}></PropsEg>
      <Person names={PersonName}></Person>
      <PersonList name={nameList}></PersonList>
      <Status status='success'></Status>
      <Heading>This is example of Advanced props</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Decpario!</Heading>
      </Oscar>
      <PropsEg name="jhdj" isLoggedIn={false}></PropsEg>
      <Button handleClick={(event) => console.log("Button Clicked",event)}></Button>
      <Input value="" handleChange={(event) => console.log(event)}></Input>
      <Container style={{border:'2px solid black',padding:'1rem',display:'block',backgroundColor:'aqua'}}></Container>
<p>----------------------------------------------------------------------------------------------------------------------------------------</p>
      {/* States */}
      <LogedEg></LogedEg>
      <User></User>

      <TheamContextProvider>
         <Box></Box>
      </TheamContextProvider>

      <UserContextProvider>
        <User1></User1>
      </UserContextProvider>

      <Private Component={Login} isLoggedIn={true}></Private>

      <RandomNumber value={10} isPositive ></RandomNumber>

    </div>


 
  );
}

export default App;
