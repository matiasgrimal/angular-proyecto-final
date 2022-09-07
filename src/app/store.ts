import { INCREMENT } from "./actions";

export interface IAppState {
    counter: number;
};

export const INITIAL_STATE: IAppState = {
    counter: 1000
};

export function rootReducer(state, action) {
    switch (action.type) {
        case INCREMENT: return { counter: state.counter * 2 };
    }
    return state;
}