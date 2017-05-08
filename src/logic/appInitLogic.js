import { createLogic } from "redux-logic";
import { APP_INIT } from "../constants";
//import { doSomething } from "../actions/AppActions";

export const appInitLogic = createLogic({
  type: APP_INIT,

  process({ action }, dispatch, done) {
    //dispatch(doSomething({ data }));
    done();
  }
});

export default [appInitLogic];
