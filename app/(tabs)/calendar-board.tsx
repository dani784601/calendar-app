import Calendar from "@/components/calendar/Calendar";
import FAB from "@/components/common/FAB";
import ScheduleList from "@/components/schedule/ScheduleList";
import { schedulesAtom, selectedDateAtom } from "@/store/atoms";
import { ScheduleDate } from "@/types/ScheduleDate";
import { formatYmdLocal } from "@/utils/date";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
export default function CalendarBoard() {
  const [selectedDate] = useAtom(selectedDateAtom);
  const [schedules] = useAtom(schedulesAtom);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleDate[]>([]);

  useEffect(() => {
    if (!selectedDate) {
      setSelectedSchedule(schedules);
      return;
    }

    const yyyyMmDd = formatYmdLocal(selectedDate);

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
        <FAB onPress={() => router.push("/modal")} />
      </View>
    </SafeAreaView>
  );
}
