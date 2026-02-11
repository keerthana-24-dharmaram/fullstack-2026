
import './App.css';
import Dashboard from './Dashboard';
import Expenses from './Expenses';
import Income from './Income';


function App() {
  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <Dashboard totalIncome={0} totalExpenses={0} balance={0} />
      <Expenses />
      <Income />
    </div>
  );
}

export default App;
