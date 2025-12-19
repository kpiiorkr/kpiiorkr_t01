
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Post } from '../types';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';

interface BBSViewProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  isAdmin: boolean;
}

const BBSView: React.FC<BBSViewProps> = ({ posts, setPosts, isAdmin }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);

  useEffect(() => {
    if (post) {
      // Increment views
      const updatedPosts = posts.map(p => 
        p.id === id ? { ...p, views: p.views + 1 } : p
      );
      setPosts(updatedPosts);
      localStorage.setItem('kpii_posts', JSON.stringify(updatedPosts));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">존재하지 않는 게시물입니다.</h2>
        <Link to="/bbs" className="text-blue-600 hover:underline">목록으로 돌아가기</Link>
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const updatedPosts = posts.filter(p => p.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem('kpii_posts', JSON.stringify(updatedPosts));
      navigate('/bbs');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/bbs" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> 목록으로 돌아가기
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <header className="p-8 border-b border-gray-100 bg-gray-50/50">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-[11px] font-bold rounded mb-4 uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-6">{post.title}</h1>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-800">{post.author}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="tabular-nums">{post.date}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span>조회수 <span className="tabular-nums">{post.views}</span></span>
              </div>
              
              {isAdmin && (
                <div className="flex space-x-2">
                  <button 
                    onClick={() => navigate(`/bbs/edit/${post.id}`)}
                    className="p-2 text-gray-400 hover:text-blue-600 bg-white border border-gray-200 rounded-lg hover:border-blue-200 transition-all"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleDelete}
                    className="p-2 text-gray-400 hover:text-red-600 bg-white border border-gray-200 rounded-lg hover:border-red-200 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </header>

          <div className="p-8 md:p-12 prose prose-lg max-w-none text-gray-700 leading-relaxed min-h-[400px]">
            {post.content.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="p-8 bg-gray-50 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
            <p>본 게시물의 저작권은 한국프로세스혁신협회에 있습니다.</p>
            <div className="space-x-4">
               <span className="cursor-pointer hover:text-blue-600 font-medium">URL 복사</span>
               <span className="cursor-pointer hover:text-blue-600 font-medium">공유하기</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BBSView;
