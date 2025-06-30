export default function Sidebar() {
  return (
    <div style={{
      width: '220px',
      padding: '30px 20px',
      background: '#000',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <h2 style={{ color: '#fff', fontSize: '24px', marginBottom: '20px' }}>TOKYO</h2>
        <ul style={{ listStyle: 'none', padding: 0, color: '#bbb' }}>
          {['Home', 'About', 'Service', 'Portfolio', 'News', 'Contact'].map(item => (
            <li key={item} style={{ margin: '15px 0', cursor: 'pointer' }}>{item}</li>
          ))}
        </ul>
      </div>
      <div style={{ color: '#555', fontSize: '12px' }}>
        
        © 2025 Sumit | Created by Sumit Singh
      </div>
    </div>
  )
}
