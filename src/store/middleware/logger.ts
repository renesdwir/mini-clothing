export const logger = (store: any) => (next: any) => (action: any) => {
  if (!action.payload) {
    return next(action);
  }
  console.log("type", action.type);
  //console.log("payload", action.payload);
  console.log("currentState", store.getState());
  next(action);
  console.log("nextState", store.getState());
};
