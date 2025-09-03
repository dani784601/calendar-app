import { Pressable, Text, ViewStyle } from "react-native";

export default function FAB({
  onPress,
  label = "+",
  style,
}: {
  onPress: () => void;
  label?: string;
  style?: ViewStyle;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: "#1976d2",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
        ...style,
      }}
    >
      <Text style={{ color: "#fff", fontSize: 28, marginTop: -2 }}>
        {label}
      </Text>
    </Pressable>
  );
}
