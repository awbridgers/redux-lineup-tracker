export const lineupIndex = (state = 0, action) => {
  switch(action.type){
    case 'CHANGE_INDEX':
      return action.index;
    default:
      return state
  }
}
