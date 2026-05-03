// Hairline icon set — adapted from Antonelli, with a few cosmetology-specific glyphs.

export function Icon({ name, size = 18 }) {
  const sw = 1.2;
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: sw,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };
  switch (name) {
    case 'menu':    return (<svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>);
    case 'x':       return (<svg {...common}><path d="M6 6l12 12M18 6 6 18"/></svg>);
    case 'chev-r':  return (<svg {...common}><path d="m9 6 6 6-6 6"/></svg>);
    case 'chev-d':  return (<svg {...common}><path d="m6 9 6 6 6-6"/></svg>);
    case 'plus':    return (<svg {...common}><path d="M12 5v14M5 12h14"/></svg>);
    case 'minus':   return (<svg {...common}><path d="M5 12h14"/></svg>);
    case 'arrow-r': return (<svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>);
    case 'pin':     return (<svg {...common}><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>);
    case 'phone':   return (<svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2Z"/></svg>);
    case 'mail':    return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>);
    case 'clock':   return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
    case 'check':   return (<svg {...common}><path d="m5 12 5 5L20 7"/></svg>);
    case 'whatsapp':return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.74-.86-2-.96s-.47-.15-.66.15-.76.96-.93 1.16-.34.22-.64.07a8.2 8.2 0 0 1-2.42-1.5 9 9 0 0 1-1.67-2.08c-.18-.3 0-.46.13-.61.13-.13.3-.34.45-.51.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.66-1.6-.91-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.5.07-.77.36s-1 .98-1 2.4 1.03 2.78 1.17 2.97c.15.2 2.02 3.08 4.9 4.32.68.3 1.22.47 1.64.6.69.22 1.32.19 1.81.12.55-.08 1.74-.71 1.98-1.4.25-.68.25-1.27.18-1.4-.07-.13-.27-.2-.57-.35Zm-5.43 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.45-9.88 9.9-9.88 2.65 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.45 9.87-9.9 9.87Zm8.41-18.28A11.81 11.81 0 0 0 12.04 0C5.46 0 .1 5.34.1 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.93 11.93 0 0 0 5.77 1.46h.01c6.58 0 11.94-5.34 11.94-11.91 0-3.18-1.24-6.17-3.5-8.41Z"/></svg>);
    case 'telegram':return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M21.94 4.27 18.7 19.55c-.24 1.08-.88 1.34-1.78.83l-4.92-3.62-2.37 2.28c-.27.27-.49.49-.99.49l.35-5.01 9.12-8.24c.4-.35-.09-.55-.61-.2L6.21 12.99l-4.86-1.52c-1.06-.33-1.08-1.06.22-1.57l19-7.32c.88-.32 1.65.21 1.37 1.69Z"/></svg>);
    case 'instagram': return (<svg {...common}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"/></svg>);
    case 'leaf':    return (<svg {...common}><path d="M11 20A7 7 0 0 0 18 13V6h-7a7 7 0 0 0-7 7c0 2 .8 3.7 2 5"/><path d="M2 22c4-2 7-6 9-12"/></svg>);
    case 'drop':    return (<svg {...common}><path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z"/></svg>);
    case 'spark':   return (<svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>);
    case 'needle':  return (<svg {...common}><path d="m3 21 6-6m4-4 8-8m-3-1 5 5m-9-1 5 5m-7-1 1.5 1.5"/></svg>);
    case 'hand':    return (<svg {...common}><path d="M9 11V5a1.5 1.5 0 1 1 3 0v5m0 0V3.5a1.5 1.5 0 1 1 3 0V11m0 0V5a1.5 1.5 0 1 1 3 0v8a7 7 0 0 1-7 7H9a4 4 0 0 1-4-4l-2-5a1.5 1.5 0 0 1 2.5-1.5L7 12V6a1.5 1.5 0 1 1 3 0v5"/></svg>);
    case 'sun':     return (<svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>);
    default: return null;
  }
}
