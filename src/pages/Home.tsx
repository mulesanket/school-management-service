.navbar {
  width: 100%;
  background: #1e3a8a;
  color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.nav-menu {
  list-style: none;
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-menu li {
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 500;
}

.nav-menu li:hover {
  opacity: 0.8;
}