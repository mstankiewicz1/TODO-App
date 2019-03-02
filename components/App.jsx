import React from 'react';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';
import DeleteTask from './DeleteTask.jsx';



class App extends React.Component {

    counter = 7;

    state = {
        tasks: [
            {
                id: 0,
                number: 1,
                text: 'Zagrac w końcu w Wiedzmina 3',
            },
            {
                id: 1,
                number: 2,
                text: 'Zrobić dobry uczynek',
            },
            {
                id: 2,
                number: 3,
                text: 'pomalować dom po sylwestrze',
            },
            {
                id: 3,
                number: 4,
                text: 'schudnąć 30 kilogramów',
            },
            {
                id: 4,
                number: 5,
                text: 'sprzedac butelki po piwie (20 skrzynek)',
            },
            {
                id: 5,
                number: 6,
                text: 'jeszcze raz pomalować dom',
            },
        ]
    };


    addTask = (text) => {

        const task = {
            id: this.counter,
            number: this.counter,
            text: text,
        };
        this.counter++;
        console.log(this.counter, task);

        this.setState(prevState => ({
            tasks: [...prevState.tasks, task]
            })
        );

        return true
    };

    deleteTask = () => {
      const tasks = [...this.state.tasks];
      const index = tasks.length-1;
      tasks.splice(index,1);

      this.setState({
        tasks,
      })
    };



    render() {
        return (
            <div className="App">
                <h1>TODO-App</h1>
                <AddTask add={this.addTask}/>
                <DeleteTask delete={this.deleteTask}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default App;