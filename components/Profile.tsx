
import React from 'react';
import { Mail, Phone, Calendar, BookOpen, Briefcase, Award } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fadeIn">
       <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">강승원 이사 약력</h1>
        <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Sidebar Info */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-24 border border-gray-100">
              <div className="w-40 h-40 bg-gray-200 rounded-2xl mx-auto mb-6 overflow-hidden">
                 <img src="https://picsum.photos/400/400?random=1" alt="강승원" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">강승원</h2>
              <p className="text-blue-600 font-medium text-center mb-6">이사 / 파운더</p>
              
              <div className="space-y-4 border-t border-gray-200 pt-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-3 text-gray-400" /> 1986. 07. 12.
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-3 text-gray-400" /> 010-5332-6579
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-3 text-gray-400" /> ai@aag.co.kr
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-sm text-gray-900 mb-3 uppercase tracking-wider">학력 사항</h3>
                <ul className="text-xs text-gray-500 space-y-2">
                  <li>• 가천대학교 공학박사과정(최적화 알고리즘)</li>
                  <li>• 중앙대학교 공학석사 졸업(수자원공학)</li>
                  <li>• 중앙대학교 공학사 졸업(건설환경공학)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Info */}
          <div className="w-full md:w-2/3 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600" /> 주요 활동 및 경력
              </h2>
              <ul className="space-y-4 text-gray-700 list-inside">
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span>한국프로세스혁신협회 설립</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span>기술 커뮤니티 정기 교육 운영 및 도서 집필 (www.RPAmaster.co.kr)</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span>신한은행, N.E.X.T. 차세대 시스템 구축 프로젝트(금융그룹 DS뱅킹코어 여신)</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span>LG전자, ERP PI 프로젝트, 컨설팅 부문(프로세스 마이닝) 참여</span></li>
                <li className="flex gap-3"><span className="text-blue-600 font-bold">•</span> <span>업무 처리 자동화(RPA) 시스템 및 AI/DT 컨설팅 프로젝트 다수 이행</span></li>
                <li className="flex gap-3 text-sm text-gray-500 ml-6">(건강보험 심사평가원, 티머니, 대우건설, 광동제약, 롯데백화점, LG, 삼성전자 등)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-600" /> 주요 연구 및 발표 실적
              </h2>
              <div className="space-y-6">
                {[
                  { title: "2025 한국지능시스템학회 논문 투고", detail: '"금융 서비스 최적화 ... 알고리즘과 LLM의 결합" 등' },
                  { title: "2024 KIER 한국에너지기술연구원", detail: '"프로세스 혁신을 위한 프로세스 마이닝과 RPA의 연구사례"' },
                  { title: "2023 삼성 SDC23 커뮤니티 발표", detail: '"금융권 업무처리 자동화 시스템 아키텍처와 디지털 혁신"' },
                  { title: "2023 Microsoft Power Platform MVP Seminar", detail: '자동화 주제 발표' },
                  { title: "2023 건강보험심사평가원", detail: '디지털전환과 프로세스 혁신 강의' },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-gray-100 pl-6 relative">
                    <div className="absolute w-2 h-2 bg-blue-600 rounded-full -left-[5px] top-2"></div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
