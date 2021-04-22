import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

class DetailsScreen extends Component {
  render() {
    // console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.push("Details", {
              name: "자유게시판 반복",
            });
          }}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Go back to first screen in stack"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }
}

class HomeScreen extends Component {
  render() {
    // console.log(this.props);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="자유게시판"
          onPress={() => {
            this.props.navigation.push("Details", {
              name: "자유게시판",
            });
          }}
        />
        <Button
          title="Home 업데이트"
          onPress={() =>
            this.props.navigation.setOptions({ title: "Updated!" })
          }
        />
        <Button
          title="Home 되돌리기"
          onPress={() => this.props.navigation.setOptions({ title: "명지대" })}
        />
      </View>
    );
  }
}

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "명지대",
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
