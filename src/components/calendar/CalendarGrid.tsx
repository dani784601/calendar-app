import { schedulesAtom, selectedDateAtom } from "@/src/store/atoms";
import { useAtom } from "jotai";
import { View } from "react-native";
import DayCell from "./DayCell";

export default function CalendarGrid({
  days,
  currentDate,
  onPress,
}: {
  days: Date[];
  currentDate: Date;
  onPress?: (date: Date) => void;
}) {
  const [selectedDate] = useAtom(selectedDateAtom);
  const [schedules] = useAtom(schedulesAtom);

  const isSameYmd = (a?: Date | null, b?: Date | null) => {
    if (!a || !b) return false;
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {days.map((date, idx) => (
        <DayCell
          key={idx}
          date={date}
          isSelected={isSameYmd(date, selectedDate)}
          isToday={isSameYmd(date, currentDate)}
          isWeekend={date.getDay() === 0 || date.getDay() === 6}
          isOutsideMonth={date.getMonth() !== currentDate.getMonth()}
          schedulesCount={
            schedules.filter((s) => s.date === date.toISOString().slice(0, 10))
              .length
          }
          onPress={onPress}
        />
      ))}
    </View>
  );
}
