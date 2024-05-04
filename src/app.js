import 'normalize.css'
import { createRoot } from 'react-dom/client'
import {
  Link,
  NavLink,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import './styles/styles.scss'
import NavBarLink from './components/NavBarLink'

const Header = (props) => (
  <div>
    <div>
      <h1>This is my header</h1>
      <NavBarLink to="/" label={'Dashboard'} />
      <NavBarLink to="/add-expense" label={'Add Expense'} />
      <NavBarLink to="/edit-expense" label={'Edit Expense'} />
      <NavBarLink to="/support" label={'Support'} />
    </div>
    {props.children}
  </div>
)

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

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
  return (
    <div>
      This is an error page - <Link to="/">Go back to the home page</Link>
    </div>
  )
}

const routes = [
  {
    path: '/',
    element: <ExpensesDashboardPage />,
  },
  { path: '/add-expense', element: <AddExpensePage /> },
  { path: '/edit-expense', element: <EditExpensePage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '*', element: <ErrorPage /> },
]

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
])

createRoot(document.getElementById('app')).render(
  <RouterProvider router={router} />
)
