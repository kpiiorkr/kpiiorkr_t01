
export type Category = '공지사항' | '보도자료' | '혁신사례' | '칼럼' | '자료실';

export interface Post {
  id: string;
  category: Category;
  title: string;
  content: string;
  author: string;
  date: string;
  views: number;
}

export interface AdminUser {
  id: string;
  password: string;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Activities = 'activities',
  Profile = 'profile',
  BBS = 'bbs',
  BBSView = 'bbs-view',
  BBSWrite = 'bbs-write',
  Login = 'login',
  AdminPanel = 'admin-panel'
}
