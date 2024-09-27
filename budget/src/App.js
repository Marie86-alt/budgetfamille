import React, { useState, useEffect } from 'react';
import Income from './components/Income';
import Expenses from './components/Expenses';
import BudgetChart from './components/BudgetChart';
import BudgetGoals from './components/BudgetGoals';

function App() {
  const [budgetData, setBudgetData] = useState({
    income: [],
    expenses: [],
    goals: {}
  });

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('budgetData'));
    if (storedData) {
      setBudgetData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('budgetData', JSON.stringify(budgetData));
  }, [budgetData]);

  return (
    <div className="App">
      <h1>Gestion de budget familial</h1>
      <Income budgetData={budgetData} setBudgetData={setBudgetData} />
      <Expenses budgetData={budgetData} setBudgetData={setBudgetData} />
      <BudgetChart budgetData={budgetData} />
      <BudgetGoals budgetData={budgetData} setBudgetData={setBudgetData} />
    </div>
  );
}

export default App;



