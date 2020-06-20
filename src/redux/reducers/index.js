import { combineReducers } from "redux";
import { getAllfilm, postFilm, deleteFilm } from "./reducerFilm";
import { getAllcategory } from "./reducerCategory";
import { postEpisode, getEpisodefilm } from "./reducerEpisode";
import {
  getAlltransaction,
  patchTransaction,
  deleteTransaction,
  postTransaction,
} from "./reducerTransaction";

const reducer = combineReducers({
  getAllfilm,
  getAllcategory,
  postFilm,
  postEpisode,
  getAlltransaction,
  patchTransaction,
  deleteTransaction,
  postTransaction,
  deleteFilm,
  getEpisodefilm,
});

export default reducer;
