import Image from 'next/image';
import { ADVANTAGES } from '../data';
import { SITE } from '../config';

export function About() {
  return (
    <section id="about" className="max section-pad" style={{ paddingTop: 140 }}>
      {/* Brand story */}
      <div className="about-grid" style={{
        display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 80, alignItems: 'center',
      }}>
        <div style={{
          position: 'relative', aspectRatio: '5/6', overflow: 'hidden',
          background: 'var(--cream-2)',
        }}>
          <Image
            src={SITE.images.about}
            alt="Кабинет студии lumi"
            fill
            sizes="(max-width: 1000px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="crop-corner" />
        </div>
        <div>
          <div className="tracked" style={{ color: 'var(--muted)', marginBottom: 22 }}>О студии</div>
          <h2 className="serif" style={{
            fontSize: 54, lineHeight: 1.08, fontWeight: 400, margin: 0,
            letterSpacing: '-0.005em',
          }}>
            Маленькая студия,<br />
            <em style={{ fontStyle: 'italic' }}>без суеты.</em>
          </h2>
          <blockquote className="serif" style={{
            fontStyle: 'italic', fontSize: 22, lineHeight: 1.55, color: 'var(--ink-2)',
            margin: '36px 0', padding: '0 0 0 26px',
            borderLeft: '1px solid var(--gold)', maxWidth: 520,
          }}>
            «Меньше процедур за день, больше внимания каждой.<br />
            Это и есть весь наш метод.»
          </blockquote>
          <p style={{
            fontSize: 14.5, lineHeight: 1.85, color: 'var(--ink-2)',
            maxWidth: 520, marginBottom: 0,
          }}>
            Мы работаем с косметологией так, как любим сами — спокойно, без давления и
            завышенных обещаний. У нас тёплый свет, мягкие кушетки, продуманные программы и
            специалисты, которые объясняют каждый шаг. Большинство клиенток приходят по совету.
          </p>
        </div>
      </div>

      {/* Advantages */}
      <div style={{ marginTop: 140 }}>
        <div className="tracked" style={{ color: 'var(--muted)', marginBottom: 16 }}>Почему мы</div>
        <h3 className="serif" style={{
          fontSize: 38, fontWeight: 400, margin: '0 0 56px',
          maxWidth: 720, lineHeight: 1.15,
        }}>
          Премиальный сервис без вычурности.
        </h3>
        <div className="advantages-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32,
        }}>
          {ADVANTAGES.map((a, i) => (
            <div
              key={i}
              style={{ borderTop: '1px solid var(--gold)', paddingTop: 24 }}>
              <div className="tracked-sm" style={{ color: 'var(--gold-2)', marginBottom: 14 }}>
                0{i + 1}
              </div>
              <h4 className="serif" style={{
                fontSize: 22, fontWeight: 400, margin: '0 0 12px', lineHeight: 1.25,
              }}>{a.title}</h4>
              <p style={{
                color: 'var(--ink-2)', fontSize: 13.5, lineHeight: 1.7, margin: 0,
              }}>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
