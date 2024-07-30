import { View, Text, Image, TextInput, TouchableOpacity, FlatList} from "react-native";
import { styles } from "./style";


export function Home() {
    const Tasks: string[] = [] 
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
                />
                <TouchableOpacity 
                    style={styles.addButton}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.taskSection}>
                <View style={styles.taskHeaderInfo}>
                    <View style={{flexDirection: 'row', gap: 5,}}>
                        <Text style={styles.createInfoText}>Criadas</Text>
                        <Text style={styles.infoNumber}>0</Text>
                    </View>
                    <View style={{flexDirection: 'row', gap: 5,}}>
                        <Text style={styles.doneInfoText}>Concluídas</Text>
                        <Text style={styles.infoNumber}>0</Text>
                    </View>
                </View>
                <FlatList 
                    data={Tasks}
                    renderItem={(item) => {<Text>oi</Text>}}
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