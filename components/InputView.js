import React from 'react';
import { StyleSheet, Button, View, TextInput} from 'react-native';

const InputView = (props) => {
    return(
        <View style={styles.rowView} >
            <TextInput 
                style={styles.input} 
                value={props.task} placeholder={"new task"} 
                onChangeText={props.textHandler}/>
            <Button title="add" onPress={() => props.add(props.task)} />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        width: 200,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    rowView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },

});

export default InputView;