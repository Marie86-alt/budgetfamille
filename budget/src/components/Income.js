// import React, { useState } from 'react';

// function Income({ budgetData, setBudgetData, onDelete }) {
//   const [income, setIncome] = useState('');

//   const handleAddIncome = () => {
//     const newIncome = {
//       id: Date.now(),
//       amount: parseFloat(income)
//     };
//     setBudgetData({
//       ...budgetData,
//       income: [...budgetData.income, newIncome]
//     });
//     setIncome('');
//   };

//   return (
//     <div>
//       <h2>Revenus</h2>
//       <input
//         type="number"
//         value={income}
//         onChange={(e) => setIncome(e.target.value)}
//         placeholder="Ajouter un revenu"
//       />
//       <button onClick={handleAddIncome}>Ajouter</button>

//       <ul>
//         {budgetData.income.map((inc) => (
//           <li key={inc.id}>{inc.amount} €
//           <button onClick={() => onClick={() => onDelete(inc.id)}>Supprimer</button>
//           </li>
          
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Income;

import React, { useState } from 'react';

function Income({ budgetData, setBudgetData, onDelete }) {
  const [income, setIncome] = useState('');

  const handleAddIncome = () => {
    const newIncome = {
      id: Date.now(),
      amount: parseFloat(income)
    };
    setBudgetData({
      ...budgetData,
      income: [...budgetData.income, newIncome]
    });
    setIncome('');
  };

  return (
    <div>
      <h2>Revenus</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Ajouter un revenu"
      />
      <button onClick={handleAddIncome}>Ajouter</button>

      <ul>
        {budgetData.income.map((inc) => (
          <li key={inc.id}>
            {inc.amount} €
            <button onClick={() => onDelete(inc.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Income;

