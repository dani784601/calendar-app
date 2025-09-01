import { Text, View, Pressable} from "react-native";
import {useState, useEffect} from "react";

export default function Index() {
    const [selectedDay, setSelectedDay] = useState(new Date());
    const [calendar, setCalender] = useState([]);
    const weekOfDay = ["일","월","화","수","목","금","토"];
    
    const generateCell = (day: selectedDay) => {
        const dateCell = [];
        const firstDay = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 1);
        const firstWeekOfDay = firstDay.getDay();
        const lastDay = new Date(selectedDay.getFullYear(), selectedDay.getMonth(), 0);
        
        for(let i = 1; i <= lastDay.getDate(); i++){
            dateCell.push(i);
        }
        for(let j = firstWeekOfDay; j > 0; j--){
            dateCell.unshift(0);
        }
        for(let k = dateCell.length; k < 42; k++){
            dateCell.push(0);
        }
        return dateCell;
    }
    
    useEffect(() => {
        setCalender(() => generateCell(calendar));
        console.table(calendar);
    }, [selectedDay]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Pressable onPress={()=> setSelectedDay(prev => new Date(prev.getFullYear(), prev.getMonth()-1))}><Text>{"<"}</Text></Pressable>
        <Text>{selectedDay.toLocaleString()}</Text>
        <Pressable onPress={() => setSelectedDay(prev => new Date(prev.getFullYear(), prev.getMonth()+1))}><Text>{">"}</Text></Pressable>
        {calendar}
    </View>
  );
}
