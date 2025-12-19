
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Settings, Shield, PlusCircle, FileText, CheckCircle2 } from 'lucide-react';

const AdminPanel: React.FC = () => {
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPw !== confirmPw) {
      setMessage({ text: '비밀번호가 일치하지 않습니다.', type: 'error' });
      return;
    }
    if (newPw.length < 4) {
      setMessage({ text: '비밀번호는 4자 이상이어야 합니다.', type: 'error' });
      return;
    }
    
    localStorage.setItem('kpii_admin_pw', newPw);
    setMessage({ text: '비밀번호가 성공적으로 변경되었습니다.', type: 'success' });
    setNewPw('');
    setConfirmPw('');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-10">
           <h1 className="text-3xl font-bold text-gray-900 flex items-center">
             <Shield className="w-8 h-8 mr-3 text-blue-600" /> 관리자 대시보드
           </h1>
           <Link to="/bbs/write" className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 shadow-sm transition-all">
             <PlusCircle className="w-4 h-4 mr-2" /> 새 포스트 작성
           </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Change Password Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 col-span-1">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-gray-400" /> 관리자 비밀번호 변경
            </h2>
            
            {message && (
              <div className={`p-4 rounded-lg text-sm mb-6 flex items-center ${
                message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {message.type === 'success' && <CheckCircle2 className="w-4 h-4 mr-2" />}
                {message.text}
              </div>
            )}

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">새 비밀번호</label>
                <input
                  type="password"
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">비밀번호 확인</label>
                <input
                  type="password"
                  value={confirmPw}
                  onChange={(e) => setConfirmPw(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-900 transition-colors"
              >
                비밀번호 업데이트
              </button>
            </form>
          </div>

          {/* Quick Actions / Stats */}
          <div className="lg:col-span-2 space-y-8">
             <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-gray-400" /> 관리 메뉴 바로가기
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <Link to="/bbs" className="p-6 border border-gray-100 rounded-xl hover:bg-blue-50 transition-all flex items-center justify-between group">
                      <div>
                        <div className="font-bold text-gray-900">게시물 관리</div>
                        <div className="text-sm text-gray-500">모든 게시물 보기 및 관리</div>
                      </div>
                      <PlusCircle className="w-5 h-5 text-gray-300 group-hover:text-blue-500" />
                   </Link>
                   <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 opacity-50 cursor-not-allowed">
                      <div className="font-bold text-gray-900">방문자 통계</div>
                      <div className="text-sm text-gray-500">준비 중인 기능입니다.</div>
                   </div>
                   <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 opacity-50 cursor-not-allowed">
                      <div className="font-bold text-gray-900">회원 관리</div>
                      <div className="text-sm text-gray-500">준비 중인 기능입니다.</div>
                   </div>
                   <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 opacity-50 cursor-not-allowed">
                      <div className="font-bold text-gray-900">시스템 설정</div>
                      <div className="text-sm text-gray-500">준비 중인 기능입니다.</div>
                   </div>
                </div>
             </div>

             <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
               <h3 className="text-lg font-bold text-blue-900 mb-2">관리자 가이드</h3>
               <p className="text-blue-800 text-sm leading-relaxed">
                 1. 새 소식이나 혁신 사례가 있을 경우 뉴스룸 메뉴를 통해 업로드하십시오.<br />
                 2. 모든 업로드는 관리자 계정으로만 가능합니다.<br />
                 3. 보안을 위해 초기 비밀번호(password)를 반드시 변경하시기 바랍니다.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
