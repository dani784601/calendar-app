import { schedulesAtom, selectedScheduleAtom } from "@/store/atoms";
import { formatYmdLocal } from "@/utils/date";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditModal() {
  const router = useRouter();
  const [schedules, setSchedules] = useAtom(schedulesAtom);
  const [selectedSchedule, setSelectedSchedule] = useAtom(selectedScheduleAtom);

  const [title, setTitle] = useState(selectedSchedule?.title ?? "");
  const [description, setDescription] = useState(
    selectedSchedule?.description ?? ""
  );
  const [date, setDate] = useState(
    selectedSchedule ? new Date(selectedSchedule.date) : new Date()
  );

  const onChangeDate = (newDate: Date) => {
    setDate(newDate);
  };

  const handleSave = () => {
    if (!selectedSchedule) return router.back();
    const yyyyMmDd = formatYmdLocal(date);
    setSchedules(
      schedules.map((s) =>
        s.id === selectedSchedule.id
          ? { ...s, title: title || "무제", description, date: yyyyMmDd }
          : s
      )
    );
    setSelectedSchedule(null);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>일정 수정</Text>
      <TextInput
        placeholder="제목"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="설명"
        value={description}
        onChangeText={setDescription}
        multiline
        style={[styles.input, styles.textarea]}
      />

      <View style={styles.actions}>
        <Pressable onPress={() => router.back()} style={styles.actionBtn}>
          <Text>취소</Text>
        </Pressable>
        <Pressable onPress={handleSave} style={styles.actionBtn}>
          <Text>저장</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  textarea: { height: 100, marginBottom: 16 },
  actions: { flexDirection: "row", columnGap: 10, marginTop: 16 },
  actionBtn: { padding: 12 },
});
