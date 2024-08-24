import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarMenuItems = [
  {
    ListMenuTitle: { title: '기사님 관리', icon: LocalShippingIcon },
    ListMenuItems: {
      links: [
        { name: '리스트 보기', href: '/engineer/e_list', icon: FormatListBulletedIcon },
        { name: '등록하기', href: '/engineer/e_register', icon: PlaylistAddIcon },
        { name: '수정하기', href: '/engineer/e_modify', icon: SettingsIcon },
      ],
    },
  },
  {
    ListMenuTitle: { title: '회원 관리', icon: PeopleIcon },
    ListMenuItems: {
      links: [
        { name: '리스트 보기', href: '/customers/c_list', icon: FormatListBulletedIcon },
        { name: '등록하기', href: '/customers/c_register', icon: PlaylistAddIcon },
        { name: '수정하기', href: '/customers/c_modify', icon: SettingsIcon },
      ],
    },
  },
  {
    ListMenuTitle: { title: '스케줄', icon: EditCalendarIcon },
    ListMenuItems: {
      links: [
        { name: '리스트 보기', href: '/schedule/s_list', icon: FormatListBulletedIcon },
        { name: '추가하기', href: '/schedule/s_register', icon: PlaylistAddIcon },
        { name: '수정하기', href: '/schedule/s_modify', icon: SettingsIcon },
      ],
    },
  },
  {
    ListMenuTitle: { title: '매출 관리', icon: TrendingUpIcon },
    ListMenuItems: {
      links: [
        { name: '일자별 매출', href: '/sales/daily', icon: FormatListBulletedIcon },
        { name: '주간 매출', href: '/sales/weekly', icon: PlaylistAddIcon },
        { name: '월별 매출', href: '/sales/monthly', icon: SettingsIcon },
      ],
    },
  },
];
