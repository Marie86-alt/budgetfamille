import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Enregistrer les composants de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BudgetChart({ budgetData }) {
  const expenseCategories = [...new Set(budgetData.expenses.map((exp) => exp.category))];
  const expenseAmounts = expenseCategories.map((category) =>
    budgetData.expenses
      .filter((exp) => exp.category === category)
      .reduce((acc, curr) => acc + curr.amount, 0)
  );

  const data = {
    labels: expenseCategories,
    datasets: [
      {
        label: 'Dépenses par catégorie',
        data: expenseAmounts,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
}

export default BudgetChart;
