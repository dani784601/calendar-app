import Calendar from "@/src/components/calendar/Calendar";
import ScheduleList from "@/src/components/schedule/ScheduleList";
import { schedulesAtom, selectedDateAtom } from "@/src/store/atoms";
import { ScheduleDate } from "@/src/types/ScheduleDate";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

export default function CalendarBoard() {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [schedules, setSchedules] = useAtom(schedulesAtom);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleDate[]>([]);

  useEffect(() => {
    if (!selectedDate) {
      setSelectedSchedule(schedules);
      return;
    }

    const yyyyMmDd = selectedDate.toISOString().slice(0, 10); // 'YYYY-MM-DD'

    const filtered = schedules.filter((schedule) => schedule.date === yyyyMmDd);
    setSelectedSchedule(filtered);
  }, [currentDate, schedules, selectedDate]);

  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Calendar
        currentDate={currentDate}
        onPrevMonth={() =>
          setCurrentDate(
            (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
          )
        }
        onNextMonth={() =>
          setCurrentDate(
            (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
          )
        }
        onToday={() => setCurrentDate(new Date())}
      />
      <ScheduleList schedules={selectedSchedule} />
      <View style={{ position: "absolute", right: 16, bottom: 24 }}>
        <Pressable
          onPress={() => router.push("/modal")}
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
          }}
        >
          <Text style={{ color: "#fff", fontSize: 28, marginTop: -2 }}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
