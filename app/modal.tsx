import { schedulesAtom, selectedDateAtom } from "@/store/atoms";
import { formatYmdLocal } from "@/utils/date";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Modal() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [schedules, setSchedules] = useAtom(schedulesAtom);
  const [selectedDate] = useAtom(selectedDateAtom);

  const handleSave = () => {
    const newId = (schedules[schedules.length - 1]?.id ?? 0) + 1;
    const yyyyMmDd = formatYmdLocal(selectedDate ?? new Date());
    setSchedules([
      ...schedules,
      { id: newId, title: title || "새 일정", description, date: yyyyMmDd },
    ]);
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>새 일정 추가</Text>
      <Text style={styles.subTitle}>
        선택 날짜: {formatYmdLocal(selectedDate ?? new Date())}
      </Text>
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
  subTitle: { marginBottom: 8, color: "#555" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  textarea: { height: 100, marginBottom: 16 },
  actions: { flexDirection: "row", columnGap: 10 },
  actionBtn: { padding: 12 },
});
