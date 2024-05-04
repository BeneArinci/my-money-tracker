import 'normalize.css'
import { createRoot } from 'react-dom/client'
import AppRouter from './routers/AppRouter'
import './styles/styles.scss'

createRoot(document.getElementById('app')).render(<AppRouter />)
