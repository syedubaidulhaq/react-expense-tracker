
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const expenses = [
    {
      id: 1,
      title: 'Car insurance',
      amount: 294.49,
      date: new Date(2021, 2, 28),

    },
    {
      id: 2,
      title: 'Toilet Paper',
      amount: 49.9,
      date: new Date(2020, 7, 14),

    },
    {
      id: 3,
      title: 'New T.V',
      amount: 799.4,
      date: new Date(2021, 2, 12),

    },
    {
      id: 4,
      title: 'mobile',
      amount: 964.89,
      date: new Date(2021, 6, 2),

    }

  ]

  return (
    <div className="App">
      <NewExpense />
      <Expenses items={expenses} />
    </div >
  );
}

export default App;
