
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { ChevronRight, Megaphone, FileText, Database, Settings } from 'lucide-react';

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  const latestPosts = posts.slice(0, 5);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/1600/600?grayscale')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded mb-6 uppercase tracking-widest">Global Digital Industry Insights</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              대한민국 프로세스 혁신의 <br />
              <span className="text-blue-400">중앙 허브 & 지식 아카이브</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light">
              KPII는 중립적인 시각에서 지식, 사례, 뉴스를 큐레이션하여 
              한국의 디지털 전환 실무자들이 함께 성장하는 생태계를 만듭니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-white text-blue-900 px-8 py-3 rounded-md font-bold text-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg">
                협회 비전 보기
              </Link>
              <Link to="/bbs" className="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1">
                최신 뉴스/자료
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid (KITA style portal) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: News/Notice */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
              <h2 className="text-xl font-bold flex items-center text-gray-900">
                <Megaphone className="w-5 h-5 mr-2 text-blue-600" /> 뉴스룸 & 공지사항
              </h2>
              <Link to="/bbs" className="text-sm text-gray-500 hover:text-blue-600 flex items-center">
                더보기 <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-1">
              {latestPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/bbs/${post.id}`}
                  className="group flex items-center justify-between py-3 px-2 rounded-lg hover:bg-gray-50 transition-all border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center flex-1 min-w-0 pr-4">
                    <span className="hidden sm:inline-block px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded mr-3 whitespace-nowrap">
                      {post.category}
                    </span>
                    <h3 className="text-gray-800 font-medium group-hover:text-blue-700 truncate">
                      {post.title}
                    </h3>
                  </div>
                  <span className="text-gray-400 text-xs tabular-nums">{post.date}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Stats / Activities */}
          <div className="space-y-6">
            <div className="bg-blue-900 rounded-xl shadow-sm p-6 text-white">
              <h2 className="text-lg font-bold mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2" /> 주요 영역
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20 transition-colors cursor-pointer">
                   <div className="text-2xl font-bold">RPA</div>
                   <div className="text-[10px] opacity-70">Process Automation</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20 transition-colors cursor-pointer">
                   <div className="text-2xl font-bold">AI</div>
                   <div className="text-[10px] opacity-70">Digital Transformation</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20 transition-colors cursor-pointer">
                   <div className="text-2xl font-bold">Mining</div>
                   <div className="text-[10px] opacity-70">Data Analysis</div>
                </div>
                <div className="bg-white/10 p-4 rounded-lg text-center hover:bg-white/20 transition-colors cursor-pointer">
                   <div className="text-2xl font-bold">DT</div>
                   <div className="text-[10px] opacity-70">Tech Consulting</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold mb-4 text-gray-900">협력 기관</h2>
              <div className="grid grid-cols-3 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
                 <div className="flex items-center justify-center p-2 border border-gray-100 rounded">LG</div>
                 <div className="flex items-center justify-center p-2 border border-gray-100 rounded">KT</div>
                 <div className="flex items-center justify-center p-2 border border-gray-100 rounded">신한</div>
                 <div className="flex items-center justify-center p-2 border border-gray-100 rounded">삼성</div>
                 <div className="flex items-center justify-center p-2 border border-gray-100 rounded">대림</div>
                 <div className="flex items-center justify-center p-2 border border-gray-100 rounded">건보</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">KPII의 주요 핵심 과제</h2>
            <p className="mt-4 text-gray-600">대한민국 디지털 혁신 실무자와 리더를 위한 최적의 콘텐츠를 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">지식 큐레이션</h3>
              <p className="text-gray-600 leading-relaxed">
                개인 블로그와 외부에 산발적으로 존재하는 IT 소식을 중립적인 시각에서 정리하여 제공합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">콘텐츠 아카이브</h3>
              <p className="text-gray-600 leading-relaxed">
                강연, 프로젝트, 논문, 도서 등 흩어져 있는 혁신 활동을 체계적으로 축적하여 기준점을 제시합니다.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Settings className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">실전 네트워크</h3>
              <p className="text-gray-600 leading-relaxed">
                3,000명 이상의 커뮤니티와 현장 네트워크에서 나오는 실전 사례와 데이터를 바탕으로 협력합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
