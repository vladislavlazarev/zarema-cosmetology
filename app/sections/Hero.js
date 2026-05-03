import Image from 'next/image';
import { SITE } from '../config';

export function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        position: 'relative',
        height: 'min(86vh, 780px)',
        background: 'var(--cream)',
        overflow: 'hidden',
      }}>
      <Image
        src={SITE.images.hero}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background:
          'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 100%), linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 55%)',
      }} />

      <div
        className="max"
        style={{
          position: 'relative', height: '100%',
          display: 'grid', gridTemplateColumns: '1.3fr 1fr',
          alignItems: 'end', paddingBottom: 64,
        }}>
        <div className="hero-content" style={{ color: 'var(--cream)' }}>
          <div
            className="tracked eyebrow"
            style={{ marginBottom: 24, opacity: 0.92 }}>
            {SITE.tagline}
          </div>
          <h1
            className="serif"
            style={{
              fontSize: 78, lineHeight: 1.02, margin: 0, fontWeight: 400,
              letterSpacing: '-0.005em',
            }}>
            Спокойная эстетика<br />
            и заметный <em style={{ fontStyle: 'italic' }}>уход.</em>
          </h1>
          <p style={{
            maxWidth: 480, marginTop: 28, fontSize: 15,
            lineHeight: 1.7, opacity: 0.92,
          }}>
            Авторская студия косметологии в {SITE.city}. Уходовые программы,
            аппаратные методики и инъекции — без суеты, по-домашнему внимательно.
          </p>
          <div
            className="hero-cta"
            style={{ display: 'flex', gap: 14, marginTop: 36 }}>
            <a
              href="#booking"
              className="btn solid"
              style={{
                background: 'var(--cream)', color: 'var(--ink)',
                borderColor: 'var(--cream)',
              }}>
              Записаться на приём
            </a>
            <a
              href="#services"
              className="btn"
              style={{
                borderColor: 'var(--cream)', color: 'var(--cream)',
              }}>
              Смотреть услуги
            </a>
          </div>
        </div>

        <div
          className="hide-mobile"
          style={{
            color: 'var(--cream)', justifySelf: 'end', maxWidth: 280,
            fontSize: 13, lineHeight: 1.7, opacity: 0.9,
          }}>
          <div className="tracked-sm" style={{ marginBottom: 14, opacity: 0.85 }}>Глава I</div>
          Каждая процедура начинается с разговора и заканчивается планом — без шаблонов.
        </div>
      </div>
    </section>
  );
}
