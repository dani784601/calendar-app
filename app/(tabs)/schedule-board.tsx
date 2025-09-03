import ScheduleList from "@/components/schedule/ScheduleList";
import { schedulesAtom } from "@/store/atoms";
import { useAtom } from "jotai";
import { SafeAreaView } from "react-native";
export default function ScheduleBoard() {
  const [schedules] = useAtom(schedulesAtom);
  return (
    <SafeAreaView>
      <ScheduleList schedules={schedules} />
    </SafeAreaView>
  );
}
