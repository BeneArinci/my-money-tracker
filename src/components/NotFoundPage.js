import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
      This is an error page - <Link to="/">Go back to the home page</Link>
    </div>
  )
}

export default NotFoundPage
