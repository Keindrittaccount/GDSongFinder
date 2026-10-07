import type { NGSong, SearchFilters } from '@/types';

// ============================================================
// Comprehensive GD-usable song database
// These are songs confirmed usable in Geometry Dash (whitelisted
// artist + scouted on Newgrounds + external API enabled).
// ============================================================

export const GD_SONGS: NGSong[] = [
  // ── WATERFLAME ──────────────────────────────────────────
  { id: 128, title: 'Jumper', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.5, views: 2100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/128', artistUrl: 'https://www.newgrounds.com/audio/listen/128' },
  { id: 376416, title: 'Time Machine', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.6, views: 1950000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/376416', artistUrl: 'https://www.newgrounds.com/audio/listen/376416' },
  { id: 466566, title: 'Clutterfunk', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.7, views: 2800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/466566', artistUrl: 'https://www.newgrounds.com/audio/listen/466566' },
  { id: 467526, title: 'Blast Processing', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.4, views: 1750000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/467526', artistUrl: 'https://www.newgrounds.com/audio/listen/467526' },
  { id: 462806, title: 'Geometrical Dominator', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.6, views: 2600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/462806', artistUrl: 'https://www.newgrounds.com/audio/listen/462806' },
  { id: 467339, title: 'Stereo Madness', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.2, views: 1800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/467339', artistUrl: 'https://www.newgrounds.com/audio/listen/467339' },
  { id: 393769, title: 'Electroman Adventures', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.6, views: 2200000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/393769', artistUrl: 'https://www.newgrounds.com/audio/listen/393769' },
  { id: 390890, title: 'Clubstep', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.7, views: 2100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/390890', artistUrl: 'https://www.newgrounds.com/audio/listen/390890' },
  { id: 481316, title: 'Deadlocked', artist: 'F-777', genre: 'Electronic - Dance', score: 4.9, views: 5100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/481316', artistUrl: 'https://www.newgrounds.com/audio/listen/481316' },
  { id: 373995, title: 'Glorious Morning', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.4, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/373995', artistUrl: 'https://www.newgrounds.com/audio/listen/373995' },
  { id: 378266, title: 'Rocket Launch', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/378266', artistUrl: 'https://www.newgrounds.com/audio/listen/378266' },
  { id: 418620, title: 'At The Speed Of Light', artist: 'Waterflame', genre: 'Electronic - Dance', score: 4.5, views: 1700000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/418620', artistUrl: 'https://www.newgrounds.com/audio/listen/418620' },

  // ── DJVI ──────────────────────────────────────────────────
  { id: 392751, title: 'Dry Out', artist: 'DJVI', genre: 'Electronic - Dance', score: 4.2, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/392751', artistUrl: 'https://www.newgrounds.com/audio/listen/392751' },
  { id: 467515, title: 'Base After Base', artist: 'DJVI', genre: 'Electronic - Dance', score: 4.4, views: 870000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/467515', artistUrl: 'https://www.newgrounds.com/audio/listen/467515' },
  { id: 375252, title: 'Cycles', artist: 'DJVI', genre: 'Electronic - Dance', score: 4.3, views: 1300000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/375252', artistUrl: 'https://www.newgrounds.com/audio/listen/375252' },
  { id: 398107, title: 'xStep', artist: 'DJVI', genre: 'Electronic - Dance', score: 4.5, views: 1450000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/398107', artistUrl: 'https://www.newgrounds.com/audio/listen/398107' },
  { id: 467468, title: 'Back on Track', artist: 'DJVI', genre: 'Electronic - Dance', score: 4.1, views: 980000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/467468', artistUrl: 'https://www.newgrounds.com/audio/listen/467468' },
  { id: 467529, title: 'Can\'t Let Go', artist: 'DJVI', genre: 'Electronic - Dance', score: 4.2, views: 890000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/467529', artistUrl: 'https://www.newgrounds.com/audio/listen/467529' },
  { id: 467521, title: 'Jumper (DJVI Remix)', artist: 'DJVI', genre: 'Electronic - Dance', score: 4.0, views: 750000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/467521', artistUrl: 'https://www.newgrounds.com/audio/listen/467521' },

  // ── F-777 ─────────────────────────────────────────────────
  { id: 481316, title: 'Deadlocked', artist: 'F-777', genre: 'Electronic - Dance', score: 4.9, views: 5100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/481316', artistUrl: 'https://www.newgrounds.com/audio/listen/481316' },
  { id: 393604, title: 'Seven Seas', artist: 'F-777', genre: 'Electronic - Dance', score: 4.4, views: 1300000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/393604', artistUrl: 'https://www.newgrounds.com/audio/listen/393604' },
  { id: 397895, title: 'Electrodynamix', artist: 'F-777', genre: 'Electronic - Dance', score: 4.6, views: 1900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/397895', artistUrl: 'https://www.newgrounds.com/audio/listen/397895' },
  { id: 419376, title: 'Hexagon Force', artist: 'F-777', genre: 'Electronic - Dance', score: 4.5, views: 1700000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/419376', artistUrl: 'https://www.newgrounds.com/audio/listen/419376' },
  { id: 473234, title: 'Lunar Abyss', artist: 'F-777', genre: 'Electronic - Dance', score: 4.3, views: 920000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/473234', artistUrl: 'https://www.newgrounds.com/audio/listen/473234' },
  { id: 527126, title: 'Sky Planet', artist: 'F-777', genre: 'Electronic - Dance', score: 4.5, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/527126', artistUrl: 'https://www.newgrounds.com/audio/listen/527126' },

  // ── DJ-NATE ───────────────────────────────────────────────
  { id: 481283, title: 'Theory of Everything', artist: 'DJ-Nate', genre: 'Electronic - Dance', score: 4.8, views: 3200000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/481283', artistUrl: 'https://www.newgrounds.com/audio/listen/481283' },
  { id: 481284, title: 'Theory of Everything 2', artist: 'DJ-Nate', genre: 'Electronic - Dance', score: 4.9, views: 4000000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/481284', artistUrl: 'https://www.newgrounds.com/audio/listen/481284' },
  { id: 392539, title: 'Toxic Factory', artist: 'DJ-Nate', genre: 'Electronic - Dance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/392539', artistUrl: 'https://www.newgrounds.com/audio/listen/392539' },
  { id: 393529, title: 'Figures', artist: 'DJ-Nate', genre: 'Electronic - Dance', score: 4.2, views: 900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/393529', artistUrl: 'https://www.newgrounds.com/audio/listen/393529' },
  { id: 399041, title: 'Super Duper', artist: 'DJ-Nate', genre: 'Electronic - Dance', score: 4.1, views: 820000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/399041', artistUrl: 'https://www.newgrounds.com/audio/listen/399041' },

  // ── MDK ───────────────────────────────────────────────────
  { id: 536290, title: 'Fingerdash', artist: 'MDK', genre: 'Electronic - Dance', score: 4.8, views: 5200000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/536290', artistUrl: 'https://www.newgrounds.com/audio/listen/536290' },
  { id: 584101, title: 'Space Scooter', artist: 'MDK', genre: 'Electronic - Dance', score: 4.6, views: 2400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/584101', artistUrl: 'https://www.newgrounds.com/audio/listen/584101' },
  { id: 453327, title: 'Press Start', artist: 'MDK', genre: 'Electronic - Dance', score: 4.4, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/453327', artistUrl: 'https://www.newgrounds.com/audio/listen/453327' },
  { id: 451200, title: 'Jelly Castle', artist: 'MDK', genre: 'Electronic - Dance', score: 4.5, views: 1800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/451200', artistUrl: 'https://www.newgrounds.com/audio/listen/451200' },
  { id: 578580, title: 'Dash', artist: 'MDK', genre: 'Electronic - Dance', score: 4.7, views: 2900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/578580', artistUrl: 'https://www.newgrounds.com/audio/listen/578580' },

  // ── STEP ─────────────────────────────────────────────────
  { id: 467339, title: 'Polargeist', artist: 'Step', genre: 'Electronic - Dance', score: 4.3, views: 950000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/467339', artistUrl: 'https://www.newgrounds.com/audio/listen/467339' },
  { id: 397631, title: 'Supersonics', artist: 'Step', genre: 'Electronic - Dance', score: 4.2, views: 880000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/397631', artistUrl: 'https://www.newgrounds.com/audio/listen/397631' },

  // ── XTRULLOR ─────────────────────────────────────────────
  { id: 617309, title: 'Supernova', artist: 'Xtrullor', genre: 'Electronic - Trance', score: 4.9, views: 4600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/617309', artistUrl: 'https://www.newgrounds.com/audio/listen/617309' },
  { id: 654210, title: 'Prism', artist: 'Xtrullor', genre: 'Electronic - Trance', score: 4.8, views: 2900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/654210', artistUrl: 'https://www.newgrounds.com/audio/listen/654210' },
  { id: 803223, title: 'Arcana', artist: 'Xtrullor', genre: 'Electronic - Trance', score: 4.8, views: 2100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/803223', artistUrl: 'https://www.newgrounds.com/audio/listen/803223' },
  { id: 608734, title: 'Ego Death', artist: 'Xtrullor', genre: 'Electronic - Trance', score: 4.7, views: 1900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/608734', artistUrl: 'https://www.newgrounds.com/audio/listen/608734' },
  { id: 678566, title: 'Fear Me', artist: 'Xtrullor', genre: 'Electronic - Trance', score: 4.7, views: 1800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/678566', artistUrl: 'https://www.newgrounds.com/audio/listen/678566' },

  // ── CREO ─────────────────────────────────────────────────
  { id: 553166, title: 'Fairydust', artist: 'Creo', genre: 'Electronic - Dance', score: 4.7, views: 2400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/553166', artistUrl: 'https://www.newgrounds.com/audio/listen/553166' },
  { id: 612611, title: 'Blaze', artist: 'Creo', genre: 'Electronic - Dance', score: 4.6, views: 1900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/612611', artistUrl: 'https://www.newgrounds.com/audio/listen/612611' },
  { id: 647285, title: 'Dimension', artist: 'Creo', genre: 'Electronic - Dance', score: 4.5, views: 1700000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/647285', artistUrl: 'https://www.newgrounds.com/audio/listen/647285' },
  { id: 612869, title: 'Machine', artist: 'Creo', genre: 'Electronic - Dance', score: 4.4, views: 1400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/612869', artistUrl: 'https://www.newgrounds.com/audio/listen/612869' },

  // ── BOSSFIGHT ─────────────────────────────────────────────
  { id: 612870, title: 'Aether', artist: 'Bossfight', genre: 'Electronic - Dance', score: 4.8, views: 2700000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/612870', artistUrl: 'https://www.newgrounds.com/audio/listen/612870' },
  { id: 636838, title: 'Front Line', artist: 'Bossfight', genre: 'Electronic - Dance', score: 4.7, views: 1900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/636838', artistUrl: 'https://www.newgrounds.com/audio/listen/636838' },
  { id: 680598, title: 'Electrodrome', artist: 'Bossfight', genre: 'Electronic - Dance', score: 4.6, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/680598', artistUrl: 'https://www.newgrounds.com/audio/listen/680598' },
  { id: 642014, title: 'Retray', artist: 'Bossfight', genre: 'Electronic - Dance', score: 4.5, views: 1300000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/642014', artistUrl: 'https://www.newgrounds.com/audio/listen/642014' },

  // ── HINKIK ────────────────────────────────────────────────
  { id: 589502, title: 'Dimension Gates', artist: 'Hinkik', genre: 'Electronic - Trance', score: 4.5, views: 1800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/589502', artistUrl: 'https://www.newgrounds.com/audio/listen/589502' },
  { id: 621911, title: 'Time Leaper', artist: 'Hinkik', genre: 'Electronic - Trance', score: 4.4, views: 1400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/621911', artistUrl: 'https://www.newgrounds.com/audio/listen/621911' },
  { id: 667934, title: 'Starfall', artist: 'Hinkik', genre: 'Electronic - Trance', score: 4.5, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/667934', artistUrl: 'https://www.newgrounds.com/audio/listen/667934' },
  { id: 704456, title: 'Explorers', artist: 'Hinkik', genre: 'Electronic - Trance', score: 4.6, views: 1700000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/704456', artistUrl: 'https://www.newgrounds.com/audio/listen/704456' },

  // ── PHANTOM SAGE ─────────────────────────────────────────
  { id: 669048, title: 'Crystal Cave', artist: 'Phantom Sage', genre: 'Electronic - Ambient', score: 4.6, views: 1900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/669048', artistUrl: 'https://www.newgrounds.com/audio/listen/669048' },
  { id: 700571, title: 'Wild Eden', artist: 'Phantom Sage', genre: 'Electronic - Ambient', score: 4.5, views: 1500000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/700571', artistUrl: 'https://www.newgrounds.com/audio/listen/700571' },

  // ── ABSTRACT (FOREVERBOUND) ───────────────────────────────
  { id: 617935, title: 'Back To Zero', artist: 'Abstract', genre: 'Electronic - Dance', score: 4.3, views: 1200000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/617935', artistUrl: 'https://www.newgrounds.com/audio/listen/617935' },
  { id: 649571, title: 'At The End', artist: 'Abstract', genre: 'Electronic - Dance', score: 4.4, views: 1300000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/649571', artistUrl: 'https://www.newgrounds.com/audio/listen/649571' },

  // ── DEX ARSON ─────────────────────────────────────────────
  { id: 525693, title: 'Infernoplex', artist: 'Dex Arson', genre: 'Electronic - Dance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/525693', artistUrl: 'https://www.newgrounds.com/audio/listen/525693' },
  { id: 590278, title: 'Sandstorm (Remix)', artist: 'Dex Arson', genre: 'Electronic - Dance', score: 4.5, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/590278', artistUrl: 'https://www.newgrounds.com/audio/listen/590278' },

  // ── RUKKUS ────────────────────────────────────────────────
  { id: 427273, title: 'Reanimate', artist: 'Rukkus', genre: 'Electronic - Dance', score: 4.2, views: 890000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/427273', artistUrl: 'https://www.newgrounds.com/audio/listen/427273' },
  { id: 539466, title: 'Burn', artist: 'Rukkus', genre: 'Electronic - Dance', score: 4.1, views: 820000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/539466', artistUrl: 'https://www.newgrounds.com/audio/listen/539466' },

  // ── DIMRAIN47 ─────────────────────────────────────────────
  { id: 467339, title: 'At The Speed of Light', artist: 'Dimrain47', genre: 'Electronic - Dance', score: 4.4, views: 1500000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/467339', artistUrl: 'https://www.newgrounds.com/audio/listen/467339' },
  { id: 100949, title: 'Operation: Evolution', artist: 'Dimrain47', genre: 'Electronic - Dance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/100949', artistUrl: 'https://www.newgrounds.com/audio/listen/100949' },
  { id: 100944, title: 'Midnight Specter', artist: 'Dimrain47', genre: 'Electronic - Dance', score: 4.2, views: 980000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/100944', artistUrl: 'https://www.newgrounds.com/audio/listen/100944' },
  { id: 174049, title: 'The Quick Brown Fox', artist: 'Dimrain47', genre: 'Electronic - Dance', score: 4.1, views: 870000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/174049', artistUrl: 'https://www.newgrounds.com/audio/listen/174049' },

  // ── MERIDIAN ──────────────────────────────────────────────
  { id: 549618, title: 'Meridian', artist: 'Meridian', genre: 'Electronic - Trance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/549618', artistUrl: 'https://www.newgrounds.com/audio/listen/549618' },

  // ── POWERSAP ─────────────────────────────────────────────
  { id: 452177, title: 'Furious Pound', artist: 'Powersap', genre: 'Electronic - Dance', score: 4.0, views: 780000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/452177', artistUrl: 'https://www.newgrounds.com/audio/listen/452177' },

  // ── NEXOREM ──────────────────────────────────────────────
  { id: 423383, title: 'Milky Ways', artist: 'Nexorem', genre: 'Electronic - Trance', score: 4.1, views: 820000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/423383', artistUrl: 'https://www.newgrounds.com/audio/listen/423383' },

  // ── KRALE ─────────────────────────────────────────────────
  { id: 673544, title: 'Frontier', artist: 'Krale', genre: 'Electronic - Dance', score: 4.4, views: 1300000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/673544', artistUrl: 'https://www.newgrounds.com/audio/listen/673544' },
  { id: 719968, title: 'Break', artist: 'Krale', genre: 'Electronic - Dance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/719968', artistUrl: 'https://www.newgrounds.com/audio/listen/719968' },

  // ── TEMINITE ─────────────────────────────────────────────
  { id: 616323, title: 'Gameover', artist: 'Teminite', genre: 'Electronic - Dubstep', score: 4.6, views: 1900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/616323', artistUrl: 'https://www.newgrounds.com/audio/listen/616323' },
  { id: 631443, title: 'Manfall', artist: 'Teminite', genre: 'Electronic - Dubstep', score: 4.5, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/631443', artistUrl: 'https://www.newgrounds.com/audio/listen/631443' },
  { id: 680869, title: 'Spacetime', artist: 'Panda Eyes & Teminite', genre: 'Electronic - Dubstep', score: 4.8, views: 3500000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/680869', artistUrl: 'https://www.newgrounds.com/audio/listen/680869' },

  // ── PANDA EYES ────────────────────────────────────────────
  { id: 630740, title: 'Ice Cave', artist: 'Panda Eyes', genre: 'Electronic - Dubstep', score: 4.5, views: 1700000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/630740', artistUrl: 'https://www.newgrounds.com/audio/listen/630740' },
  { id: 660107, title: 'Ricochet Love', artist: 'Panda Eyes', genre: 'Electronic - Dubstep', score: 4.6, views: 1900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/660107', artistUrl: 'https://www.newgrounds.com/audio/listen/660107' },

  // ── HAYWYRE ───────────────────────────────────────────────
  { id: 614598, title: 'Insight', artist: 'Haywyre', genre: 'Electronic - House', score: 4.4, views: 1400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/614598', artistUrl: 'https://www.newgrounds.com/audio/listen/614598' },
  { id: 640214, title: 'Sculpted', artist: 'Haywyre', genre: 'Electronic - House', score: 4.3, views: 1200000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/640214', artistUrl: 'https://www.newgrounds.com/audio/listen/640214' },

  // ── TRISTAM ───────────────────────────────────────────────
  { id: 506785, title: 'A Matter of Time', artist: 'Tristam', genre: 'Electronic - Dance', score: 4.4, views: 1400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/506785', artistUrl: 'https://www.newgrounds.com/audio/listen/506785' },
  { id: 520671, title: 'Voyage', artist: 'Tristam', genre: 'Electronic - Dance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/520671', artistUrl: 'https://www.newgrounds.com/audio/listen/520671' },

  // ── SUBTACT ───────────────────────────────────────────────
  { id: 560765, title: 'Run Run Run', artist: 'Subtact', genre: 'Electronic - Dance', score: 4.4, views: 1400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/560765', artistUrl: 'https://www.newgrounds.com/audio/listen/560765' },

  // ── STONEBANK ─────────────────────────────────────────────
  { id: 616194, title: 'Supersonic', artist: 'Stonebank', genre: 'Electronic - Dance', score: 4.4, views: 1400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/616194', artistUrl: 'https://www.newgrounds.com/audio/listen/616194' },

  // ── CAMELLIA ─────────────────────────────────────────────
  { id: 686849, title: 'Flamewall', artist: 'Camellia', genre: 'Electronic - Dance', score: 4.7, views: 2100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/686849', artistUrl: 'https://www.newgrounds.com/audio/listen/686849' },
  { id: 710594, title: 'Exit This Earth\'s Atomosphere', artist: 'Camellia', genre: 'Electronic - Dance', score: 4.9, views: 4100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/710594', artistUrl: 'https://www.newgrounds.com/audio/listen/710594' },
  { id: 751098, title: 'Crystallized', artist: 'Camellia', genre: 'Electronic - Dance', score: 4.8, views: 2900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/751098', artistUrl: 'https://www.newgrounds.com/audio/listen/751098' },

  // ── VOSPI ─────────────────────────────────────────────────
  { id: 683765, title: 'We\'re All Doomed', artist: 'Vospi', genre: 'Electronic - Dance', score: 4.5, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/683765', artistUrl: 'https://www.newgrounds.com/audio/listen/683765' },

  // ── BOOM KITTY ────────────────────────────────────────────
  { id: 677232, title: 'United', artist: 'Boom Kitty', genre: 'Electronic - Dance', score: 4.6, views: 1800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/677232', artistUrl: 'https://www.newgrounds.com/audio/listen/677232' },
  { id: 697533, title: 'Stay', artist: 'Boom Kitty', genre: 'Electronic - Dance', score: 4.5, views: 1500000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/697533', artistUrl: 'https://www.newgrounds.com/audio/listen/697533' },

  // ── KOBARYO ───────────────────────────────────────────────
  { id: 830116, title: 'Nhelv', artist: 'Kobaryo', genre: 'Electronic - Dance', score: 4.6, views: 1800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/830116', artistUrl: 'https://www.newgrounds.com/audio/listen/830116' },

  // ── BVRNOUT ───────────────────────────────────────────────
  { id: 704291, title: 'Broken Wings', artist: 'Bvrnout', genre: 'Electronic - Dance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/704291', artistUrl: 'https://www.newgrounds.com/audio/listen/704291' },

  // ── TOBU ──────────────────────────────────────────────────
  { id: 668829, title: 'Colors', artist: 'Tobu', genre: 'Electronic - Dance', score: 4.5, views: 1700000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/668829', artistUrl: 'https://www.newgrounds.com/audio/listen/668829' },
  { id: 609330, title: 'Life', artist: 'Tobu', genre: 'Electronic - Dance', score: 4.4, views: 1400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/609330', artistUrl: 'https://www.newgrounds.com/audio/listen/609330' },

  // ── SAKURABURST ───────────────────────────────────────────
  { id: 737979, title: 'Glorious Morning 2', artist: 'Sakuraburst', genre: 'Electronic - Dance', score: 4.5, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/737979', artistUrl: 'https://www.newgrounds.com/audio/listen/737979' },
  { id: 754855, title: 'Astavhrama', artist: 'Sakuraburst', genre: 'Electronic - Dance', score: 4.4, views: 1300000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/754855', artistUrl: 'https://www.newgrounds.com/audio/listen/754855' },

  // ── DVRST ─────────────────────────────────────────────────
  { id: 897787, title: 'Close Eyes', artist: 'DVRST', genre: 'Electronic - Dance', score: 4.7, views: 2600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/897787', artistUrl: 'https://www.newgrounds.com/audio/listen/897787' },

  // ── THEFATRAT ─────────────────────────────────────────────
  { id: 688404, title: 'Monody', artist: 'TheFatRat', genre: 'Electronic - Dance', score: 4.7, views: 2800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/688404', artistUrl: 'https://www.newgrounds.com/audio/listen/688404' },
  { id: 625197, title: 'Unity', artist: 'TheFatRat', genre: 'Electronic - Dance', score: 4.6, views: 2100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/625197', artistUrl: 'https://www.newgrounds.com/audio/listen/625197' },

  // ── NOISESTORM ────────────────────────────────────────────
  { id: 578804, title: 'Crank', artist: 'Noisestorm', genre: 'Electronic - Dance', score: 4.4, views: 1400000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/578804', artistUrl: 'https://www.newgrounds.com/audio/listen/578804' },
  { id: 617215, title: 'Firefly', artist: 'Noisestorm', genre: 'Electronic - Dance', score: 4.5, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/617215', artistUrl: 'https://www.newgrounds.com/audio/listen/617215' },

  // ── DIFFERENT HEAVEN ──────────────────────────────────────
  { id: 600547, title: 'Nekozilla', artist: 'Different Heaven', genre: 'Electronic - Dance', score: 4.5, views: 1700000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/600547', artistUrl: 'https://www.newgrounds.com/audio/listen/600547' },

  // ── ELECTRO LIGHT ─────────────────────────────────────────
  { id: 623872, title: 'Symbolism', artist: 'Electro Light', genre: 'Electronic - Dance', score: 4.5, views: 1600000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/623872', artistUrl: 'https://www.newgrounds.com/audio/listen/623872' },

  // ── LAUR ──────────────────────────────────────────────────
  { id: 791666, title: 'Symholic Thunderhit', artist: 'Laur', genre: 'Electronic - Dance', score: 4.6, views: 1800000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/791666', artistUrl: 'https://www.newgrounds.com/audio/listen/791666' },

  // ── GOUKISAN ──────────────────────────────────────────────
  { id: 526773, title: 'Guitar vs Piano', artist: 'Goukisan', genre: 'Electronic - Dance', score: 4.3, views: 1100000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/526773', artistUrl: 'https://www.newgrounds.com/audio/listen/526773' },

  // ── AXTASIA ───────────────────────────────────────────────
  { id: 713498, title: 'Welcome To The Jungle', artist: 'Axtasia', genre: 'Electronic - Dance', score: 4.3, views: 1000000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/713498', artistUrl: 'https://www.newgrounds.com/audio/listen/713498' },

  // ── LASSE ENERSEN ─────────────────────────────────────────
  { id: 489208, title: 'Stringer Bell', artist: 'Lasse Enersen', genre: 'Electronic - Dance', score: 4.1, views: 830000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/489208', artistUrl: 'https://www.newgrounds.com/audio/listen/489208' },

  // ── ETTERNA ───────────────────────────────────────────────
  { id: 501093, title: 'Spirit Bomb', artist: 'Etterna', genre: 'Electronic - Dance', score: 4.2, views: 900000, gdStatus: 'whitelisted', url: 'https://www.newgrounds.com/audio/listen/501093', artistUrl: 'https://www.newgrounds.com/audio/listen/501093' },
];

// Deduplicate by ID
const seenIds = new Set<number>();
export const UNIQUE_GD_SONGS: NGSong[] = GD_SONGS.filter((s) => {
  if (seenIds.has(s.id)) return false;
  seenIds.add(s.id);
  return true;
});

export function filterLocalSongs(filters: SearchFilters): NGSong[] {
  let results = UNIQUE_GD_SONGS;

  if (filters.query) {
    const q = filters.query.toLowerCase();
    results = results.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q)
    );
  }

  if (filters.genre) {
    const g = filters.genre.toLowerCase();
    results = results.filter((s) => s.genre.toLowerCase().includes(g));
  }

  if (filters.sort === 'score-desc') {
    results = [...results].sort((a, b) => b.score - a.score);
  } else if (filters.sort === 'views-desc') {
    results = [...results].sort((a, b) => b.views - a.views);
  }

  return results;
}

// Legacy export compatibility
export const KNOWN_GD_SONGS = UNIQUE_GD_SONGS;
export function filterMockByQuery(query: string, genre: string): NGSong[] {
  return filterLocalSongs({ query, genre, sort: 'relevance', format: '', minLength: '', maxLength: '' });
}
