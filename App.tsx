
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Activities from './components/Activities';
import Profile from './components/Profile';
import BBSList from './components/BBSList';
import BBSView from './components/BBSView';
import BBSWrite from './components/BBSWrite';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import { Post } from './types';
import { INITIAL_POSTS } from './constants';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  // Initialize data
  useEffect(() => {
    const savedPosts = localStorage.getItem('kpii_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(INITIAL_POSTS);
      localStorage.setItem('kpii_posts', JSON.stringify(INITIAL_POSTS));
    }

    const sessionAdmin = sessionStorage.getItem('kpii_admin_auth');
    if (sessionAdmin === 'true') {
      setIsAdmin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('kpii_admin_auth');
  };

  return (
    <HashRouter>
      <Layout isAdmin={isAdmin} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bbs" element={<BBSList posts={posts} />} />
          <Route path="/bbs/:id" element={<BBSView posts={posts} setPosts={setPosts} isAdmin={isAdmin} />} />
          <Route 
            path="/bbs/write" 
            element={isAdmin ? <BBSWrite setPosts={setPosts} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/bbs/edit/:id" 
            element={isAdmin ? <BBSWrite setPosts={setPosts} posts={posts} /> : <Navigate to="/login" />} 
          />
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} />} />
          <Route 
            path="/admin" 
            element={isAdmin ? <AdminPanel /> : <Navigate to="/login" />} 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
