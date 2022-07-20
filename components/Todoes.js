// just a comment
import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View} from 'react-native';

const Todoes = (props) => {
    var doneBackground = {backgroundColor: 'lightgrey'}
    var changeBackground = props.task.done? doneBackground : null;
    return(

        <TouchableOpacity onPress={() => props.doneTask(props.task)} > 
            <View style={{...styles.todo, ...changeBackground}} >
                <Text>{props.task.value}</Text>
                <Button title="X" onPress={() => props.delTask(props.task)} />
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    todo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding:5,
      backgroundColor:'lightblue',
      marginBottom:10,
    }
  });

export default Todoes
