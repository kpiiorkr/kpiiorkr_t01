
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post, Category } from '../types';
import { CATEGORIES } from '../constants';
import { Search, PenTool } from 'lucide-react';

interface BBSListProps {
  posts: Post[];
}

const BBSList: React.FC<BBSListProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | '전체'>('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts
    .filter(p => selectedCategory === '전체' || p.category === selectedCategory)
    .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-gray-50 min-h-screen pb-20 animate-fadeIn">
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">뉴스룸 / 자료실</h1>
        <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Category Filter & Search */}
        <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('전체')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === '전체' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              전체
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="제목 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            />
          </div>
        </div>

        {/* Board List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">분류</th>
                <th className="px-6 py-4 text-left font-semibold">제목</th>
                <th className="px-6 py-4 text-center font-semibold">작성자</th>
                <th className="px-6 py-4 text-center font-semibold">날짜</th>
                <th className="px-6 py-4 text-center font-semibold">조회</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="px-6 py-4">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link to={`/bbs/${post.id}`} className="font-medium text-gray-900 hover:text-blue-700 transition-colors">
                        {post.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-500">{post.author}</td>
                    <td className="px-6 py-4 text-center text-gray-500 tabular-nums">{post.date}</td>
                    <td className="px-6 py-4 text-center text-gray-500 tabular-nums">{post.views}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400">등록된 게시물이 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BBSList;
