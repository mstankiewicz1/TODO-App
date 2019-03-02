import React from 'react';
import TaskList from './TaskList.jsx';
import AddTask from './AddTask.jsx';



class App extends React.Component {

    counter = 6;

    state = {
        tasks: [
            {
                id: 0,
                text: 'Zagrac w końcu w Wiedzmina 3',
            },
            {
                id: 1,
                text: 'Zrobić dobry uczynek',
            },
            {
                id: 2,
                text: 'pomalować dom po sylwestrze',
            },
            {
                id: 3,
                text: 'schudnąć 30 kilogramów',
            },
            {
                id: 4,
                text: 'sprzedac butelki po piwie (20 skrzynek)',
            },
            {
                id: 5,
                text: 'jeszcze raz pomalować dom',
            },
        ]
    };


    addTask = (text) => {

        const task = {
            id: this.counter,
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



    render() {
        return (
            <div className="App">
                <h1>TODO-App</h1>
                <AddTask add={this.addTask}/>
                <TaskList tasks={this.state.tasks}/>
            </div>
        )
    }
}

export default App;