import { schedulesAtom } from "@/src/store/atoms";
import type { ScheduleDate } from "@/src/types/ScheduleDate";
import { useAtom } from "jotai";
import { Button, Text, View } from "react-native";

export default function ScheduleCard({
  id,
  title,
  date,
  description = "",
}: ScheduleDate) {
  const [schedules, setSchedules] = useAtom(schedulesAtom);

  const handleDelete = () => {
    setSchedules(schedules.filter((schedule) => schedule.id !== id));
  };

  return (
    <View style={{ margin: 20, flex: 1 }}>
      <Text>{date}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Button title="삭제" onPress={handleDelete} />
    </View>
  );
}
