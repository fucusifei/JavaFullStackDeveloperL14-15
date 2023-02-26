import {
    getJson,
    deleteJson,
    postJsonAnimal, getJsonById,
    putJson
} from 'requests';
import {
    RECEIVE_LIST,
    ERROR_RECEIVE_LIST, RECEIVE_LIST_BY_ID, CREATE_ITEM
} from '../constants/actionTypes';
import config from 'config/index'
const getList = () => {
    const {
        BASE_URL,
        ANIMAL_LIST_SERVICE
    } = config
        return getJson({
        url: `${BASE_URL}${ANIMAL_LIST_SERVICE}`,
        }).catch((err) => {
            console.log(err);
});
};
const getItemById = (id) => {

    const {
        BASE_URL,
        ANIMAL_LIST_SERVICE,
        FIND_BY_ID_SERVICE
    } = config
    return getJsonById({
        url: `${BASE_URL}${ANIMAL_LIST_SERVICE}${FIND_BY_ID_SERVICE}${id.id}`,
    }).catch((err) => {
        console.log(err);
    });
};
const receiveList = (list) => ({
    type: RECEIVE_LIST,
    payload: list,
});

const receiveItemByID = (item) => ({
    type: RECEIVE_LIST_BY_ID,
    payload: item,
});
const errorReceiveList = () => ({
    type: ERROR_RECEIVE_LIST
});

export const fetchList = () => (dispatch) => {
      return  getList({
            dispatch,
        }).then(list => dispatch(receiveList(list)))
            .catch(() => dispatch(errorReceiveList()));
};
export const fetchItemById = (id) => (dispatch) => {
    return  getItemById({id,
        dispatch,
    }).then(item => dispatch(receiveItemByID(item)))
        .catch(() => dispatch(errorReceiveList()));
};
export const deleteList = (id) => {
    const {
        BASE_URL,
        ANIMAL_LIST_SERVICE
    } = config
    return deleteJson({
        url: `${BASE_URL}${ANIMAL_LIST_SERVICE}/${id}`,
    }).catch((err) => {
        console.log(err);
    });
};

export const createItem = (newAnimal
                ) => {
    const {
        BASE_URL,
        ANIMAL_LIST_SERVICE,
    } = config;
    return postJsonAnimal({
        body: {
            newAnimal
        },
        url: `${BASE_URL}${ANIMAL_LIST_SERVICE}`,
    });
};
export const changeItem = (newAnimal, animalId
) => {
    const {
        BASE_URL,
        ANIMAL_LIST_SERVICE,
    } = config;
    return putJson({
        body: {
            newAnimal
        },
        url: `${BASE_URL}${ANIMAL_LIST_SERVICE}/${animalId}`,
    });
};