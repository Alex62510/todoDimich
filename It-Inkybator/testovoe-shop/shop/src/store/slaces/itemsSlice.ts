import {createSlice} from '@reduxjs/toolkit'

type ItemType = {
    id: number | null,
    title: string | null,
    price: number | 0,
    added: boolean,
    count: number
}
type InitialStateType = Array<ItemType>
const initialState: InitialStateType = [
    {id: 1, title: "name1", price: 100, added: false, count: 0},
    {id: 2, title: "name2", price: 200, added: false, count: 0},
    {id: 3, title: "name3", price: 300, added: false, count: 0},
    {id: 4, title: "name4", price: 400, added: false, count: 0}
]
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        getItems(state, action) {
            state.map(t => t)
        },
        changeItem(state, action) {
            state.map(item => item.id === action.payload.id ? item.added = action.payload.added : item)
        },
        changeCount(state, action) {
            state.map(item => item.id === action.payload.id ? item.count = action.payload.count : item)
        }

    }
})
export const {getItems, changeItem,changeCount} = itemsSlice.actions
export default itemsSlice.reducer