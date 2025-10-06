// Apply theme before paint (no flash)
(function () {
  const ls = 'theme';
  const stored = localStorage.getItem(ls);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (prefersDark ? 'dark' : 'light');
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
  // expose helpers
  window.__setTheme = (t) => {
    localStorage.setItem(ls, t);
    document.documentElement.classList.toggle('dark', t === 'dark');
  };
  window.__toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(ls, isDark ? 'dark' : 'light');
  };
})();
