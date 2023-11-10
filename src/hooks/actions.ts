import { useDispatch } from "react-redux";
import { playgroundActions } from "../store/playground/playground.slice";
import { bindActionCreators } from "redux";

const actions = {
      ...playgroundActions
}
export const useActions = () => {
      const dispatch = useDispatch();
      return bindActionCreators(actions, dispatch);
}