import {TouchableOpacity, StyleSheet, Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useEffect, useCallback} from 'react';
import NoteItem from './NoteItem';
import {useDispatch, useSelector} from 'react-redux';

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const notes = useSelector(state => state.NotesReducer.notes);

  // const loadNotes = useCallback(() => {
  //   dispatch({
  //     type: 'GET_NOTE',
  //   });
  // }, [dispatch]);

  // useEffect(() => {
  //   loadNotes();
  // }, [loadNotes]);

  return (
    <View>
      <TouchableOpacity
        style={styles.clickContainer}
        onPress={() => navigation.navigate('New Note')}>
        <View style={styles.buttonContainer}>
          <Icon name="pluscircleo" size={20} color="#3143e8">
            <Text style={styles.btnText}>Add New</Text>
          </Icon>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.notesContainer}>
        <FlatList
          data={notes}
          renderItem={(listItem, index) => {
            return (
              <NoteItem title={listItem.item.title} index={listItem.index} />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  clickContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 20,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: '#12dc00',
    padding: 12,
    margin: 8,
    height: 50,
  },

  btnIcon: {
    height: 20,
    width: 20,
    paddingHorizontal: 4,
  },

  notesContainer: {
    marginTop: 30,
    padding: 12,
  },
});
