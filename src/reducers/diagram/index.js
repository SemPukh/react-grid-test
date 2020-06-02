const initState = {
    selectedDn: null
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case 'CHANGE_SELECTED':
            return {
                ...state,
                selectedDn: payload
            }

        default:
            return state
    }
}