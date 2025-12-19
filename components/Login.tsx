
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

interface LoginProps {
  setIsAdmin: (val: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAdmin }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Retrieve credentials from local storage (initialized to default if not present)
    const storedPw = localStorage.getItem('kpii_admin_pw') || 'password';
    const storedId = 'admin';

    if (id === storedId && pw === storedPw) {
      setIsAdmin(true);
      sessionStorage.setItem('kpii_admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-sm text-gray-500 mt-2">한국프로세스혁신협회 관리 시스템</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">ID</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="아이디"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="password"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:transform active:scale-95"
          >
            로그인
          </button>
        </form>

        <div className="mt-8 text-center">
           <p className="text-xs text-gray-400 leading-relaxed">
             이 시스템은 승인된 관리자 전용입니다.<br />
             무단 접근 시 법적 책임이 따를 수 있습니다.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
