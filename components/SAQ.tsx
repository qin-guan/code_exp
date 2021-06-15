import React, {useState} from "react";

import {Keyboard, SafeAreaView, StyleSheet, TextInput, TouchableWithoutFeedback, View} from "react-native";
import {Checkbox, Text, Title} from "react-native-paper";

import colors from "../themes/colors";

export interface SAQProps {
    editable: boolean,

    questionNumber: number,
    question: string,
    answer: string,
}

export default function SAQ(props: Partial<SAQProps>) {
    const {editable = true, questionNumber = 1, question = "Tap to edit your question!"} = props

    const [answer, setAnswer] = useState(props.answer);
    const [oneWord, setOneWord] = useState(false)
    const [numbersOnly, setNumbersOnly] = useState(false)

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View>
                <View style={styles.top}>
                    <SafeAreaView style={{alignItems: 'center', marginTop: 30}}>
                        <Text style={{fontSize: 20, marginBottom: 20}}>Question {questionNumber}</Text>
                        {editable ? (
                            <TextInput multiline style={{fontSize: 30, textAlign: "center"}}>
                                {question}
                            </TextInput>
                        ) : (
                            <Title style={{fontSize: 30, textAlign: "center"}}>
                                {question}
                            </Title>
                        )}
                    </SafeAreaView>
                </View>

                <View style={{padding: 15}}>
                    {editable && (
                        <View style={styles.setting}>
                            <Text style={{fontSize: 20}}>Settings</Text>
                            <View style={{flexDirection: "row", alignItems: "center", marginTop: 15}}>
                                <Checkbox.Android status={oneWord ? "checked" : "unchecked"}
                                                  onPress={() => setOneWord(v => !v)}/>
                                <Text>One word only</Text>
                            </View>

                            <View style={{flexDirection: "row", alignItems: "center"}}>
                                <Checkbox.Android status={numbersOnly ? "checked" : "unchecked"}
                                                  onPress={() => setNumbersOnly(v => !v)}/>
                                <Text>Numbers only</Text>
                            </View>
                        </View>
                    )}

                    <View style={{
                        backgroundColor: colors.inputBlue,
                        marginTop: 30,
                        padding: 20,
                        borderRadius: 15
                    }}>
                        <TextInput
                            style={{fontSize: 20}}
                            multiline
                            placeholder="Answer:"
                            onChangeText={setAnswer}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    top: {
        padding: 30,
        backgroundColor: colors.headerBlue,
        borderRadius: 30,
    },
    setting: {
        padding: 30,
        marginTop: 30,
        backgroundColor: colors.inputBlue,
        borderRadius: 15,
    },
});
