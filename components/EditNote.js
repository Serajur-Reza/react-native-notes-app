import {TextInput, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function EditNote(props) {
  const dispatch = useDispatch();

  const notes = useSelector(state => state.NotesReducer.notes);

  const data = useMemo(() => {
    return notes.find((item, index) => index === props.route.params.key);
  }, [props.route.params.key, notes]);

  console.log(data);
  const [body, setBody] = useState(data.content);

  function edit() {
    if (body !== '' && body !== data.content) {
      dispatch({
        type: 'EDIT_NOTE',
        payload: {
          title: body.substring(0, 5) + '...' || 'untitled note',
          text: body,
          key: props.route.params.key,
        },
      });
    }
  }

  return (
    <View>
      <TextInput
        multiline={true}
        secureTextEntry={true}
        selectionColor="yellow"
        onEndEditing={edit}
        onChangeText={t => setBody(t)}
        defaultValue={data.content}
      />
    </View>
  );
}
