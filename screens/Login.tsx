import * as React from "react"
import {useContext, useState} from "react"

import {KeyboardAvoidingView, View} from "react-native";
import {Appbar, Button, Text, TextInput, Title} from 'react-native-paper';

import users from "../api/users"
import {AuthContext} from "../context/AuthContext";

export default function LoginScreen() {
    const authContext = useContext(AuthContext)
    const [name, setName] = useState("")

    const createUser = async () => {
        try {
            const {id} = await users.add(name)
            console.log(id)
            authContext.setId(id)
        } catch (e) {
            console.log(e)
            alert("Could not create new user")
        }
    }

    return (
        <View style={{flex: 1}}>
            <Appbar.Header>
                <Appbar.Content title="Login"/>
            </Appbar.Header>

            <KeyboardAvoidingView style={{justifyContent: "center", padding: 20}}>
                <Title>Welcome to Toohak!</Title>
                <Text style={{marginBottom: 30}}>To get started, enter your name</Text>

                <TextInput placeholder={"Alex"} value={name} onChangeText={setName}/>

                <Button mode={"outlined"} style={{marginTop: 30}} onPress={createUser}>Submit</Button>
            </KeyboardAvoidingView>
        </View>
    )
}
