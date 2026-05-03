'use client';

import { Icon } from '../components/Icon';
import { SERVICES } from '../data';
import { SITE } from '../config';

function fmt(n) {
  return new Intl.NumberFormat('ru-RU').format(n);
}

export function Services() {
  const handlePick = (groupId) => (e) => {
    e.preventDefault();
    history.replaceState(null, '', `#price-${groupId}`);
    window.dispatchEvent(new CustomEvent('open-pricing-group', { detail: groupId }));
    const target = document.getElementById('pricing');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="max section-pad" style={{ paddingTop: 160 }}>
      <div className="section-head">
        <div>
          <div className="eyebrow">Что мы делаем</div>
          <h2 className="serif">Услуги студии.</h2>
        </div>
        <a href="#pricing" className="tracked" style={{
          borderBottom: '1px solid var(--ink)', paddingBottom: 4, whiteSpace: 'nowrap',
        }}>Полный прайс ↗</a>
      </div>

      <div className="services-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24,
      }}>
        {SERVICES.map((s) => (
          <a
            key={s.id}
            href={`#price-${s.id}`}
            onClick={handlePick(s.id)}
            className="service-card"
            style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            aria-label={`Открыть ${s.title} в прайсе`}>
            <div>
              <div className="icon">
                <Icon name={s.icon} size={22} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
            <div className="price">
              <span className="from">от</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {fmt(s.priceFrom)} {SITE.currency}
                <Icon name="arrow-r" size={14} />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div style={{
        textAlign: 'center', marginTop: 64,
        maxWidth: 560, marginLeft: 'auto', marginRight: 'auto',
      }}>
        <span style={{
          display: 'inline-block', width: 32, height: 1,
          background: 'var(--line-2)', marginBottom: 22,
        }} />
        <p style={{
          margin: 0, color: 'var(--ink-2)',
          fontFamily: 'var(--font-serif), Cormorant Garamond, serif',
          fontStyle: 'italic', fontSize: 19, lineHeight: 1.5,
          letterSpacing: '0.005em',
        }}>
          Не нашли нужную процедуру? Напишите нам — подберём программу
          под вашу кожу и цели.
        </p>
      </div>
    </section>
  );
}
