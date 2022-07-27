import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Dialog from 'react-native-dialog';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function NoteItem(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showDialog, setShowDialog] = useState(false);

  function removeItem() {
    dispatch({
      type: 'DELETE_NOTE',
      payload: {
        key: props.index,
      },
    });
    setShowDialog(false);
  }
  return (
    <View>
      <TouchableOpacity
        style={styles.noteItem}
        onPress={() =>
          navigation.navigate('Edit Note', {
            key: props.index,
          })
        }
        onLongPress={() => setShowDialog(true)}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
      {showDialog ? (
        <Dialog.Container visible={true}>
          <Dialog.Title>Note delete</Dialog.Title>
          <Dialog.Description>
            Do you want to delete this note? You cannot undo this action.
          </Dialog.Description>
          <Dialog.Button label="Cancel" onPress={() => setShowDialog(false)} />
          <Dialog.Button label="Delete" onPress={removeItem} />
        </Dialog.Container>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  noteItem: {
    marginVertical: 10,
    backgroundColor: '#cdf2ac',
    color: '#3143e8',
    padding: 12,
  },
});
