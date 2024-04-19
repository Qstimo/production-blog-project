import { counterActions, counterReducer } from "./counterSlice"
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { CounterSchema } from "../type/counterSchema"

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
    })
    test('increment', () => {
        const state: CounterSchema = { value: 10 }
        expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
    })
}
)