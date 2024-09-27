import React, { useState } from 'react';

function Expenses({ budgetData, setBudgetData }) {
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('');

  const handleAddExpense = () => {
    const newExpense = {
      id: Date.now(),
      amount: parseFloat(expense),
      category: category
    };
    setBudgetData({
      ...budgetData,
      expenses: [...budgetData.expenses, newExpense]
    });
    setExpense('');
    setCategory('');
  };

  return (
    <div>
      <h2>Dépenses</h2>
      <input
        type="number"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Montant de la dépense"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Catégorie"
      />
      <button onClick={handleAddExpense}>Ajouter</button>

      <ul>
        {budgetData.expenses.map((exp) => (
          <li key={exp.id}>
            {exp.amount} € - {exp.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
