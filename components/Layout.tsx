
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, ChevronDown, Search } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  isAdmin: boolean;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isAdmin, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: '협회소개', path: '/about' },
    { name: '주요활동', path: '/activities' },
    { name: '설립자 강승원', path: '/profile' },
    { name: '뉴스룸/자료실', path: '/bbs' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Utility Bar */}
      <div className="bg-white border-b border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-end space-x-6 text-xs text-gray-500">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <a href="#" className="hover:text-blue-600">English</a>
          {isAdmin ? (
            <>
              <Link to="/admin" className="text-blue-700 font-semibold">Admin Panel</Link>
              <button onClick={onLogout} className="flex items-center hover:text-red-600">
                <LogOut className="w-3 h-3 mr-1" /> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-600 flex items-center">
              <User className="w-3 h-3 mr-1" /> Admin Login
            </Link>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <div className="text-2xl font-black tracking-tighter text-blue-800">
                   KPII <span className="text-gray-400 font-light mx-1">|</span> <span className="text-lg font-bold text-gray-800">한국프로세스혁신협회</span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-10 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-blue-700 border-b-2 border-blue-700'
                      : 'text-gray-700 hover:text-blue-600'
                  } px-1 pt-1 text-base font-semibold transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center text-gray-400 cursor-pointer hover:text-blue-600">
                <Search className="w-5 h-5" />
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-2" />
              {isAdmin ? (
                <button onClick={() => { onLogout(); setIsMobileMenuOpen(false); }} className="block w-full text-left px-3 py-3 text-base font-medium text-red-600 hover:bg-red-50">Logout</button>
              ) : (
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-blue-600">Admin Login</Link>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">KPII 한국프로세스혁신협회</h3>
              <p className="text-sm leading-relaxed mb-4 max-w-md">
                프로세스 마이닝, RPA, AI/DT 혁신을 통해 기업과 사회의 가치를 높이는 지식 생태계를 구축합니다. 
                전문가 네트워크와 현장 중심의 사례 공유로 국내 최고의 프로세스 혁신 허브가 되겠습니다.
              </p>
              <div className="text-xs text-gray-500 space-y-1">
                <p>주소: 서울특별시 송파구 잠실동 인근 (협의회 활동 중심)</p>
                <p>연락처: 010-5332-6579 | Email: ai@aag.co.kr</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white">협회소개</Link></li>
                <li><Link to="/activities" className="hover:text-white">주요활동</Link></li>
                <li><Link to="/bbs" className="hover:text-white">뉴스룸/자료실</Link></li>
                <li><a href="http://www.RPAmaster.co.kr" target="_blank" className="hover:text-white">RPA Master 커뮤니티</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Admin</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/login" className="hover:text-white">관리자 로그인</Link></li>
                <li><a href="#" className="hover:text-white">이용약관</a></li>
                <li><a href="#" className="hover:text-white text-blue-400">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2025 Korea Process Innovation Association (KPII). All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
               <span className="cursor-pointer hover:text-white">Twitter</span>
               <span className="cursor-pointer hover:text-white">LinkedIn</span>
               <span className="cursor-pointer hover:text-white">YouTube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
