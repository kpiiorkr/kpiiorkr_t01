
import React from 'react';
import { Mail, Phone, Calendar, Briefcase, Award } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="bg-white min-h-screen animate-fadeIn">
       <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">설립자 강승원 약력</h1>
        <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Sidebar Info */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-50 rounded-3xl p-8 sticky top-24 border border-gray-100 shadow-sm">
              <div className="w-full aspect-[3/4] bg-gray-200 rounded-2xl mx-auto mb-6 overflow-hidden shadow-inner border border-gray-200">
                 <img 
                   src="input_file_0.png" 
                   alt="설립자 강승원" 
                   className="w-full h-full object-cover object-top" 
                 />
              </div>
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-1">강승원</h2>
              <p className="text-[#004b9e] font-bold text-center mb-6 uppercase tracking-widest">Founder</p>
              
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
                <ul className="text-xs text-gray-500 space-y-2 leading-relaxed">
                  <li>• 가천대학교 공학박사과정 (최적화 알고리즘)</li>
                  <li>• 중앙대학교 공학석사 졸업 (수자원공학)</li>
                  <li>• 중앙대학교 공학사 졸업 (건설환경공학)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Info */}
          <div className="w-full md:w-2/3 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-[#004b9e]" /> 주요 활동 및 경력
              </h2>
              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>한국프로세스혁신협회 설립 (http://www.KPII.or.kr)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>기술 커뮤니티 정기 교육 운영 및 도서 집필 (www.RPAmaster.co.kr)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>일본 미즈호은행 한국지점, 은행시스템 개발 및 유지보수 사업(외환, 마켓 리스크, 내부감사 EUC담당)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>케이티 통신 데이터분석 사업 참여(데이터분석가)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>새마을금고, 통합 이미지 시스템 재구축 프로젝트(신한금융그룹 DS미래성장부문 PMO담당)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>신한은행, N.E.X.T. 차세대 시스템 구축 프로젝트(신한금융그룹 DS뱅킹코어 여신담당)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>신한은행, RPA 1단계 구축사업(신한금융그룹 DS뱅킹금융팀)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>LG전자, ERP PI 프로젝트, 컨설팅 부문(프로세스 마이닝) 참여(LG엔트루컨설팅)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>파트너 연계 DT/AI사업(IBM, SYMATION, HYPERSCIENCE, SoftwareAG)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <div className="flex flex-col">
                    <span>업무 처리 자동화(RPA) 시스템 및 AI/DT 컨설팅 프로젝트 이행</span>
                    <span className="text-gray-400 text-xs mt-1">(건강보험 심사평가원, 티머니, 대우건설, 광동제약, 롯데백화점, LG, 롯데멤버스, 삼성전자)</span>
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#004b9e] font-bold">·</span> 
                  <span>LG CNS, RPA Open시장 컨설팅(LG그룹 대상)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-[#004b9e]" /> 주요 연구 및 발표 실적
              </h2>
              <div className="space-y-5">
                {[
                  { date: "2025", title: "한국지능시스템학회 논문 2편 투고", detail: "“금융 서비스 최적화 … 알고리즘과 LLM의 결합” 등" },
                  { date: "2025", title: "KIER 한국에너지기술연구원", detail: "“AI 업무 처리 자동화를 통한 프로세스 혁신 및 연구사례”" },
                  { date: "2025", title: "KT AX Degree", detail: "KT직원을 위한 AX주제 VOD 강의 납품" },
                  { date: "2024", title: "NST 국가과학기술연구회", detail: "소통 한마당 - 출연연 연구행정혁신 공모 심사위원" },
                  { date: "2024", title: "KIER 한국에너지기술연구원", detail: "\"프로세스 혁신을 위한 프로세스 마이닝과 RPA의 연구사례“" },
                  { date: "2024", title: "대림대학교 직원경쟁력 강화", detail: "대학 교직원 대상, 대학행정 혁신을 위한 RPA의 적용 사례 연구" },
                  { date: "2024", title: "건강보험심사평가원", detail: "업무 처리 자동화(RPA) 전문가 특강강사" },
                  { date: "2024", title: "컨퍼런스 주최 및 발표", detail: "RPA기반 업무 자동화 및 디지털 혁신사례 (잠실광고문화회관)" },
                  { date: "2023", title: "출연(연) 연구행정 디지털전환", detail: "전문가 평가자 참여" },
                  { date: "2023", title: "NST 연구행정혁신 대제전", detail: "심사위원 참여" },
                  { date: "2023", title: "삼성 SDC23 커뮤니티 발표", detail: "“금융권 업무처리 자동화 시스템 아키텍처와 디지털 혁신”" },
                  { date: "2023", title: "한국 프로세스 혁신협회 세미나 “Insight”", detail: "글로벌 디지털 산업 전망 (삼성전자 R&D캠퍼스)" },
                  { date: "2023", title: "Microsoft Power Platform MVP Book Seminar", detail: "자동화 주제 발표" },
                  { date: "2023", title: "건강보험심사평가원", detail: "디지털전환과 프로세스 혁신 강의" },
                ].map((item, i) => (
                  <div key={i} className="border-l-2 border-gray-100 pl-6 relative">
                    <div className="absolute w-2 h-2 bg-[#004b9e] rounded-full -left-[5px] top-2"></div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[#004b9e] font-bold text-xs">{item.date}</span>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
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
