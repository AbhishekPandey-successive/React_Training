import logo from './logo.svg';
import React,{Suspense,lazy} from 'react'
import './App.css';
import { Greeting ,Button,Counter,TaskList,UserCard,Weather} from './components/Day1'

import { Counter1,CounterWithStep,PersonForm, RandomNumberGenerator, ToDoList1,Clock ,Notifications,TaskList1} from './components/Day2'

import { Parent,Child ,Home,About, Navbar, Page404,Protected, Login, DashBoard, Setting,Profile,User} from './components/Day3';

import { ControlledComponent ,InputFieldComponent, Registration,Form, DropDown,List, SearchFilter, ResponsiveDrawer, ValidationTextFields, MyModalDialog, MyDataTable,Login1,ErrorMessage} from './components/Day4';

import { Application1, Application2, Application3, AxiosErrorHandling, AxiosFetching, AxiosPost, DataFetch, ErrorHandling, LoadingIndicator ,Pagination,Modal,HOCApp, HOCApp2, CharacterList, CharacterListPagination, GraphQLErrorHandling} from './components/Day5';
// import Modal from "./components/Day5/Modal.jsx"

import {BrowserRouter,Routes,Route} from 'react-router-dom'

// import { Pagination } from '@mui/material';

import {Count, MyForm, UserProfile,Modal1} from './components/Day6'




const Home11=lazy(()=>import('./components/Day6/Home11'))
const About11=lazy(()=>import('./components/Day6/About11'))





function App() {
  
  return (
    <div className="App">
    {/* <Greeting/>
    <br/>
    <br/>
    
    <UserCard name={"Abhishek"} email={"xyz@.com"} />
    <br/>
    <UserCard name={"Rajveer"} email={"wyz@.com"} />
    <br/>
    <UserCard name={"Lalit"} email={"qyz@.com"} />

    <br/>
    <br/>

    <Weather temperature={9}/>
    <Weather temperature={30}/>
    <Weather/>
    <br/>
    <Counter/>
    <br/>
    <TaskList array={["Task1","Task2","Task3","Task4","Task5"]}/>
    <br/>
    <Button text={"Clicked Me"} color={"red"}/> */}

    {/* <h1>Day2 </h1>
    <Counter1/>
    <br/>
    <PersonForm/>
    <br/>
    <br/>
    <ToDoList1/>

     <div>
      <RandomNumberGenerator/>
    </div> 

    <div>
      <TaskList1/>
    </div>

    


    <div>
      <CounterWithStep/>
    </div> 

    <div>
      <Clock/>
    </div> 



     <div>
      <Notifications/>
    </div> 

      */}
     
    {/* <h1>Day3</h1>

     <div>
          
            <Parent>
              <Child/>
            </Parent>
          
    </div> 



     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/home' element={<Protected Component={Home}/>}/>
      <Route path='/about' element={<Protected Component={About}/>}/>
      <Route path='/*' element={<Page404/>}/> 
      <Route path='/login' element={<Login/>}/>

      <Route path='/dashboard' element={<Protected Component={DashBoard}/>}>
       
       <Route path='/dashboard/profile' element={<Profile/>}/>
       <Route path='/dashboard/setting' element={<Setting/>}/>

      </Route>

     <Route path='/user/:id' element={<User/>}/>
     
      </Routes>
    </BrowserRouter>  */}

    {/* <h1>Day4</h1>

    <div>
      <ControlledComponent/>
    </div>


    <div>
      <Form/>
    </div>


    <div>
      <InputFieldComponent/>
    </div>


    <div>
      <Registration/>
    </div>


    <div>
      <DropDown/>
    </div>


    <div>
      <List/>
    </div>


    <div>
      <SearchFilter/>
    </div>

    <div>
      <ResponsiveDrawer/>
    </div>


    <div>
      <ValidationTextFields/>
    </div>


    <div>
      <MyModalDialog/>
    </div>

    <div>
      <MyDataTable/>
    </div>

    <h1>Day4</h1>

    <div>
      <ControlledComponent/>
    </div>


    <div>
      <ErrorMessage/>
    </div>
 */}

    {/* <h1>Day 5</h1> */}

    {/* <div>
      <DataFetch/>
    </div> */}



  
    {/* <div>
      <ErrorHandling/>
    </div>  */}

    {/* <div>
      <LoadingIndicator/>
    </div>  */}


     {/* <div>
      <Pagination/>
    </div>  */}


     {/* <div>
      <AxiosFetching/>
    </div>  */}


    {/* <div>
      <AxiosErrorHandling/>
    </div>   */}

{/* 
     <div>
      <AxiosPost/>
    </div>  */}



     {/* <div>
      <Application1/>
    </div>  */}


    {/* <div>
      <Application2/>
    </div> */}


    {/* <div>
      <Application3/>
    </div> */}

    {/* <div>
      <Modal/>
    </div> */}


    {/* <div>
      <HOCApp/>
    </div> */}

    {/* <div>
      <HOCApp2/>
    </div> */}


{/* 
    <div>
      <CharacterList/>
    </div> */}
{/* 
    <div>
      <CharacterListPagination/>
    </div> */}


 
     {/* <div>
      <GraphQLErrorHandling/>
     </div> */}




     <h1>Day6</h1>

     
     
    
     <BrowserRouter>
     <Suspense fallback={<div>Loading the Page</div>}>
      <Routes>
          <Route path='/home11' element={Home11}/>
          <Route path='/about11' element={About11}/>
      </Routes>
      </Suspense>
     </BrowserRouter>



     <div>
      <Count/>
     </div>

     <MyForm/>

     <div>
     <UserProfile name={"Abhishek"} email={"abhi123@.com"} phone={123456789}/>
     </div>

     <Modal1/>
     

    </div>
  );
}

export default App;
