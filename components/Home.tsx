
import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../types';
import { ChevronRight, Megaphone, FileText, Database, Settings, Quote } from 'lucide-react';

interface HomeProps {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  const latestPosts = posts.slice(0, 5);

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-[#004b9e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded mb-6 uppercase tracking-widest backdrop-blur-sm">
              Korea Process Innovation Association
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              디지털 시대의 <br />
              <span className="text-blue-300">프로세스 혁신 리더</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-light">
              일 자체의 혁신, 디지털을 이용한 혁신, 조직 문화의 혁신을 통해 <br className="hidden md:block" />
              대한민국 기업의 미래 경쟁력을 함께 만들어갑니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="bg-white text-[#004b9e] px-8 py-3 rounded-md font-bold text-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg">
                협회 소개 보기
              </Link>
              <Link to="/bbs" className="bg-transparent border-2 border-white/50 text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white/10 transition-all transform hover:-translate-y-1">
                뉴스룸 바로가기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message Section (User Requested Content) */}
      <section className="bg-white border-b border-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="강승원 설립자" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#004b9e] rounded-full flex items-center justify-center text-white shadow-xl">
                  <Quote className="w-10 h-10 opacity-50" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#004b9e] pl-6">한국프로세스혁신협회 소개</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="font-semibold text-gray-900">한국프로세스혁신협회 홈페이지를 방문해주신 여러분 진심으로 환영합니다.</p>
                <p>
                  일 자체의 혁신, 디지털을 이용한 혁신, 조직 문화의 혁신 등 모든 업무에 대한 개선과 발전을 주제로, 
                  고착화 된 비효율을 제거하고 프로세스를 개선하는 토론과 공유의 장을 지향합니다.
                </p>
                <p>
                  협회가 조직 경영과 업무 혁신에 도움이 되는 소중한 장이 되기를 바라며 
                  여러분의 믿음직한 동반자가 되도록 최선을 다하겠습니다.
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <p className="text-xl font-bold text-gray-900">한국프로세스혁신협회 설립자 <span className="text-2xl text-[#004b9e] ml-2">강 승 원</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Grid (News & Categories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: News/Notice */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
              <h2 className="text-xl font-bold flex items-center text-gray-900">
                <Megaphone className="w-5 h-5 mr-2 text-[#004b9e]" /> 뉴스룸 & 공지사항
              </h2>
              <Link to="/bbs" className="text-sm text-gray-500 hover:text-[#004b9e] flex items-center font-medium">
                더보기 <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="space-y-2">
              {latestPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/bbs/${post.id}`}
                  className="group flex items-center justify-between py-4 px-3 rounded-xl hover:bg-gray-50 transition-all border-b border-gray-50 last:border-0"
                >
                  <div className="flex items-center flex-1 min-w-0 pr-4">
                    <span className="hidden sm:inline-block px-2.5 py-1 bg-blue-50 text-[#004b9e] text-[10px] font-bold rounded mr-4 whitespace-nowrap">
                      {post.category}
                    </span>
                    <h3 className="text-gray-800 font-medium group-hover:text-[#004b9e] truncate text-base">
                      {post.title}
                    </h3>
                  </div>
                  <span className="text-gray-400 text-sm tabular-nums">{post.date}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Stats / Focus Areas */}
          <div className="space-y-6">
            <div className="bg-[#004b9e] rounded-2xl shadow-sm p-8 text-white">
              <h2 className="text-lg font-bold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2" /> 핵심 혁신 영역
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-5 rounded-xl text-center hover:bg-white/20 transition-all cursor-pointer group border border-white/5">
                   <div className="text-2xl font-bold group-hover:scale-110 transition-transform">RPA</div>
                   <div className="text-[10px] opacity-70 mt-1 uppercase tracking-wider">Process Automation</div>
                </div>
                <div className="bg-white/10 p-5 rounded-xl text-center hover:bg-white/20 transition-all cursor-pointer group border border-white/5">
                   <div className="text-2xl font-bold group-hover:scale-110 transition-transform">AI</div>
                   <div className="text-[10px] opacity-70 mt-1 uppercase tracking-wider">Transformation</div>
                </div>
                <div className="bg-white/10 p-5 rounded-xl text-center hover:bg-white/20 transition-all cursor-pointer group border border-white/5">
                   <div className="text-2xl font-bold group-hover:scale-110 transition-transform">Data</div>
                   <div className="text-[10px] opacity-70 mt-1 uppercase tracking-wider">Process Mining</div>
                </div>
                <div className="bg-white/10 p-5 rounded-xl text-center hover:bg-white/20 transition-all cursor-pointer group border border-white/5">
                   <div className="text-2xl font-bold group-hover:scale-110 transition-transform">DT</div>
                   <div className="text-[10px] opacity-70 mt-1 uppercase tracking-wider">Tech Strategy</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-lg font-bold mb-6 text-gray-900">네트워크 현황</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">전문가 커뮤니티</span>
                  <span className="font-bold text-[#004b9e]">3,000+ 명</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#004b9e] h-full w-[85%]"></div>
                </div>
                <div className="flex justify-between items-center text-sm pt-2">
                  <span className="text-gray-600">혁신 프로젝트</span>
                  <span className="font-bold text-[#004b9e]">120+ 건</span>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-400 h-full w-[60%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">KPII 핵심 미션</h2>
            <p className="mt-4 text-gray-600 text-lg">실천하는 지식, 공유하는 혁신으로 더 나은 업무 환경을 만듭니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-[#004b9e] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#004b9e] group-hover:text-white transition-all">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">지식 큐레이션</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                파편화된 디지털 소식을 중립적 시각에서 정리하여 실무자에게 꼭 필요한 정보만을 선별해 제공합니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-[#004b9e] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#004b9e] group-hover:text-white transition-all">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">콘텐츠 아카이브</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                강연, 논문, 실전 프로젝트 데이터를 체계적으로 축적하여 대한민국 프로세스 혁신의 표준을 제시합니다.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-[#004b9e] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#004b9e] group-hover:text-white transition-all">
                <Settings className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">실전 네트워크</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                국내 최대 규모의 RPA/AI 커뮤니티와 연계하여 현장의 생생한 고민과 해결책을 함께 나눕니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
