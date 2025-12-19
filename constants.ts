
import { Category } from './types';

export const CATEGORIES: Category[] = ['공지사항', '보도자료', '혁신사례', '칼럼', '자료실'];

export const INITIAL_POSTS = [
  {
    id: '1',
    category: '공지사항' as Category,
    title: '한국프로세스혁신협회(KPII) 공식 홈페이지 리뉴얼 안내',
    content: '보다 전문적인 정보 제공을 위해 홈페이지가 새롭게 단장되었습니다.',
    author: '관리자',
    date: '2025-01-20',
    views: 124
  },
  {
    id: '2',
    category: '혁신사례' as Category,
    title: '금융권 AI 업무 처리 자동화를 통한 프로세스 혁신 사례',
    content: '신한은행 RPA 1단계 구축사업의 핵심 성공 요인 분석...',
    author: '관리자',
    date: '2025-01-15',
    views: 342
  }
];
