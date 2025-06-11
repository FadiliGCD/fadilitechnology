// components/ThemeToggle.js
export default function ThemeToggle({ isDark, toggleDark }) {
  return (
    <button
      onClick={toggleDark}
      style={{
        position: 'absolute',
        top: 20,
        right: 20,
        background: '#00000088',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        cursor: 'pointer',
        zIndex: 10
      }}
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
