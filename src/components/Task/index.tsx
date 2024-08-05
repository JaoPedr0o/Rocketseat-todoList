import { View, Text, Image, TouchableOpacity} from "react-native";
import { styles } from "./style";
import { useState } from "react";

type TaskProps = {
    taskContent: string;
    onRemove: () => void;
    onCheck: () => void;
}

export default function Task(props: TaskProps) {
    const [checked, setChecked] = useState(true)

    //Função para alterar o status de check para checked
    function handleChangeStatus() {
        checked ? setChecked(false) : setChecked(true)
    }

    //Função para trabalhar no counter de tarefas concluidas
    const handleCheckUpdate = () => {
        handleChangeStatus();
        props.onCheck()
    };

    return (
        <>
            {checked ? 
                <View style={styles.taskContainer}>
                    <TouchableOpacity onPress={handleCheckUpdate}>
                        <Image source={require("../../assets/check.png")} />
                    </TouchableOpacity>
                    <Text style={styles.taskText}>{props.taskContent}</Text>
                    <TouchableOpacity onPress={props.onRemove}>
                        <Image source={require("../../assets/trash.png")} />
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.taskContainerChecked}>
                    <TouchableOpacity onPress={handleCheckUpdate}>
                        <Image source={require("../../assets/checked.png")} />
                    </TouchableOpacity>
                    <Text style={styles.taskTextChecked}>{props.taskContent}</Text>
                    <TouchableOpacity onPress={props.onRemove}>
                        <Image source={require("../../assets/trash.png")} />
                    </TouchableOpacity>
                </View>      
            }
                
        </>
    )
}