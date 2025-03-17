import { forwardRef } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Controller } from "react-hook-form";

interface InputProps {
  placeholder: string;
  control: any;
  name: string;
  rules: any;
  errors: {
    [key: string]: any;
  };
  containerStyle?: any;
  style?: any;
  icon?: JSX.Element;
  title?: string;
  width?: number;
  onSubmitEditing?: any;
  secureTextEntry?: boolean;
  centerContent?: boolean;
}

const Input = forwardRef<TextInput, InputProps>(
  (
    {
      placeholder,
      control,
      name,
      rules,
      errors,
      containerStyle,
      style,
      icon,
      title,
      width = 100,
      onSubmitEditing,
      secureTextEntry = false,
      centerContent = false,
    },
    ref
  ) => {
    return (
      <View>
        {title ? <Text style={styles.inputLabel}>{title}</Text> : null}
        <View style={[styles.container, containerStyle, style]}>
          <Controller
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                ref={ref}
                placeholder={placeholder}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={[
                  styles.input,
                  {
                    width: icon ? wp(`${width}% - 50`) : wp(`${width}%`),
                  },
                  centerContent && styles.centeredText,
                ]}
                placeholderTextColor={"#939393b4"}
                onSubmitEditing={onSubmitEditing}
                secureTextEntry={secureTextEntry}
                textAlign={centerContent ? "center" : "left"}
              />
            )}
            name={name}
          />
          {icon ? icon : null}
        </View>
        {errors[name] && (
          <Text style={styles.error}>{errors[name].message}</Text>
        )}
      </View>
    );
  }
);

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: hp("7.25%"),
    backgroundColor: "#F2F2F2",
    paddingHorizontal: wp("3"),
  },
  input: {
    fontSize: wp("4%"),
    width: "100%",
    color: "#121212",
    flex: 1,
  },
  centeredText: {
    textAlign: "center",
    textAlignVertical: "center",
  },
  inputLabel: {
    fontSize: wp("5.5%"),
    color: "#666666",
    marginBottom: hp("1%"),
    textAlign: "left",
  },
  error: {
    color: "#ffffff",
    fontSize: wp("3.5%"),
    marginTop: hp("1%"),
    textAlign: "left",
    paddingStart: wp("5%"),
  },
});
