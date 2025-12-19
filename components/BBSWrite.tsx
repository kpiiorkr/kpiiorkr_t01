
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Post, Category } from '../types';
import { CATEGORIES } from '../constants';
import { Save, X } from 'lucide-react';

interface BBSWriteProps {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  posts?: Post[];
}

const BBSWrite: React.FC<BBSWriteProps> = ({ setPosts, posts = [] }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEdit = Boolean(id);
  const editingPost = posts.find(p => p.id === id);

  const [form, setForm] = useState({
    title: '',
    category: CATEGORIES[0] as Category,
    content: ''
  });

  useEffect(() => {
    if (isEdit && editingPost) {
      setForm({
        title: editingPost.title,
        category: editingPost.category,
        content: editingPost.content
      });
    }
  }, [isEdit, editingPost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    if (isEdit && id) {
      setPosts(prev => {
        const next = prev.map(p => 
          p.id === id ? { ...p, ...form } : p
        );
        localStorage.setItem('kpii_posts', JSON.stringify(next));
        return next;
      });
    } else {
      const newPost: Post = {
        id: Date.now().toString(),
        ...form,
        author: '관리자',
        date: new Date().toISOString().split('T')[0],
        views: 0
      };
      setPosts(prev => {
        const next = [newPost, ...prev];
        localStorage.setItem('kpii_posts', JSON.stringify(next));
        return next;
      });
    }
    navigate('/bbs');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{isEdit ? '게시물 수정' : '새 게시물 작성'}</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">분류 선택</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value as Category })}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">제목</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="제목을 입력하세요"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">내용</label>
            <textarea
              rows={15}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="내용을 입력하세요"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => navigate('/bbs')}
              className="px-6 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 flex items-center"
            >
              <X className="w-4 h-4 mr-2" /> 취소
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center font-bold"
            >
              <Save className="w-4 h-4 mr-2" /> {isEdit ? '수정 완료' : '저장하기'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BBSWrite;
