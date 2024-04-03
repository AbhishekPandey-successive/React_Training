import logo from './logo.svg';
import './App.css';
import { Greeting ,Button,Counter,TaskList,UserCard,Weather} from './components/Day1'
import { Counter1,CounterWithStep,PersonForm, RandomNumberGenerator, ToDoList1,Clock ,Notifications} from './components/Day2'

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

    <h1>Day2 </h1>
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
      <CounterWithStep/>
    </div>

    <div>
      <Clock/>
    </div>


    <div>
      <Notifications/>
    </div>

      
    </div>
  );
}

export default App;
