import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam","money"];

export const forbiddenWordsMiddleware = ({dispatch}) => {
    return function (next){
        return function (action){
            if (action.type === ADD_ARTICLE){
                const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));

                if (foundWord.length){
                    return dispatch({ type: "Found Bad Words" });
                }
            }
            return next(action);
        };
    };
}