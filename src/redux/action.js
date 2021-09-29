import {
  saveData,
  saveTarget,
  saveInheritance,
  saveRenderedData
} from "./slice";

const saveDataAction = (payload) => (dispatch) => {
  dispatch(saveData(payload));
};

const saveInheritanceAction = (payload) => (dispatch) => {
  dispatch(saveInheritance(payload));
};

const saveTargetAction = (payload) => (dispatch) => {
  dispatch(saveTarget(payload));
};

const saveRenderedDataAction = (payload) => (dispatch) => {
  dispatch(saveRenderedData(payload));
};

export {
  saveDataAction,
  saveTargetAction,
  saveInheritanceAction,
  saveRenderedDataAction
};
