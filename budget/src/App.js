// import React, { useState, useEffect } from 'react';
// import Income from './components/Income';
// import Expenses from './components/Expenses';
// import BudgetChart from './components/BudgetChart';
// import BudgetGoals from './components/BudgetGoals';



// function App() {
//   const [budgetData, setBudgetData] = useState({
//     income: [],
//     expenses: [],
//     goals: {}
//   });

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem('budgetData'));
//     if (storedData) {
//       setBudgetData(storedData);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('budgetData', JSON.stringify(budgetData));
//   }, [budgetData]);

//   return (
//     <div className="App">
//       <h1>Gestion de budget familial</h1>
//       <Income budgetData={budgetData} setBudgetData={setBudgetData} />
//       <Expenses budgetData={budgetData} setBudgetData={setBudgetData} />
//       <BudgetChart budgetData={budgetData} />
//       <BudgetGoals budgetData={budgetData} setBudgetData={setBudgetData} />
//     </div>
//   );
// }
// export default App;



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
  
  // État pour afficher/masquer le graphique
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('budgetData'));
    if (storedData) {
      setBudgetData(storedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('budgetData', JSON.stringify(budgetData));
  }, [budgetData]);

  // Fonction pour supprimer une entrée de revenus
  const deleteIncome = (id) => {
    setBudgetData((prevData) => ({
      ...prevData,
      income: prevData.income.filter((income) => income.id !== id)
    }));
  };

  // Fonction pour supprimer une entrée de dépenses
  const deleteExpense = (id) => {
    setBudgetData((prevData) => ({
      ...prevData,
      expenses: prevData.expenses.filter((expense) => expense.id !== id)
    }));
  };
  // Fonction pour supprimer l'objectif financier
  const deleteGoal = () => {
    setBudgetData({
      ...budgetData,
      goals: {}
    });
  };


  // Fonction pour basculer l'affichage du graphique
  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <div className="App">
      <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <img src="/BlueLogo(1).png" alt="smartspend" style={{ width: '100px', height: '100px' }} />
        <h1 style={{ marginLeft: '50px'}}>Gestion de budget familial</h1>
      </header>

      <Income budgetData={budgetData} setBudgetData={setBudgetData} onDelete={deleteIncome} />
      <Expenses budgetData={budgetData} setBudgetData={setBudgetData} onDelete={deleteExpense} />
      
      
      {/* Bouton pour afficher/masquer le graphique */}
      <button onClick={toggleChart}>
        {showChart ? 'Masquer le graphique' : 'Afficher le graphique'}
      </button>
      
      {/* Affichage conditionnel du graphique */}
      {showChart && <BudgetChart budgetData={budgetData} />}
      
      <BudgetGoals budgetData={budgetData} setBudgetData={setBudgetData} onDelete={deleteGoal}/>
    </div>
  );
}

export default App;
