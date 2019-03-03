import React from 'react';


class AddTask extends React.Component {


    state = {
      text: '',
    };

    handleText = e => {
        this.setState({
            text: e.target.value,
        })
    };

    handleAddTask = () => {

        const {text} = this.state;

            const add = this.props.add(text);

            if (add) {
                this.setState({
                    text: '',
                })
            }
        };



    render() {
        return (
            <div className="form">
                <input className="addInput" type="text" placeholder="Wpisz treść zadania" value={this.state.text}
                       onChange={this.handleText}/>
                <button className="addTaskButton" onClick={this.handleAddTask}>Add</button>
            </div>
        )
    }
}

export default AddTask;
