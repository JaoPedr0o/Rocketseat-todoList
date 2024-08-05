import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert} from "react-native";
import { styles } from "./style";

import Task from "../../components/Task";
import { useState } from "react";

export function Home() {
    const [taskList, setTask] = useState<taskProps[]>([])
    const [input, setInput] = useState('')
    const [countTask, setCountTask] = useState<number>(0)
    const [countTaskChecked, setCountTaskChecked] = useState<number>(0)

    type taskProps = {
        desc: string;
        checked: boolean;
    }

    const newTask = {desc: input, checked: false}
    function handleAddTask() {
        const taskDescs = (taskList.map(e => e.desc)) 
        if (taskDescs.includes(input) === true) {
            setInput('')
            return Alert.alert("Tarefa já encontrada na lista!")
        }
        
        setTask(prevState => [...prevState, newTask])

        if (input === '') {
            return Alert.alert("Digite o conteúdo da tarefa!")
        }

        setCountTask(prevstate => prevstate+1)
        setInput('')

    }

    function handleRemoveTask(desc: string) {
        Alert.alert("Remover da Lista", "Deseja realmente remover a tarefa da lista?",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        const index = taskList.findIndex(obj => obj.desc === desc);

                    if (index !== -1) {
                        if (taskList[index].checked === true) {
                        setCountTaskChecked(prevState => prevState - 1) 
                        } 
                    }

                    setTask(prevState => prevState.filter(task => task.desc !== desc))
                    setCountTask(prevstate => prevstate-1)
                    }
                },
            ]
        )
    }

    function checkCounterUpdate(desc: string, check: boolean) {
        const index = taskList.findIndex(obj => obj.desc === desc);

        if (index !== -1) {
            if (taskList[index].checked === false) {
                taskList[index].checked = true;
                setCountTaskChecked(prevState => prevState + 1) 
            } else {
                taskList[index].checked = false;
                setCountTaskChecked(prevState => prevState - 1) 
            }
        }

        console.log(taskList)
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/Logo.png")}/>
            </View>

            <View style={styles.addSection}>
                <TextInput 
                    style={styles.textImput} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={'#808080'}
                    onChangeText={setInput}
                    value={input}
                />
                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={handleAddTask}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.taskSection}>
                <View style={styles.taskHeaderInfo}>
                    <View style={{flexDirection: 'row', gap: 5,}}>
                        <Text style={styles.createInfoText}>Criadas</Text>
                        <Text style={styles.infoNumber}>{countTask}</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 5,}}>
                        <Text style={styles.doneInfoText}>Concluídas</Text>
                        <Text style={styles.infoNumber}>{countTaskChecked}</Text>
                    </View>
                </View>
                <FlatList 
                    scrollEnabled
                    data={taskList}
                    keyExtractor={item => item.desc}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Task
                            key={item.desc}
                            onRemove={() => handleRemoveTask(item.desc)}
                            onCheck={() => checkCounterUpdate(item.desc, item.checked)}
                            taskContent={item.desc}
                        />
                    )}
                    ListEmptyComponent={
                        <View style={styles.listEnptyContainer}>
                            <Image source={require("../../assets/Clipboard.png")} />
                            <View>
                                <Text style={styles.listEnptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles.listEnptyText}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        </View>
                    }
                />
            </View>
        </View>
    )
}