import colors from "../themes/colors";
import React from "react";
import {Alert, SafeAreaView, TextInput, TouchableOpacity, View} from "react-native";
import {Appbar, Title} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {MaterialIcons} from "@expo/vector-icons";

export interface HeaderProps {
    title: string
    backButton: boolean
    textInput: boolean
    value: string;
    placeholder: string,
    questionNumber: number,
    points: number,

    onChangeText: (text: string) => void,
    onLeft: () => void,
    onRight: () => void,
    onNewQuestion: () => void,
    onCreate: () => void,
    onChangePoints: (points: number) => void
}

export default function Header(props: Partial<HeaderProps>) {
    const {
        points,
        title,
        backButton,
        textInput,
        onChangeText,
        value,
        placeholder,
        questionNumber,
        onLeft,
        onRight,
        onNewQuestion,
        onChangePoints,
        onCreate
    } = props

    const navigation = useNavigation()

    return (
        <View style={{backgroundColor: colors.headerBlue}}>
            <SafeAreaView>
                <View style={{padding: 10, alignItems: 'center', justifyContent: "center"}}>
                    {backButton &&
                    <Appbar.BackAction style={{padding: 0, margin: 0, position: 'absolute', alignSelf: 'flex-start'}}
                                       onPress={() => navigation.goBack()}/>}
                    <Title>{title}</Title>
                    {onCreate && (
                        <TouchableOpacity onPress={onCreate}
                                          style={{position: "absolute", alignSelf: "flex-end", right: 15}}>
                            <MaterialIcons name={"done"} style={{fontSize: 30}}/>
                        </TouchableOpacity>
                    )}
                </View>
                {questionNumber !== undefined && (
                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 15,
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <View style={{flexDirection: "row", alignItems: "center"}}>
                            {onLeft && (
                                <TouchableOpacity disabled={questionNumber === 0} onPress={onLeft}>
                                    <MaterialIcons name={"chevron-left"}
                                                   style={{fontSize: 30, opacity: questionNumber === 0 ? 0.3 : 1}}/>
                                </TouchableOpacity>
                            )}
                            <Title style={{marginHorizontal: 10}}>Question {questionNumber + 1}</Title>
                            {onRight && (
                                <TouchableOpacity onPress={onRight}>
                                    <MaterialIcons name={"chevron-right"}
                                                   style={{fontSize: 30}}/>
                                </TouchableOpacity>
                            )}
                        </View>
                        {onNewQuestion && (
                            <TouchableOpacity onPress={onNewQuestion}>
                                <MaterialIcons name={"add"}
                                               style={{fontSize: 30}}/>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
                {points && (
                    <TouchableOpacity onPress={() => {
                        if (onChangePoints) {
                            Alert.prompt("Edit points", undefined, (text) => {
                                if (text) onChangePoints(parseInt(text) ?? 10)
                            })
                        }
                    }}>
                        <Title style={{marginLeft: 15, marginTop: 15}}>{points} points</Title>
                    </TouchableOpacity>
                )}
                {textInput && (
                    <View style={{backgroundColor: colors.inputBlue, margin: 20, borderRadius: 15}}>
                        <TextInput style={{padding: 20, fontSize: 20}} value={value} onChangeText={onChangeText}
                                   placeholder={placeholder}/>
                    </View>
                )}
            </SafeAreaView>
        </View>
    )
}
