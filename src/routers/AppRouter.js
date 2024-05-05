import 'normalize.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddExpensePage from '../components/AddExpensePage'
import AppLayout from '../components/AppLayout'
import EditExpensePage from '../components/EditExpensePage'
import ExpensesDashboardPage from '../components/ExpenseDashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import SupportPage from '../components/SupportPage'
import '../styles/styles.scss'

const routes = [
  {
    path: '/',
    element: <ExpensesDashboardPage />,
  },
  { path: '/add-expense', element: <AddExpensePage /> },
  {
    path: '/edit-expense/:id',
    element: <EditExpensePage />,
  },
  { path: '/support', element: <SupportPage /> },
  { path: '*', element: <NotFoundPage /> },
]

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: routes,
  },
])

const AppRouter = () => <RouterProvider router={router} />

// const AppRouter = () => (
//   <BrowserRouter>
//     <Routes >
//       <Route path="/" element={<AppLayout />} >
//         <Route index element={<ExpensesDashboardPage />} />
//         <Route path="/add-expense" element={<AddExpensePage />} />
//         <Route path="/edit-expense/:id" element={<EditExpensePage />} />
//         <Route path="/support" element={<SupportPage />} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// )

export default AppRouter
