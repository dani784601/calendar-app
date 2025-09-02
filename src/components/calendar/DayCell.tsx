import { Pressable, StyleSheet, Text, View } from "react-native";

export default function DayCell({
  date,
  isSelected,
  isToday,
  isWeekend,
  isOutsideMonth,
  schedulesCount,
  onPress,
}: {
  date: Date;
  isSelected: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isOutsideMonth: boolean;
  schedulesCount?: number;
  onPress?: (date: Date) => void;
}) {
  return (
    <Pressable
      style={[
        styles.cell,
        isSelected && styles.cellSelected,
        isToday && !isSelected && styles.cellToday,
        isOutsideMonth && styles.cellOutside,
      ]}
      onPress={() => onPress && onPress(date)}
    >
      <Text
        style={[
          styles.dateText,
          isWeekend && !isSelected && !isToday && styles.dateWeekend,
          isToday && !isSelected && styles.dateToday,
          isSelected && styles.dateSelected,
        ]}
      >
        {date.getDate()}
      </Text>
      <View
        style={[
          styles.badge,
          schedulesCount && schedulesCount > 0
            ? styles.badgeActive
            : styles.badgeInactive,
        ]}
        pointerEvents="none"
      >
        <Text
          style={[
            styles.badgeText,
            schedulesCount && schedulesCount > 0
              ? styles.badgeTextActive
              : styles.badgeTextInactive,
          ]}
        >
          {schedulesCount ?? 0}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: "14.28%",
    padding: 8,
    height: 72,
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "transparent",
  },
  cellSelected: {
    backgroundColor: "#ffebee",
  },
  cellToday: {
    backgroundColor: "#e3f2fd",
  },
  cellOutside: {
    opacity: 0.5,
  },
  dateText: {
    color: "#111",
    fontWeight: "500",
  },
  dateWeekend: {
    color: "#8e24aa",
  },
  dateToday: {
    color: "#1976d2",
    fontWeight: "600",
  },
  dateSelected: {
    color: "#d32f2f",
    fontWeight: "700",
  },
  badge: {
    marginTop: 6,
    minWidth: 18,
    height: 18,
    paddingHorizontal: 6,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeActive: {
    backgroundColor: "#1976d2",
  },
  badgeInactive: {
    backgroundColor: "transparent",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  badgeTextActive: {
    color: "#fff",
  },
  badgeTextInactive: {
    color: "transparent",
  },
});
