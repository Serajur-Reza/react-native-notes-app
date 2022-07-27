import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

export default function NewNote() {
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  function saveItem(inputText) {
    if (text !== inputText.nativeEvent.text) {
      dispatch({
        type: 'CREATE_NOTE',
        payload: {
          title:
            inputText.nativeEvent.text.substring(0, 5) + '...' ||
            'untitled note',
          text: inputText.nativeEvent.text,
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
        onEndEditing={saveItem}
        defaultValue={text}
      />
    </View>
  );
}
