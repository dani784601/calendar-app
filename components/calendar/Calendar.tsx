import {
  schedulesAtom,
  selectedDateAtom,
  selectedScheduleAtom,
} from "@/store/atoms";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import CalendarGrid from "./CalendarGrid";

type NewScheduleDefaults = { title: string; description?: string };

export default function Calendar({
  currentDate,
  newScheduleDefaults,
  onPrevMonth,
  onNextMonth,
  onToday,
}: {
  currentDate: Date;
  newScheduleDefaults?: NewScheduleDefaults;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  onToday?: () => void;
}) {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const [currentCalendar, setCurrentCalendar] = useState<Date[]>([]);
  const [selectedSchedule, setSelectedSchedule] = useAtom(selectedScheduleAtom);
  const [schedules, setSchedules] = useAtom(schedulesAtom);
  const router = useRouter();

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 해당 월의 첫 번째 날의 요일 (0: 일요일, 1: 월요일, ...)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // 해당 월의 마지막 날
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    // 이전 달의 마지막 날
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const calendarDays: Date[] = [];

    // 첫 번째 주의 빈 칸들
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(
        new Date(year, month - 1, prevMonthLastDay - firstDayOfMonth + i + 1)
      );
    }

    // 해당 월의 날짜들
    for (let day = 1; day <= lastDayOfMonth; day++) {
      calendarDays.push(new Date(year, month, day));
    }

    // 나머지 칸을 다음 달 날짜로 채우기 (총 42칸)
    const totalCells = 42;
    const remaining = totalCells - calendarDays.length;
    for (let d = 1; d <= remaining; d++) {
      calendarDays.push(new Date(year, month + 1, d));
    }

    setCurrentCalendar(calendarDays);
  }, [currentDate]);

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          marginBottom: 8,
        }}
      >
        <Pressable onPress={onPrevMonth} style={{ padding: 8 }}>
          <Text>{"<"}</Text>
        </Pressable>
        <Text style={{ fontSize: 16, fontWeight: "600" }}>
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </Text>
        <Pressable onPress={onNextMonth} style={{ padding: 8 }}>
          <Text>{">"}</Text>
        </Pressable>
        <Pressable onPress={onToday} style={{ padding: 8, marginLeft: 8 }}>
          <Text>오늘</Text>
        </Pressable>
      </View>
      <CalendarGrid
        days={currentCalendar}
        currentDate={currentDate}
        onPress={(date) => setSelectedDate(date)}
      />
    </View>
  );
}
