

export const currentLineup = (state = ['Brandon Childress','Andrien White', 'Chaundee Brown', 'Isaiah Mucius', 'Olivier Sarr'], action) =>{
  switch(action.type){
    case 'REMOVE_PLAYER':
      let newArray = state.slice();
      newArray[action.ID] = '';
      return newArray;
    case 'ADD_PLAYER':
      let addPlayerArray = state.slice();
      addPlayerArray[action.ID] = action.name;
      return addPlayerArray;
    default:
      return state;
  }
}