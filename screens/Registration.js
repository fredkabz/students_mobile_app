import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Registration = () => {
  const [admissionNo, setAdmissionNo] = useState("");
  const [password, setPasssword] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  const toggleShowPassword = () => {
    setShowpassword((state) => {
      return !state;
    });
  };
  const handleRegistration = () => {
    //you can call your login api here
    alert(`admission No: ${admissionNo} password: ${password}`);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={10}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <View
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                marginTop: 50,
              }}
            >
              <Image
                source={require("../assets/misc/icon.png")}
                style={styles.image}
              />
              <Text style={styles.headerText}>The East Afrian University</Text>
              <Text
                style={{ fontSize: 20, color: "green", textAlign: "center" }}
              >
                Login
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flex: 1,
                marginTop: 20,
                justifyContent: "flex-end",
                alignItems: "center",

                padding: 20,
              }}
            >
              <View style={styles.inputWrapperSingleIconLeft}>
                {/* <FontAwesome5
                  name="user-graduate"
                  size={22}
                  color={"green"}
                  cursorColor={"green"}
                /> */}
                <MaterialCommunityIcons name="school" color="green" size={22} />
                <TextInput
                  value={admissionNo}
                  onChangeText={(value) => setAdmissionNo(value)}
                  placeholder="Admission Number"
                  style={styles.inputPlain}
                  placeholderTextColor="#ccc"
                  cursorColor={"green"}
                />
              </View>

              <View style={styles.inputWrapperSingleIconLeft}>
                <View>
                  <MaterialCommunityIcons
                    name="account-lock"
                    size={25}
                    color={"green"}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <TextInput
                    value={password}
                    placeholder="Password"
                    style={styles.inputPlain}
                    secureTextEntry={showPassword ? false : true}
                    cursorColor={"green"}
                    onChangeText={(value) => setPasssword(value)}
                    placeholderTextColor="#ccc "
                  />
                </View>
                <View>
                  <TouchableWithoutFeedback onPress={toggleShowPassword}>
                    <MaterialCommunityIcons
                      name={showPassword ? "eye-off" : "eye"}
                      size={22}
                      color={"grey"}
                    />
                  </TouchableWithoutFeedback>
                </View>
              </View>

              <TouchableOpacity
                onPress={handleRegistration}
                style={styles.buttonWrapper}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    height: 130,
    width: 130,
    margin: 20,
  },
  headerText: {
    fontSize: 25,
    margin: 10,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#efefef",
    padding: 10,
    width: "99%",
    marginBottom: 10,
    outlineStyle: "none",
  },
  inputWrapperSingleIconLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#efefef",
    padding: 5,
    paddingLeft: 10,
    width: "99%",
    marginBottom: 10,
  },

  inputPlain: {
    padding: 10,
    margin: 0,
    width: "90%",
    outlineStyle: "none",
  },
  buttonWrapper: {
    width: "90%",

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "green",
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    padding: 10,
  },
});

export default Registration;
