// Vercel Serverless Function: POST /api/contact -> Telegram
// Env: TG_BOT_TOKEN, TG_CHAT_ID
const hits = new Map<string, number[]>();

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });
  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;
  if (!token || !chatId) return res.status(500).json({ ok: false, error: 'not configured' });

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
  // honeypot: bots fill hidden "website" field -> pretend success
  if (body.website) return res.status(200).json({ ok: true });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0] || 'unknown';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60_000);
  if (recent.length >= 5) return res.status(429).json({ ok: false });
  hits.set(ip, [...recent, now]);

  const clip = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n);
  const name = clip(body.name, 100);
  const contact = clip(body.contact, 150);
  const message = clip(body.message, 2000);
  const lang = clip(body.lang, 5);
  if (!name || !contact) return res.status(400).json({ ok: false });

  const text = `🆕 Заявка с pavelroman.com [${lang}]\n\n👤 ${name}\n📞 ${contact}\n\n${message}`;
  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
  return res.status(r.ok ? 200 : 502).json({ ok: r.ok });
}
