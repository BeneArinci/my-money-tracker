import { configureStore, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

console.log('test')

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, description) {
        return {
          payload: {
            id: uuidv4(),
            title,
            description,
            amount: 0,
            createdAt: 0,
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

const { addExpense } = expensesSlice.actions

store.dispatch(addExpense('Test expense', 'description'))

console.log(store.getState())
