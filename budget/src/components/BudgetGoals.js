import React, { useState } from 'react';

function BudgetGoals({ budgetData, setBudgetData, onDeleteGoal }) {
  const [goal, setGoal] = useState('');

  const handleSetGoal = () => {
    setBudgetData({
      ...budgetData,
      goals: { ...budgetData.goals, amount: parseFloat(goal) }
    });
    setGoal('');
  };

  return (
    <div>
      <h2>Objectif financier</h2>
      <input
        type="number"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="Objectif de budget"
      />
      <button onClick={handleSetGoal}>Définir</button>

      <p>Objectif actuel : {budgetData.goals.amount ? budgetData.goals.amount : 'Non défini'} €
      
      <button onClick={() => onDeleteGoal()}>Supprimer</button>
      </p>
    </div>
  );
}

export default BudgetGoals;
