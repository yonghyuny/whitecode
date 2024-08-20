// 버튼 타입정의
export type ButtonProps = {
  onClick: () => void;
  text: '등록' | '취소';
};

// Month 드롭박스 타입정의
export type MonthProps = {
  value: number;
  label: string;
};

// Day 드롭박스 타입정의
export type DayProps = {
  value: number;
  label: string;
};

// 사이드바 메뉴 리스트 타입정의
export type SidebarMenuLinkType = {
  name: string;
  href: string;
  icon: React.ComponentType<{ sx?: { color: string } }>;
};

// 사이드바 타이틀 타입 정의
export type SidebarMenuDataType = {
  title: string;
  icon: React.ComponentType<{ sx?: { color: string } }>;
  links: SidebarMenuLinkType[];
};

