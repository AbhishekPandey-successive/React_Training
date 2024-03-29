import logo from './logo.svg';
import './App.css';
import { Greeting ,Button,Counter,TaskList,UserCard,Weather} from './components/Day1'

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

      
    </div>
  );
}

export default App;
