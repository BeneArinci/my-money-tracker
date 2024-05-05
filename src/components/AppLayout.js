import 'normalize.css'
import { Outlet } from 'react-router-dom'
import NavBarLink from '../components/NavBarLink'
import '../styles/styles.scss'

const Header = (props) => (
  <div>
    <div>
      <h1>This is my header</h1>
      <NavBarLink to="/" label={'Dashboard'} />
      <NavBarLink to="/add-expense" label={'Add Expense'} />
      <NavBarLink to="/support" label={'Support'} />
    </div>
    {props.children}
  </div>
)

const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
