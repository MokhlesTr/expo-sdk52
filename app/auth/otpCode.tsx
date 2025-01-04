import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useRef } from "react";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RefreshIcon } from "@/assets/Svg/Svg";

const OtpCode = () => {
  const inputsRef = useRef<(TextInput | null)[]>([]);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
    },
  });

  const router = useRouter();

  const onSubmit = () => {
    const values = getValues();
    const otp = `${values.digit1}${values.digit2}${values.digit3}${values.digit4}`;
    console.log("OTP Code:", otp);
  };

  const handleNext = (index: number, value: string) => {
    if (value.length === 1 && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
    //@ts-ignore
    setValue(`digit${index + 1}`, value);
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <ImageBackground
        style={styles.styledBackground}
        source={require("./../../assets/images/forgetPassBackground.jpg")}
      >
        <Text style={styles.styledTitle}>Verify</Text>
        <View style={styles.formContainer}>
          <View style={styles.otpContainer}>
            <FlatList
              data={["digit1", "digit2", "digit3", "digit4"]}
              horizontal
              //   keyExtractor={(item) => item}
              renderItem={({ item, index }) => (
                <Controller
                  name={item}
                  control={control}
                  rules={{
                    required: "This field is required",
                    pattern: {
                      value: /^[0-9]$/,
                      message: "Invalid digit",
                    },
                  }}
                  render={({ field: { value, onChange } }) => (
                    <TextInput
                      ref={(el) => (inputsRef.current[index] = el)}
                      style={[
                        styles.otpInput,
                        errors[item] && styles.errorInput,
                      ]}
                      keyboardType="number-pad"
                      maxLength={1}
                      value={value}
                      onChangeText={(text) => {
                        onChange(text);
                        handleNext(index, text);
                      }}
                      textAlign="center"
                    />
                  )}
                />
              )}
            />
          </View>

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Resend code</Text>
            <RefreshIcon />
          </View>

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Verify</Text>
          </TouchableOpacity>

          <View style={styles.notReceivedContainer}>
            <Text style={styles.notReceivedText}>Didn’t receive OTP?</Text>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default OtpCode;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  styledBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: hp("10%"),
  },
  styledTitle: {
    color: "white",
    textAlign: "center",
    paddingTop: hp("17%"),
    fontSize: hp("4.5%"),
    fontFamily: "secondary",
  },
  formContainer: { width: wp("90%"), height: hp("50%") },
  otpContainer: {
    flexDirection: "row",
    marginBottom: hp("2%"),
    marginHorizontal: wp("10%"),
  },
  otpInput: {
    width: wp("15%"),
    height: hp("6.5%"),
    backgroundColor: "white",
    borderRadius: wp("3%"),
    fontSize: hp("3%"),
    color: "#121212",
    textAlignVertical: "center",
    marginHorizontal: wp("1.5%"),
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  errorInput: {
    borderColor: "red",
  },
  resendContainer: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  resendText: {
    color: "white",
    fontSize: hp("1.61%"),
    fontWeight: "600",
  },
  loginButton: {
    backgroundColor: "#7C42D8",
    height: wp("15%"),
    width: wp("85%"),
    alignSelf: "center",
    marginTop: hp("3.5%"),
    marginBottom: hp("2.5%"),
    borderRadius: wp("50%"),
    justifyContent: "center",
  },
  loginButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: hp("2.5%"),
    fontWeight: "bold",
  },
  notReceivedContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: hp("1%"),
  },
  notReceivedText: {
    color: "white",
    fontSize: hp("1.61%"),
    fontWeight: "600",
  },
});
