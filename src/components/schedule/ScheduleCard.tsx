import { schedulesAtom, selectedScheduleAtom } from "@/src/store/atoms";
import type { ScheduleDate } from "@/src/types/ScheduleDate";
import { formatYmdLocal } from "@/src/utils/date";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { Button, StyleSheet, Text, View } from "react-native";

export default function ScheduleCard({
  id,
  title,
  date,
  description = "",
}: ScheduleDate) {
  const [schedules, setSchedules] = useAtom(schedulesAtom);
  const [, setSelectedSchedule] = useAtom(selectedScheduleAtom);
  const router = useRouter();

  const handleDelete = () => {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  const handleEdit = () => {
    setSelectedSchedule({ id, title, date, description });
    router.push("/edit-modal");
  };

  const displayDate =
    date && date.length === 10 ? date : formatYmdLocal(new Date(date));

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{displayDate}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.actions}>
        <Button title="수정" onPress={handleEdit} />
        <Button title="삭제" onPress={handleDelete} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  date: {
    color: "#666",
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  description: {
    color: "#333",
  },
  actions: {
    flexDirection: "row",
    columnGap: 12,
    marginTop: 8,
  },
});
