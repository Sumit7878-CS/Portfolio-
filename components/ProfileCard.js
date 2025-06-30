export default function ProfileCard() {
  return (
    <div style={{
      padding: '60px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    }}>
      <img src="/profile.jpg" alt="Sumit Singh"
        style={{ borderRadius: '50%', width: '160px', border: '4px solid #fff' }} />
      <h1 style={{ marginTop: '25px', fontSize: '28px', color: '#fff' }}>Sumit Singh</h1>
      <p style={{ maxWidth: '450px', textAlign: 'center', color: '#bbb', marginTop: '10px', fontSize: '16px' }}>
        Passionate about technology and innovation, I thrive on learning and building impactful digital solutions.
Focused on growth, creativity, and turning ideas into real world success

      </p>
      <div style={{ marginTop: '20px', display: 'flex', gap: '15px', fontSize: '20px' }}>
        <span title="Website">🌐</span>
        <span title="Twitter">🐦</span>
        <span title="Instagram">📷</span>
        <span title="TikTok">🎵</span>s
      </div>
    </div>
  )
}
