import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

const appointments = [
  {
    id: 0,
    date: new Date(),
    title: "오전 3시 30분",
  },
];

export default function Index() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [calendar, setCalender] = useState([]);
  const weekOfDay = ["일", "월", "화", "수", "목", "금", "토"];

  const generateCell = (day: selectedDay) => {
    const dateCell = [];
    const firstDay = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth(),
      1
    );
    const firstWeekOfDay = firstDay.getDay();
    const lastDay = new Date(
      selectedDay.getFullYear(),
      selectedDay.getMonth(),
      0
    );

    for (let i = 1; i <= lastDay.getDate(); i++) {
      dateCell.push(i);
    }
    for (let j = firstWeekOfDay; j > 0; j--) {
      dateCell.unshift(0);
    }
    for (let k = dateCell.length; k < 42; k++) {
      dateCell.push(0);
    }
    return dateCell;
  };

  useEffect(() => {
    setCalender(() => generateCell(calendar));
    console.table(calendar);
  }, [selectedDay]);
  return (
    <View>
      <Pressable
        onPress={() =>
          setSelectedDay(
            (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1)
          )
        }
      >
        <Text>{"<"}</Text>
      </Pressable>
      <Text>{selectedDay.toLocaleString()}</Text>
      <Pressable
        onPress={() =>
          setSelectedDay(
            (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1)
          )
        }
      >
        <Text>{">"}</Text>
      </Pressable>
      <View
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: "repeat(6, 1fr)",
          gap: 10,
          width: "100%",
          height: "100%",
          padding: 12,
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        {weekOfDay.map((el, idx) => {
          return (
            <Text style={{ textAlign: "center" }} key={idx}>
              {el}
            </Text>
          );
        })}
        {calendar.map((el, idx) => {
          return (
            <Pressable
              key={idx}
              onPress={() =>
                setSelectedDay(
                  new Date(
                    selectedDay.getFullYear(),
                    selectedDay.getMonth(),
                    el
                  )
                )
              }
            >
              <Text
                style={{
                  textAlign: "center",
                  color: selectedDay.getDate() === el ? "red" : "black",
                }}
              >
                {el}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
