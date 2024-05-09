import { configureStore, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: {
      reducer(state, action) {
        return [...state, action.payload]
      },
      prepare(title, description, amount) {
        return {
          payload: {
            id: uuidv4(),
            title,
            description,
            amount,
            createdAt: 0,
          },
        }
      },
    },
    updateExpense: {
      reducer(state, action) {
        return state.map((expense) => {
          console.log(action.payload)
          if (expense.id === action.payload.id) {
            return {
              ...expense,
              title: action.payload.title
                ? action.payload.title
                : expense.title,
              description: action.payload.description
                ? action.payload.description
                : expense.description,
              amount: action.payload.amount
                ? action.payload.amount
                : expense.amount,
            }
          }

          return expense
        })
      },
      prepare(id, title, description, amount) {
        return {
          payload: {
            id,
            title,
            description,
            amount,
          },
        }
      },
    },
    deleteExpense: {
      reducer(state, action) {
        return state.filter((expense) => expense.id !== action.payload.id)
      },
      prepare(expenseId) {
        return {
          payload: {
            id: expenseId,
          },
        }
      },
    },
  },
})

// creating the store
const store = configureStore({
  reducer: {
    expenses: expensesSlice.reducer,
  },
})

console.log(store.getState())

const { addExpense, deleteExpense, updateExpense } = expensesSlice.actions

const firstExpense = store.dispatch(
  addExpense('Test expense', 'description', 3000)
)

const secondExpense = store.dispatch(
  addExpense('Second expense', 'some description', 45000)
)

store.dispatch(deleteExpense(firstExpense.payload.id))

store.dispatch(
  updateExpense(
    secondExpense.payload.id,
    'Updated title',
    'updated description',
    9000
  )
)

console.log(store.getState())
