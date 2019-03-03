import React from 'react';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';
import DeleteTask from './DeleteTask.jsx';
import ClearAllTasks from './ClearAllTasks.jsx';


class App extends React.Component {


    state = {
        tasks: []
    };


    addTask = (text) => {

        const currentId = this.state.tasks.length;
        const currentNumber = this.state.tasks.length + 1;

        const task = {
            id: currentId,
            number: currentNumber,
            text: text,
        };

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