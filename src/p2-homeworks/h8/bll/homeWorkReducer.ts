import {UserType} from "../HW8";

export type ActionType = {
    type: string
    payload: any
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a,b) => a.name.localeCompare(b.name));

            return action.payload === 'up' ? newState : newState.reverse();
        }
        case 'check': {
            return state.filter((el) => el.age === action.payload);
        }
        default: return state
    }
}