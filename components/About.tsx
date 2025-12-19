
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white animate-fadeIn">
      {/* Subpage Header */}
      <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">협회소개</h1>
        <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-20">
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-600 mr-4"></span> 인사말
          </h2>
          <div className="prose prose-lg text-gray-700 leading-loose">
            <p>
              안녕하십니까? 한국프로세스혁신협회(KPII) 홈페이지를 방문해 주셔서 감사합니다.
            </p>
            <p>
              현재 우리 사회는 인공지능과 자동화 기술이 결합된 극심한 디지털 전환의 시대를 살아가고 있습니다.
              하지만 기술의 화려함 뒤에 실제 비즈니스 프로세스가 어떻게 변화하고, 어떻게 최적화되어야 하는지에 대한 
              본질적인 고민과 사례 공유는 여전히 부족한 실정입니다.
            </p>
            <p>
              KPII는 단순한 기술 도입을 넘어, <strong>'한국 프로세스 혁신의 공식 허브이자 전문 매체'</strong>로서
              중립적인 시각에서 지식과 사례를 큐레이션하여 제공하고자 합니다.
            </p>
          </div>
        </section>

        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-600 mr-4"></span> 비전 (Vision)
            </h2>
            <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-600">
              <p className="text-xl font-bold text-blue-900 mb-2">"한국판 PMI 본부이자 실전 지침서"</p>
              <p className="text-gray-700">실무자와 리더들이 매주 한 번은 꼭 들어와 정보를 얻는 디지털 혁신 연대기(Chronicle)가 되겠습니다.</p>
            </div>
          </div>
          <div>
             <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-600 mr-4"></span> 미션 (Mission)
            </h2>
            <div className="bg-indigo-50 p-8 rounded-2xl border-l-4 border-indigo-600">
              <ul className="space-y-3 text-gray-700">
                <li>• 흩어진 혁신 사례의 체계적 아카이브 구축</li>
                <li>• 3,000명 이상 규모의 전문가 네트워크 활성화</li>
                <li>• 중립적 시각의 전문 뉴스 및 매거진 발행</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-600 mr-4"></span> 주요 상위 개념
          </h2>
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
            <p className="text-lg text-gray-800 text-center italic font-serif">
              "KPII = 한국 프로세스 혁신의 <span className="text-blue-700 font-bold">PMI + Harvard Business Review</span>"
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-blue-600 font-bold text-3xl mb-2">Portal</div>
                <p className="text-sm text-gray-500">정보의 관문</p>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-3xl mb-2">Magazine</div>
                <p className="text-sm text-gray-500">지식의 깊이</p>
              </div>
              <div>
                <div className="text-blue-600 font-bold text-3xl mb-2">Textbook</div>
                <p className="text-sm text-gray-500">실전의 교과서</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
