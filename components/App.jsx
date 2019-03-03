import React from 'react';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';
import DeleteTask from './DeleteTask.jsx';
import ClearAllTasks from './ClearAllTasks.jsx';



class App extends React.Component {

    counter = 1;

    state = {
        tasks: [
            {
                id: 0,
                number: 1,
                text: 'Zagrac w końcu w Wiedzmina 3',
                edit: false
            },
            {
                id: 1,
                number: 2,
                text: 'Zrobić dobry uczynek',
                edit: false
            },
            {
                id: 2,
                number: 3,
                text: 'pomalować dom po sylwestrze',
                edit: false
            },
            {
                id: 3,
                number: 4,
                text: 'schudnąć 30 kilogramów',
                edit: false
            },
            {
                id: 4,
                number: 5,
                text: 'sprzedac butelki po piwie (20 skrzynek)',
                edit: false
            },
            {
                id: 5,
                number: 6,
                text: 'jeszcze raz pomalować dom',
                edit: false
            },
        ]
    };


    addTask = (text) => {

        const currentId = this.state.tasks.length;
        const currentNumber = this.state.tasks.length + 1;

        const task = {
            id: currentId,
            number: currentNumber,
            text: text,
        };
        this.counter++;

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

    handleClearTasks = () => {
        this.setState({
            tasks: [],
        })
    };


    render() {
        return (
            <div className="app">
                <h1>TODO-App</h1>
                <AddTask add={this.addTask}/>
                <DeleteTask delete={this.deleteTask}/>
                <ClearAllTasks clear={this.handleClearTasks}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default App;