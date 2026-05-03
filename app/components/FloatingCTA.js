import { Icon } from './Icon';
import { SITE } from '../config';

export function FloatingCTA() {
  return (
    <div className="float-cta">
      <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="whatsapp" aria-label="WhatsApp">
        <Icon name="whatsapp" size={22} />
      </a>
      <a href={SITE.instagram} target="_blank" rel="noreferrer" className="instagram" aria-label="Instagram">
        <Icon name="instagram" size={22} />
      </a>
      <a href="#booking" className="book">Записаться</a>
    </div>
  );
}
