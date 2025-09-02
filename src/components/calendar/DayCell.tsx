import { Pressable, Text } from "react-native";

export default function DayCell({
  date,
  isSelected,
  isToday,
  isWeekend,
  isOutsideMonth,
  onPress,
}: {
  date: Date;
  isSelected: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isOutsideMonth: boolean;
  onPress?: (date: Date) => void;
}) {
  return (
    <Pressable
      style={{
        width: "14.28%",
        padding: 8,
        alignItems: "center",
        borderRadius: 8,
        backgroundColor: isSelected
          ? "#ffebee"
          : isToday
          ? "#e3f2fd"
          : "transparent",
        opacity: isOutsideMonth ? 0.5 : 1,
      }}
      onPress={() => onPress && onPress(date)}
    >
      <Text
        style={{
          color: isSelected
            ? "#d32f2f"
            : isToday
            ? "#1976d2"
            : isWeekend
            ? "#8e24aa"
            : "#111",
          fontWeight: isSelected ? "700" : isToday ? "600" : "500",
        }}
      >
        {date.getDate()}
      </Text>
    </Pressable>
  );
}
