import {
    ERROR_RECEIVE_LIST,
    RECEIVE_LIST,
    REQUEST_LIST,
    RECEIVE_LIST_BY_ID, CREATE_ITEM
} from '../constants/actionTypes';

const initialState = {
    isFailedFetchList: false,
    isFetchingList: false,
    viewList: [],
    itemById: []
};

 const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LIST: {
            return {
                ...state,
                isFailedFetchList: false,
                isFetchingList: true,
            };
        }
        case RECEIVE_LIST: {
            const list = action.payload;
            return {
                ...state,
                viewList: list || initialState.viewList,
            };
        }
        case RECEIVE_LIST_BY_ID: {
            const item = action.payload;
            if (item.toString() === "[object Object]"){
                return {
                    ...state,
                    itemById: item || initialState.itemById,
                };           }

            else {
                return {
                    ...state,
                    itemById: [{
                        "name": null,
                        "kindOfAnimal": null,
                        "gender": null,
                        "age": null,
                        "height": null,
                        "length": null,
                        "weight": null,
                        "issueDate": null,
                        "receivingDate": null,
                        "personThatSheltered": null
                    }]
                };
            }
        }

        case ERROR_RECEIVE_LIST: {
            return {
                ...state,
                isFailedFetchList: true,
                isFetchingList: false,
            }
        }
        default: return state;
    }
}
export default reducer;
