import { saveData } from "./slice";

const saveDataAction = (payload) => (dispatch) => {
  dispatch(saveData(payload));
};

export default saveDataAction;
