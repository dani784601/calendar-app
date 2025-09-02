import FAB from "@/src/components/common/FAB";
import { ScheduleDate } from "@/src/types/ScheduleDate";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ScheduleCard from "./ScheduleCard";

export default function ScheduleList({
  schedules,
}: {
  schedules: ScheduleDate[];
}) {
  const router = useRouter();
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ScheduleDate>) => {
      return (
        <View style={styles.cardWrapper}>
          <ScheduleCard
            id={item.id}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        </View>
      );
    },
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
    <View style={styles.wrapper}>
      <FlatList
        data={schedules}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={10}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>오늘의 일정</Text>
          </View>
        )}
        ListFooterComponent={() => <View style={styles.footer} />}
        contentContainerStyle={styles.container}
      />
      <View style={styles.fabContainer}>
        <FAB onPress={() => router.push("/modal")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    paddingHorizontal: 4,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "700",
  },
  cardWrapper: {
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    overflow: "hidden",
  },
  separator: {
    height: 12,
  },
  footer: {
    height: 12,
  },
  fabContainer: {
    position: "absolute",
    right: 16,
    bottom: 24,
  },
});
