import { createAction, props } from "@ngrx/store";

export const ExampleAction = {
    increase: createAction('INCREASE_COUNT'),

    sendMessage: createAction('SEND_MESSAGE', props<{ message?: string }>)
}
export const increase = createAction('INCREASE_COUNT');