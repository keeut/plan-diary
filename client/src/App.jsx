import React from 'react';
import MonthPlanProvider from './providers/MonthPlanProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home/home';
import Plan from './component/plan/plan';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NavBar from './component/navBar/navBar';
import DayPlanProvider from './providers/DayPlanProvider';

function App({planservice}) {
  return (
    <MonthPlanProvider>
    <DayPlanProvider planservice={planservice}>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/plan' element = {<Plan/>}/>
      </Routes>
      </BrowserRouter>
    </DndProvider>
    </DayPlanProvider>
    </MonthPlanProvider>
  );
}

export default App;