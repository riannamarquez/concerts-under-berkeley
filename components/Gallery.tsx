const items = [
  { label: 'Fall 2025 Concert', gradient: 'linear-gradient(135deg, #667eea, #764ba2)', large: true },
  { label: 'Open Mic Night', gradient: 'linear-gradient(135deg, #f093fb, #f5576c)', large: false },
  { label: 'Jam Session', gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)', large: false },
  { label: 'Battle of the Bands', gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)', large: false },
  { label: 'Sunset Sessions', gradient: 'linear-gradient(135deg, #fa709a, #fee140)', large: true },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Relive the Moments</span>
          <h2 className="section-title">Past Highlights</h2>
        </div>
        <div className="gallery-grid">
          {items.map((item) => (
            <div key={item.label} className={`gallery-item${item.large ? ' large' : ''}`}>
              <div className="gallery-placeholder" style={{ background: item.gradient }}>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
