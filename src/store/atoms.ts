import { atom } from "jotai";
import { ScheduleDate } from "../types/ScheduleDate";

const selectedDateAtom = atom<Date | null>(null);

export const schedulesAtom = atom<ScheduleDate[]>([
  {
    date: "2025-01-15",
    description:
      "신규 프로젝트 제안서 발표\n장소: 강남구 테헤란로 123\n참석자: 김과장, 이대리",
    id: 1,
    title: "거래처 A사 미팅",
  },
  {
    date: "2025-01-15",
    description: "서울역 지점 시설 점검\n점검 항목: 안전설비, 전기시설",
    id: 2,
    title: "현장 점검",
  },
  {
    date: "2025-01-20",
    description: "B사 계약 갱신 협의\n준비물: 계약서, 제품 카탈로그",
    id: 3,
    title: "고객사 방문",
  },
]);

const selectedScheduleAtom = atom<ScheduleDate | null>(null);

export { selectedDateAtom, selectedScheduleAtom };
