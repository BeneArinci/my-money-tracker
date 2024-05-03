import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'normalize.css'
import './styles/styles.scss'

const ExpensesDashboardPage = () => {
  return <div>Hellooooooo</div>
}

const AddExpensePage = () => {
  return <div>Add expense</div>
}

const EditExpensePage = () => {
  return <div>Edit Expense</div>
}

const SupportPage = () => {
  return <div>Support page</div>
}

const ErrorPage = () => {
  return <div>This is an error page</div>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <ExpensesDashboardPage />,
    errorElement: ErrorPage,
  },
  { path: '/add-expense', element: <AddExpensePage /> },
  { path: '/edit-expense', element: <EditExpensePage /> },
  { path: '/support', element: <SupportPage /> },
])

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
)
