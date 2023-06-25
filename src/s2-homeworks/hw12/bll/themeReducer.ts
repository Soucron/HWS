export type InitStateType = {
    themeId : number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state : InitStateType = initState, action: changeThemeIdAT) : InitStateType  => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID' :
            return {...state, themeId: action.id}


        default:
            return state
    }
}

type changeThemeIdAT = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
