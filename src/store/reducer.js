export const initialState = {
    locos: [
        {
            id: 1,
            latlong: [51.196004607608266,71.40973370522242],
            name: "Локомотив 1",
            sectionCount: 13,
            serial: "42"
        },
        {
            id: 2,
            latlong: [51.196004607608266,71.40973370522242],
            name: "Локомотив 2",
            sectionCount: 7,
            serial: "777"
        }
    ],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.loading
            }
        case 'ADD_LOCO':
            return {
                ...state,
                locos: [...state.locos, action.locoInfo]
            };
        case 'EDIT_LOCO':
            return {
                ...state,
                locos: state.locos.map((i) => {
                    if (i.id === action.locoInfo.id) {
                        return {
                            ...i,
                            ...action.locoInfo
                        }
                    }
                    return i;
                })
            };
        case 'REMOVE_LOCO':
            return {
                ...state,
                locos: state.locos.filter((i) => i.id !== action.id)
            };
        default:
            return state
    }
}

export default reducer;