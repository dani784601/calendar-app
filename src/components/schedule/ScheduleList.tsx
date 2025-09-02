import { ScheduleDate } from "@/src/types/ScheduleDate";
import { useCallback } from "react";
import { FlatList } from "react-native";
import ScheduleCard from "./ScheduleCard";

export default function ScheduleList({
  schedules,
}: {
  schedules: ScheduleDate[];
}) {
  const renderItem = useCallback(
    ({ item }: { item: ScheduleDate }) => (
      <ScheduleCard
        id={item.id}
        title={item.title}
        date={item.date}
        description={item.description}
      />
    ),
    []
  );

  const keyExtractor = useCallback(
    (item: ScheduleDate) => item.id.toString(),
    []
  );

  if (schedules === null) {
    return;
  }
  return (
    <FlatList
      data={schedules}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      windowSize={10}
      initialNumToRender={10}
    />
  );
}
