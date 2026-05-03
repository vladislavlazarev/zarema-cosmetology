'use client';

import { useEffect, useState } from 'react';
import { Icon } from './Icon';
import { SITE } from '../config';

const NAV = [
  { id: 'about', label: 'О студии' },
  { id: 'services', label: 'Услуги' },
  { id: 'pricing', label: 'Прайс' },
  { id: 'contacts', label: 'Контакты' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 30,
      background: 'var(--cream)',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'border-color 200ms ease',
    }}>
      <div className="max header-row" style={{
        display: 'flex', alignItems: 'center', gap: 28, height: 76,
      }}>
        {/* Wordmark */}
        <button
          onClick={() => go('top')}
          className="serif header-wordmark"
          style={{
            fontSize: 16, letterSpacing: '0.32em', whiteSpace: 'nowrap',
            flexShrink: 0, lineHeight: 1, color: 'var(--ink)',
          }}>
          {SITE.brand}
        </button>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{
          display: 'flex', gap: 28, alignItems: 'center', flex: 1, justifyContent: 'center',
        }}>
          {NAV.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className="tracked"
              style={{
                lineHeight: 1, paddingBottom: 4,
                borderBottom: '1px solid transparent',
                transition: 'border-color 180ms ease, color 180ms ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = 'var(--gold)'}
              onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}>
              {it.label}
            </button>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(true)}
          className="mobile-menu"
          aria-label="Меню"
          style={{ display: 'none', marginLeft: 'auto' }}>
          <Icon name="menu" size={22} />
        </button>

        {/* Right CTA */}
        <div className="header-actions" style={{
          display: 'flex', gap: 16, alignItems: 'center', flexShrink: 0,
        }}>
          <a
            href={`tel:${SITE.phoneHref}`}
            className="hide-mobile tracked-sm"
            style={{ color: 'var(--ink-2)' }}>
            {SITE.phone}
          </a>
          <button
            onClick={() => go('booking')}
            className="btn gold sm"
            style={{ height: 40 }}>
            Записаться
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(42,37,32,0.4)', zIndex: 100 }}>
          <aside
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute', top: 0, right: 0, bottom: 0,
              width: 'min(420px, 92%)', background: 'var(--cream)',
              padding: 24, animation: 'slideIn 280ms ease',
              display: 'flex', flexDirection: 'column', overflowY: 'auto',
            }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 36,
            }}>
              <span className="serif" style={{ fontSize: 16, letterSpacing: '0.3em' }}>{SITE.brand}</span>
              <button onClick={() => setOpen(false)} aria-label="Закрыть">
                <Icon name="x" size={22} />
              </button>
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {NAV.map((it) => (
                <button
                  key={it.id}
                  onClick={() => go(it.id)}
                  className="serif"
                  style={{
                    fontSize: 28, textAlign: 'left', padding: '16px 0',
                    borderBottom: '1px solid var(--line)',
                  }}>
                  {it.label}
                </button>
              ))}
            </nav>
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 32 }}>
              <a href={`tel:${SITE.phoneHref}`} className="btn ghost block">{SITE.phone}</a>
              <button onClick={() => go('booking')} className="btn gold block">Записаться</button>
            </div>
            <style>{`@keyframes slideIn { from { transform: translateX(12px); opacity: 0 } to { transform: none; opacity: 1 } }`}</style>
          </aside>
        </div>
      )}
    </header>
  );
}
