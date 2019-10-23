import React, {useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import Todoes from './components/Todoes';
import InputView from './components/InputView';

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([
    {key: Math.random().toString(), value: 'two', done: false},
    {key: Math.random().toString(), value: 'one', done: false}
    
  ]);

  const textHandler = (newText) => {
    setTask(newText);
  }

  const add = (task) => {
    setTaskList(
      [{key: Math.random().toString(),
        value: task,
        doneBackground: null}, ...taskList]);

    setTask("");
  }

  const doneTask = (task) => {
    let doneTask = task;
    doneTask.done = !doneTask.done;
    let newList = [...taskList];
    newList.splice(taskList.indexOf(task), 1, doneTask)
   setTaskList(newList);
   console.log(newList)
  }

  const delTask = (deltask) => {
    let newList = taskList.filter(task => task !== deltask);
    setTaskList(newList);
  }

  return (
    <View style={{padding: 50}}>

      <Text>Todos</Text>
      <InputView task={task} textHandler={textHandler} add={add}/>

      <FlatList 
          data={taskList} 
          renderItem={ itemData => (
            <Todoes task={itemData.item} delTask={delTask} doneTask={doneTask}/>   
          )}
      />

    </View>
  );
}