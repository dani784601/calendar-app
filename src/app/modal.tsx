import { schedulesAtom, selectedDateAtom } from "@/src/store/atoms";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Modal() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [schedules, setSchedules] = useAtom(schedulesAtom);
  const [selectedDate] = useAtom(selectedDateAtom);

  const handleSave = () => {
    const newId = (schedules[schedules.length - 1]?.id ?? 0) + 1;
    const yyyyMmDd = (selectedDate ?? new Date()).toISOString().slice(0, 10);
    setSchedules([
      ...schedules,
      { id: newId, title: title || "새 일정", description, date: yyyyMmDd },
    ]);
    router.back();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 12 }}>
        새 일정 추가
      </Text>
      <Text style={{ marginBottom: 8, color: "#555" }}>
        선택 날짜: {(selectedDate ?? new Date()).toISOString().slice(0, 10)}
      </Text>
      <TextInput
        placeholder="제목"
        value={title}
        onChangeText={setTitle}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 8,
          marginBottom: 10,
        }}
      />
      <TextInput
        placeholder="설명"
        value={description}
        onChangeText={setDescription}
        multiline
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          borderRadius: 8,
          height: 100,
          marginBottom: 16,
        }}
      />
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Pressable onPress={() => router.back()} style={{ padding: 12 }}>
          <Text>취소</Text>
        </Pressable>
        <Pressable onPress={handleSave} style={{ padding: 12 }}>
          <Text>저장</Text>
        </Pressable>
      </View>
    </View>
  );
}
