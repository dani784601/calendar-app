import { selectedDateAtom } from "@/src/store/atoms";
import { useAtom } from "jotai";
import { Pressable, Text, View } from "react-native";

export default function DateCell({
  currentCalendar,
  currentDate,
  onPress,
}: {
  currentCalendar: Date[];
  currentDate: Date;
  onPress?: (date: Date) => void;
}) {
  const [selectedDate] = useAtom(selectedDateAtom);

  const isSameYmd = (
    a: Date | null | undefined,
    b: Date | null | undefined
  ) => {
    if (!a || !b) return false;
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {currentCalendar.map((date, idx) => {
        const isSelected = isSameYmd(date, selectedDate);
        const isToday = isSameYmd(date, currentDate);
        const isOutsideMonth = date.getMonth() !== currentDate.getMonth();
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;

        return (
          <Pressable
            key={idx}
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
      })}
    </View>
  );
}
