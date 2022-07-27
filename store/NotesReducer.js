const initialState = {
  notes: [],
};

export default function NotesReducer(state = initialState, action) {
  let newNotes = [...state.notes];
  switch (action.type) {
    case 'CREATE_NOTE':
      newNotes.push({
        title: action.payload.title,
        content: action.payload.text,
      });
      return {...state, notes: [...newNotes]};

    case 'GET_NOTE':
      return {...state, notes: [...newNotes]};

    case 'GET_ONE_NOTE':
      return {...state, notes: [...newNotes]};

    case 'EDIT_NOTE':
      if (newNotes[action.payload.key]) {
        newNotes[action.payload.key] = {
          title: action.payload.title,
          content: action.payload.text,
        };
      }
      return {...state, notes: [...newNotes]};

    case 'DELETE_NOTE':
      newNotes = newNotes.filter((note, index) => index !== action.payload.key);
      return {...state, notes: [...newNotes]};

    default:
      return state;
  }
}
