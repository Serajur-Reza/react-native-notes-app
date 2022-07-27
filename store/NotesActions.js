export const createNote = note => {
  return {
    type: 'CREATE_NOTE',
    payload: {note},
  };
};

export const getNotes = () => {
  return {
    type: 'GET_NOTE',
  };
};

export const getOneNote = key => {
  return {
    type: 'GET_ONE_NOTE',
    payload: key,
  };
};

export const editNote = note => {
  return {
    type: 'EDIT_NOTE',
    payload: {note},
  };
};

export const deleteNote = note => {
  return {
    type: 'DELETE_NOTE',
    payload: {note},
  };
};
