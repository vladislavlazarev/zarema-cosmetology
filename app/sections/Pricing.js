'use client';

import { useEffect, useState } from 'react';
import { Icon } from '../components/Icon';
import { PRICING } from '../data';
import { SITE } from '../config';

function fmt(n) {
  return new Intl.NumberFormat('ru-RU').format(n);
}

const idxOf = (groupId) => PRICING.findIndex((g) => g.id === groupId);

export function Pricing() {
  const [open, setOpen] = useState(0);
  const hasDual = (g) => g.items.some((it) => it.priceMain != null);

  useEffect(() => {
    const onOpen = (e) => {
      const i = idxOf(e.detail);
      if (i >= 0) setOpen(i);
    };
    window.addEventListener('open-pricing-group', onOpen);

    const fromHash = () => {
      const h = window.location.hash;
      if (h.startsWith('#price-')) {
        const i = idxOf(h.slice('#price-'.length));
        if (i >= 0) setOpen(i);
      }
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);

    return () => {
      window.removeEventListener('open-pricing-group', onOpen);
      window.removeEventListener('hashchange', fromHash);
    };
  }, []);

  return (
    <section id="pricing" className="max section-pad" style={{ paddingTop: 160 }}>
      <div className="section-head">
        <div>
          <div className="eyebrow">Прайс-лист</div>
          <h2 className="serif">Прозрачные цены,<br/>без скрытых строк.</h2>
        </div>
        <a href="#booking" className="btn ghost" style={{ whiteSpace: 'nowrap' }}>Записаться</a>
      </div>

      <div>
        {PRICING.map((g, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={g.id}
              id={`price-${g.id}`}
              className={`price-group ${isOpen ? 'open' : ''}`}
              style={{ scrollMarginTop: 100 }}>
              <button
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="price-group-head"
                style={{ width: '100%', textAlign: 'left' }}>
                <h3>{g.group}</h3>
                <span className="toggle">
                  <Icon name={isOpen ? 'minus' : 'plus'} size={16} />
                </span>
              </button>
              {isOpen && (
                <div className={`price-group-body ${hasDual(g) ? 'dual' : ''}`}>
                  {hasDual(g) && (
                    <div className="price-row price-head">
                      <div className="name" />
                      <div className="amounts">
                        <span className="col-label">Гл. врач</span>
                        <span className="col-label">Врач</span>
                      </div>
                    </div>
                  )}
                  {g.items.map((it, i) => (
                    <div key={i} className="price-row">
                      <div className="name">
                        {it.name}
                        {it.desc && <span className="desc">{it.desc}</span>}
                      </div>
                      {hasDual(g) ? (
                        <div className="amounts">
                          <span className="amount main">
                            {it.priceMain != null ? `${fmt(it.priceMain)} ${SITE.currency}` : '—'}
                          </span>
                          <span className="amount">
                            {fmt(it.price)} {SITE.currency}
                          </span>
                        </div>
                      ) : (
                        <div className="amount">
                          {fmt(it.price)} {SITE.currency}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 40, maxWidth: 720 }}>
        <span style={{
          display: 'block', width: 32, height: 1,
          background: 'var(--line-2)', marginBottom: 18,
        }} />
        <p style={{
          margin: 0, color: 'var(--ink-2)',
          fontFamily: 'var(--font-serif), Cormorant Garamond, serif',
          fontStyle: 'italic', fontSize: 17, lineHeight: 1.55,
          letterSpacing: '0.005em',
        }}>
          Цены ориентировочные и могут меняться в зависимости от объёма
          процедуры и используемых препаратов. Точную стоимость подскажет
          администратор после консультации.
        </p>
      </div>
    </section>
  );
}
