import { SITE } from '../config';

export function Footer() {
  return (
    <footer style={{
      background: 'var(--cream-2)', marginTop: 120,
      borderTop: '1px solid var(--line)',
    }}>
      <div className="max footer-pad" style={{ padding: '72px 48px 40px' }}>
        <div className="footer-grid" style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48,
        }}>
          <div>
            <div className="serif" style={{
              fontSize: 22, letterSpacing: '0.32em', marginBottom: 18,
            }}>{SITE.brand}</div>
            <p style={{ color: 'var(--muted)', fontSize: 13.5, lineHeight: 1.75, maxWidth: 320 }}>
              {SITE.tagline}. Работаем для тех, кто ценит спокойную атмосферу
              и заметный, но деликатный результат.
            </p>
          </div>

          <div>
            <div className="tracked" style={{ color: 'var(--muted)', marginBottom: 18 }}>Навигация</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><a href="#about" style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>О студии</a></li>
              <li><a href="#services" style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>Услуги</a></li>
              <li><a href="#pricing" style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>Прайс-лист</a></li>
              <li><a href="#contacts" style={{ fontSize: 13.5, color: 'var(--ink-2)' }}>Контакты</a></li>
            </ul>
          </div>

          <div>
            <div className="tracked" style={{ color: 'var(--muted)', marginBottom: 18 }}>Контакты</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: 'var(--ink-2)' }}>
              <li><a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
              <li style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{SITE.address}</li>
              <li style={{ color: 'var(--muted)' }}>{SITE.hours}</li>
            </ul>
          </div>

          <div>
            <div className="tracked" style={{ color: 'var(--muted)', marginBottom: 18 }}>Соцсети</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: 'var(--ink-2)' }}>
              <li><a href={SITE.instagram} target="_blank" rel="noreferrer">@{SITE.instagramHandle}</a></li>
              <li><a href={SITE.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <hr className="hair" style={{ margin: '56px 0 24px' }} />
        <div className="footer-bottom" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          color: 'var(--muted)', fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase',
        }}>
          <div>© {new Date().getFullYear()} · {SITE.brandFull} · {SITE.city}</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <span>Политика конфиденциальности</span>
            <span>Публичная оферта</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
