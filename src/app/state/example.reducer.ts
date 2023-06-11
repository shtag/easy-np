import { ExampleAction } from './example.action';
import { Action, createReducer, on } from "@ngrx/store";
import { FeatureState } from './example.selectors';


const initialState: FeatureState = {
    count: 0,
}

const exampleReducer = createReducer(initialState, on(ExampleAction.increase, (state) => ({
    ...state,
    count: state.count + 1
})))

export function reducer(state: FeatureState | undefined, action: Action) {
    return exampleReducer(state, action);
}