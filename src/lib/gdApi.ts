// GD whitelist check via boomlings API, proxied through corsproxy.io to bypass CORS.
// Logic from: https://greasyfork.org/en/scripts/535913-bulk-whitelist-checker-geometry-dash
//
// POST https://www.boomlings.com/database/getGJSongInfo.php
// Body: secret=Wmfd2893gb7&songID=<id>
// Response: "-1" = not whitelisted, any other value = whitelisted

const BOOMLINGS_URL = 'https://www.boomlings.com/database/getGJSongInfo.php';

// Try multiple proxies — corsproxy.io is first, allorigins as fallback
async function proxyPost(targetUrl: string, body: string): Promise<string> {
  const proxies = [
    // corsproxy.io — supports POST natively
    async () => {
      const res = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(targetUrl)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
        signal: AbortSignal.timeout(7000),
      });
      return res.text();
    },
    // thingproxy — another proxy that supports POST
    async () => {
      const res = await fetch(`https://thingproxy.freeboard.io/fetch/${targetUrl}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
        signal: AbortSignal.timeout(7000),
      });
      return res.text();
    },
  ];

  for (const attempt of proxies) {
    try {
      const text = (await attempt()).trim();
      // A valid boomlings response either is exactly '-1' or contains '~|~'
      if (text === '-1' || text.includes('~|~')) return text;
      console.warn('Proxy returned unexpected response:', text.slice(0, 80));
    } catch (e) {
      console.warn('Proxy attempt failed:', e);
    }
  }
  throw new Error('All proxies failed');
}

export interface GDSongInfo {
  id: number;
  isWhitelisted: boolean;
  rawResponse?: string;
}

// Check a single song ID against the GD whitelist
export async function checkGDWhitelist(songId: number): Promise<GDSongInfo> {
  try {
    const text = await proxyPost(BOOMLINGS_URL, `secret=Wmfd2893gb7&songID=${songId}`);
    console.log(`GD whitelist check ${songId}:`, text.slice(0, 80));

    // CRITICAL: must contain '~|~' to be a real GD song response
    // '-1' = not whitelisted, anything without '~|~' = invalid/error
    const isWhitelisted = text.includes('~|~');

    return { id: songId, isWhitelisted, rawResponse: text };
  } catch (err) {
    console.warn(`GD whitelist check failed for ${songId}:`, err);
    throw err;
  }
}

// Check a batch of song IDs with rate limiting (mirrors the userscript's delay logic)
// Calls onResult for each song as results arrive.
export async function checkWhitelistBatch(
  songIds: number[],
  onResult: (id: number, isWhitelisted: boolean) => void,
  delayMs = 300,
): Promise<void> {
  for (let i = 0; i < songIds.length; i++) {
    const id = songIds[i];
    try {
      const info = await checkGDWhitelist(id);
      onResult(id, info.isWhitelisted);
    } catch {
      // Skip failed checks silently — song stays as 'unchecked'
    }
    // Rate limit: wait between requests to avoid hammering boomlings
    if (i < songIds.length - 1) {
      await new Promise((r) => setTimeout(r, delayMs + Math.random() * 200));
    }
  }
}
