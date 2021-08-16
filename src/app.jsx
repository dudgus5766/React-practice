import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

// function App() {
//   return <Habits />;
// }

class App extends Component {

  state = {
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ],
}

handleIncrement = (habit) => {
  const habits = [...this.state.habits];
  console.log(habits);
  const index = habits.indexOf(habit);
  console.log(index);
  habits[index].count++;
  this.setState({ habits });
};

handleDecrement = (habit) => {
  const habits = [...this.state.habits];
  console.log(habits);
  const index = habits.indexOf(habit);
  console.log(index);
  const count = habits[index].count -1;
  habits[index].count = count < 0 ? 0 : count;
  this.setState({ habits });
};

handleDelete = (habit) => {
  const habits = this.state.habits.filter(item => item.id !== habit.id);
  this.setState({habits})
};

handelAdd = (name) => {
  const habits = [...this.state.habits, {id:Date.now(), name, count:0}];
  this.setState({habits})
}

  render() {
    return (
    <div>
      <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
      <Habits 
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handelAdd}
      />
    </div>
    );
  }
}

export default App;
