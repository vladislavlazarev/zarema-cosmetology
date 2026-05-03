'use client';

import { useState } from 'react';
import { Icon } from '../components/Icon';
import { SITE } from '../config';

export function Contacts() {
  return (
    <section id="contacts" className="max section-pad" style={{ paddingTop: 160 }}>
      <div className="section-head">
        <div>
          <div className="eyebrow">Контакты</div>
          <h2 className="serif">Заглядывайте<br/>или напишите.</h2>
        </div>
      </div>

      <div className="contact-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64,
      }}>
        <div>
          <div className="tracked" style={{ color: 'var(--muted)', marginBottom: 22 }}>Адрес и часы</div>
          <ul style={{
            listStyle: 'none', padding: 0, margin: 0,
            display: 'flex', flexDirection: 'column', gap: 22,
          }}>
            <ContactRow icon="pin" label="Адрес">
              {SITE.city}, {SITE.address}
            </ContactRow>
            <ContactRow icon="clock" label="Часы">
              {SITE.hours}
            </ContactRow>
            <ContactRow icon="phone" label="Телефон">
              <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
            </ContactRow>
            <ContactRow icon="instagram" label="Instagram">
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                @{SITE.instagramHandle}
              </a>
            </ContactRow>
          </ul>

          <hr className="hair" style={{ margin: '36px 0' }} />

          <div className="tracked" style={{ color: 'var(--muted)', marginBottom: 16 }}>Соцсети и мессенджеры</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <a className="btn sm" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={14} /> WhatsApp
            </a>
            <a className="btn sm" href={SITE.instagram} target="_blank" rel="noreferrer">
              <Icon name="instagram" size={14} /> Instagram
            </a>
          </div>
        </div>

        <div>
          <div
            className="contacts-map"
            style={{
              width: '100%', aspectRatio: '16/11',
              border: '1px solid var(--line)', overflow: 'hidden', position: 'relative',
              background: 'var(--cream-2)',
            }}>
            <iframe
              src={SITE.mapEmbed}
              width="100%" height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ display: 'block' }}
              title="Карта"
            />
          </div>
        </div>
      </div>

      <BookingBlock />
    </section>
  );
}

function ContactRow({ icon, label, children }) {
  return (
    <li style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
      <span style={{
        flexShrink: 0, width: 40, height: 40, borderRadius: '50%',
        background: 'var(--ivory)', color: 'var(--gold-2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name={icon} size={18} />
      </span>
      <div style={{ paddingTop: 4 }}>
        <div className="tracked-sm" style={{ color: 'var(--muted)', marginBottom: 4 }}>{label}</div>
        <div style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink)' }}>{children}</div>
      </div>
    </li>
  );
}

function BookingBlock() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', service: '' });

  const submit = (e) => {
    e.preventDefault();
    // For prototype: send to WhatsApp with prefilled text.
    const text = encodeURIComponent(
      `Здравствуйте! Хочу записаться.\nИмя: ${form.name}\nТелефон: ${form.phone}\nУслуга: ${form.service || '—'}`
    );
    window.open(`${SITE.whatsapp}?text=${text}`, '_blank');
    setSent(true);
  };

  return (
    <div
      id="booking"
      style={{
        marginTop: 120, padding: 48,
        background: 'var(--cream-2)', border: '1px solid var(--line)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56,
        alignItems: 'center',
      }}
      className="contact-grid">
      <div>
        <div className="tracked" style={{ color: 'var(--muted)', marginBottom: 18 }}>Запись</div>
        <h3 className="serif" style={{
          fontSize: 40, margin: 0, lineHeight: 1.1, fontWeight: 400, letterSpacing: '-0.005em',
        }}>
          Оставьте заявку — <em style={{ fontStyle: 'italic' }}>перезвоним</em><br />в течение 15 минут.
        </h3>
        <p style={{
          color: 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.7, marginTop: 22, maxWidth: 440,
        }}>
          Подберём процедуру под вашу кожу, подскажем подготовку и удобное время.
          Можно также написать сразу в мессенджер — отвечаем быстро.
        </p>
      </div>

      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div>
          <div className="label">Имя</div>
          <input
            className="field"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Как к вам обращаться"
          />
        </div>
        <div>
          <div className="label">Телефон</div>
          <input
            className="field"
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <div>
          <div className="label">Услуга (необязательно)</div>
          <input
            className="field"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            placeholder="Например, уход для лица"
          />
        </div>
        <button className="btn gold" style={{ marginTop: 8 }} type="submit">
          {sent ? 'Заявка отправлена ✓' : 'Записаться'}
        </button>
        <p style={{ color: 'var(--muted)', fontSize: 11.5, lineHeight: 1.6, margin: 0 }}>
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
        </p>
      </form>
    </div>
  );
}
