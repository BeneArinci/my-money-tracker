import { useParams } from 'react-router-dom'

const EditExpensePage = () => {
  const params = useParams()
  return <div>Editing expense with id: {params.id}</div>
}

export default EditExpensePage
