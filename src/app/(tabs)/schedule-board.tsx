import { useAtom } from "jotai";
import { SafeAreaView } from "react-native";
import ScheduleList from "../../components/schedule/ScheduleList";
import { schedulesAtom } from "../../store/atoms";
export default function ScheduleBoard() {
  const [schedules, setSchedules] = useAtom(schedulesAtom);
  return (
    <SafeAreaView>
      <ScheduleList schedules={schedules} />
    </SafeAreaView>
  );
}
