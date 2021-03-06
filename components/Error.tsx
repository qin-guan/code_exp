import {SafeAreaView} from "react-native";
import {Button, Text} from "react-native-paper";
import * as React from "react";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export default function Error(){
    const {setId} = useContext(AuthContext)

    const resetStore = () => {
        setId("")
    }

    return (
        <SafeAreaView>
            <Text>
                Unexpected error
            </Text>

            <Button onPress={resetStore}>
                Reset store
            </Button>
        </SafeAreaView>
    )
}
