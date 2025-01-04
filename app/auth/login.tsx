import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { ImageBackground } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Input from "@/Components/Shared/Input";
import {
  CheckIocn,
  EyeIcon,
  EyeOffIcon,
  FacebookIcon,
  GoogleIcon,
} from "@/assets/Svg/Svg";

const login = () => {
  const emailRef = React.useRef<TextInput>(null);
  const passwordRef = React.useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  let [isRememberChecked, setIsRememberChecked] = useState<Boolean>(false);
  let [isEyeHidden, setIsEyeHidden] = useState<Boolean>(true);

  const router = useRouter();

  const onSubmit = () => {
    const values = getValues();
    console.log("Email:", values.email);
    console.log("Password:", values.password);

    router.replace("/(tabs)/home");
  };
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <ImageBackground
        style={styles.styledBackground}
        source={require("./../../assets/images/loginBackground.jpg")}
      >
        <Text style={styles.styledTitle}>login</Text>
        <View style={styles.formContainer}>
          <View style={styles.formGap}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
              }}
              render={() => (
                <Input
                  ref={emailRef}
                  onSubmitEditing={() => {
                    passwordRef.current?.focus();
                  }}
                  control={control}
                  name="email"
                  placeholder={"Enter your email"}
                  errors={errors}
                  style={styles.valueInput}
                  rules={undefined}
                  width={50}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                validate: {
                  hasUppercase: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must contain at least one uppercase letter",
                },
              }}
              render={() => (
                <View>
                  <Input
                    ref={passwordRef}
                    control={control}
                    name="password"
                    placeholder={"Enter your password"}
                    errors={errors}
                    style={styles.valueInput}
                    rules={undefined}
                    secureTextEntry={isEyeHidden ? true : false}
                    width={50}
                  />
                  <TouchableOpacity
                    onPress={() => setIsEyeHidden(!isEyeHidden)}
                    style={styles.styledPasswordIcon}
                  >
                    {isEyeHidden ? <EyeOffIcon /> : <EyeIcon />}
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View style={styles.forgetPassword}>
            <Link
              href={"/auth/forgetPassword"}
              style={styles.forgetPasswordText}
            >
              Forget password ?
            </Link>
          </View>
          <Pressable
            onPress={() => setIsRememberChecked(!isRememberChecked)}
            style={styles.rememberMeContainer}
          >
            <View>
              <View
                style={[
                  styles.checkbox,
                  isRememberChecked && styles.checkboxChecked,
                ]}
              >
                {isRememberChecked && <CheckIocn color="white" />}
              </View>
            </View>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </Pressable>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>log in</Text>
          </TouchableOpacity>
          <Text style={styles.loginWithText}>Or login with</Text>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.googleButton}>
              <Text>
                <GoogleIcon />
              </Text>
              <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookButton}>
              <Text>
                <FacebookIcon />
              </Text>
              <Text style={styles.facebookButtonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don’t have an account ?</Text>
            <TouchableOpacity onPress={() => router.replace("/auth/signup")}>
              <Text style={styles.signupLink}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default login;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  styledBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: hp("10%"),
  },
  styledPasswordIcon: {
    position: "absolute",
    right: wp("5%"),
    top: hp("2.6%"),
    opacity: 0.5,
  },
  styledTitle: {
    color: "white",
    textAlign: "center",
    paddingTop: hp("17%"),
    fontSize: hp("4.5%"),
    fontFamily: "secondary",
  },
  formContainer: { width: wp("90%"), height: hp("50%") },
  formGap: { gap: hp("3%") },
  valueInput: {
    width: wp("90%"),
    height: hp("6.5%"),
    textAlign: "left",
    fontSize: hp("1.75%"),
    backgroundColor: "white",
    borderRadius: wp("3%"),
    alignItems: "center",
    alignContent: "center",
    paddingStart: wp("4.5%"),
  },
  forgetPassword: {
    alignItems: "flex-end",
    marginTop: hp("1.5%"),
  },
  forgetPasswordText: { color: "grey" },
  rememberMeContainer: {
    alignItems: "center",
    flexDirection: "row",
    maxWidth: wp("30%"),

    gap: wp("2%"),
    marginStart: wp("3%"),
  },
  checkbox: {
    backgroundColor: "white",
    height: wp("3%"),
    width: wp("3%"),
    borderWidth: wp("0.25%"),
  },
  checkboxChecked: { backgroundColor: "black" },
  rememberMeText: { color: "black", fontWeight: "500" },
  loginButton: {
    backgroundColor: "#7C42D8",
    height: wp("15%"),
    width: wp("85%"),
    alignSelf: "center",
    marginTop: hp("5%"),
    marginBottom: hp("2%"),
    borderRadius: wp("50%"),
    justifyContent: "center",
  },
  loginButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: hp("2.5%"),
    fontWeight: "bold",
  },
  loginWithText: {
    textAlign: "center",
    color: "white",
    fontSize: hp("1.5%"),
  },
  socialButtonsContainer: {
    flexDirection: "row",
    gap: wp("2%"),
    alignSelf: "center",
    marginTop: hp("2%"),
  },
  googleButton: {
    backgroundColor: "white",
    borderRadius: wp("50%"),
    height: hp("5%"),
    width: wp("33%"),
    justifyContent: "flex-start",
    paddingStart: wp("4%"),
    gap: wp("4%"),
    flexDirection: "row",
    alignItems: "center",
  },
  facebookButton: {
    backgroundColor: "#1877F2",
    borderRadius: wp("50%"),
    height: hp("5%"),
    width: wp("33%"),
    justifyContent: "flex-start",
    paddingStart: wp("4%"),
    gap: wp("2%"),
    flexDirection: "row",
    alignItems: "center",
  },
  facebookButtonText: { color: "white" },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("2%"),
    gap: wp("2%"),
  },
  signupText: {
    textAlign: "center",
    color: "white",
    fontSize: hp("1.5%"),
  },
  signupLink: {
    textAlign: "center",
    color: "white",
    fontSize: hp("1.5%"),
    fontWeight: "bold",
  },
});
