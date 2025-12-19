
import React from 'react';
import { Target, Lightbulb, Users, Globe } from 'lucide-react';

const Activities: React.FC = () => {
  const activities = [
    {
      title: "RPA & 자동화 컨설팅",
      desc: "금융권(신한은행, 미즈호은행 등) 및 대기업(LG전자, 삼성전자)의 RPA 1~2단계 구축 및 고도화 전략을 수립합니다.",
      icon: <Target className="w-8 h-8 text-blue-500" />
    },
    {
      title: "AI/DT 교육 및 강연",
      desc: "공공기관(NST, KIER), 대학, 기업을 대상으로 디지털 전환 및 프로세스 혁신을 위한 전문 강의를 제공합니다.",
      icon: <Lightbulb className="w-8 h-8 text-amber-500" />
    },
    {
      title: "기술 커뮤니티 운영",
      desc: "3,000명 이상의 현장 실무자가 참여하는 rpaMaster 등 전문 기술 커뮤니티를 통해 지식 선순환을 이끕니다.",
      icon: <Users className="w-8 h-8 text-emerald-500" />
    },
    {
      title: "프로세스 마이닝 & 분석",
      desc: "데이터 기반의 프로세스 마이닝 기법을 도입하여 기업 운영의 비효율을 진단하고 최적화 솔루션을 제시합니다.",
      icon: <Globe className="w-8 h-8 text-indigo-500" />
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen animate-fadeIn">
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">주요활동</h1>
        <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((act, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-start gap-6 hover:shadow-md transition-shadow">
              <div className="p-4 bg-gray-50 rounded-xl">{act.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{act.title}</h3>
                <p className="text-gray-600 leading-relaxed">{act.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-12">컨설팅 & 교육 실적 (일부)</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <thead className="bg-gray-800 text-white text-sm">
                <tr>
                  <th className="px-6 py-4 text-left">연도</th>
                  <th className="px-6 py-4 text-left">기관/대상</th>
                  <th className="px-6 py-4 text-left">주요 내용</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { year: '2025', org: 'KT AX Degree', content: 'KT 직원을 위한 AX주제 VOD 강의 납품' },
                  { year: '2024', org: 'KIER 한국에너지기술연구원', content: '프로세스 마이닝과 RPA 연구사례 교육' },
                  { year: '2024', org: 'NST 국가과학기술연구회', content: '연구행정혁신 공모 심사위원 참여' },
                  { year: '2023', org: '삼성 SDC23 커뮤니티', content: '금융권 업무처리 자동화 시스템 아키텍처 발표' },
                  { year: '2023', org: 'LG CNS', content: 'RPA Open시장 컨설팅 (LG그룹 대상)' },
                  { year: '2022~', org: '신한은행', content: 'N.E.X.T. 차세대 시스템 및 RPA 구축 참여' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-500">{row.year}</td>
                    <td className="px-6 py-4 text-sm font-bold text-gray-900">{row.org}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
