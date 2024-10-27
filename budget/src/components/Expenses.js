import React, { useState } from 'react';
// import '../App.css';

function Expenses({ budgetData, setBudgetData, onDelete }) {
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
        className='input-space'
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
            <button onClick={() => onDelete(expense.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;
