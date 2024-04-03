import logo from './logo.svg';
import './App.css';
import { Greeting ,Button,Counter,TaskList,UserCard,Weather} from './components/Day1'
import { Counter1, CounterWithStep, PersonForm, ToDoList1,Clock,SwitchTheme ,SwitchLangauge,ShoppingCart, Voting,ParentComponent,TaskList1, StudentList, EmployeeSalary,  CountdownComponent, RandomNumberGenerator,Notifications,Storage,ClipBoard,ShoppingCartProvider} from './components/Day2';


function App() {
  return (
    <div className="App">
    <Greeting/>
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
    <Button text={"Clicked Me"} color={"red"}/>

   
 
     <div>
      <Counter1/>
    </div> 

    <div>
      <PersonForm/>
    </div> 
 

     <div>
     <ToDoList1/>
    </div> 


    <div>
      <RandomNumberGenerator/>
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

    <div>
      <SwitchTheme/>
    </div>

  
    <div>
      <SwitchLangauge/>
    </div>

     <div>
     <ShoppingCartProvider>
      <ShoppingCart/>
      </ShoppingCartProvider>
    </div>  
 

   <div>
    <Voting/>
   </div>

   <div>
    <ParentComponent/>
   </div> 

   <div>
    <TaskList1/>
   </div>

   <div>
    <StudentList/>
   </div>

   <div>
    <EmployeeSalary/>
   </div>

   <div>
    <Storage/>
   </div>

   <div>
    <CountdownComponent/>
   </div>

   <div>
    <ClipBoard/>
   </div>
       
    </div>
  );
}

export default App;
