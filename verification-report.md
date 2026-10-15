# Verification report: MusicBrainz vs Discogs vs web

Rule used: where MusicBrainz (MB) and Discogs (DG) agree, the data is kept as confirmed.
Where they disagree, a web search decided. Discogs is treated as the main source for releases.
Data that could not be confirmed anywhere was left out.

## Record labels

| Label | MusicBrainz | Discogs | Web | Decision |
|---|---|---|---|---|
| Sangoma Records | Germany, 2011 | Germany, founded 2011 by Emiel and Daksinamurti | — | **Germany, 2011.** Removed from the South African scene, stays with Forest |
| Blue Hour Sounds | no psy label | "Blue Hour" is a techno label (UK producer) | The psy label is **Bluehour Sounds**, Bologna, Italy: forest/dark psy, progressive on alt stages | **Renamed to Bluehour Sounds, Italy**, linked to Forest + Progressive. Tristan removed (wrong label) |
| Harthouse | 1991 | 1992 | Wikipedia, UCM history: 1992 (some list 1991) | **1992** |
| Interchill Records | 1995 | "Founded in 1994" | not found | **1994** (Discogs) |
| HOMmega Productions | — | — | Bandcamp, Volumo: Israel, 1997 | **Israel, 1997** |
| Spin Twist Records | — | — | SoundCloud: founded 2005 by Hannes Klitta; country not stated | **2005**, country left empty |
| TIP World | — | — | Founded 1999 by Raja Ram after TIP Records | **UK, 1999** |
| Zenon Records | Australia, no year | Australia | Founded 2003 | **Australia, 2003** |
| Trax Records | wrong match (France 1997) | "do not use" entry | Wikipedia: Chicago, 1984 | **USA, 1984** |
| Broken Robot Records | — | UK, launched 2009 | — | **UK, 2009** |
| Neom Recordings | — | Spain | — | **Spain** |
| Iono Music | Hamburg | Berlin | — | **Germany** |
| Digital Structures | Sweden | now US-based, originally Swedish | — | **Sweden** (origin) |
| Iboga, TIP, Dragonfly, Flying Rhino, Blue Room, Suntrip, Twisted, Ultimae, Spiral Trax, Transmat, Metroplex, Eye Q, Antler-Subway, Triplag | agree with Discogs | agree | — | kept as confirmed |

**Artists per label:** union of artists found in label releases on MusicBrainz and Discogs
(Discogs only scans the first 400 releases of big labels, so a missing name is not proof).
Removed: Headroom from Iboga (name clash with a Swedish act), Tristan from Blue Hour.

## Artists

148 artists were found on both MusicBrainz and Discogs.

- **Country / active since:** no conflicts found between the two sources.
- **Album years:** 24 years corrected to the earliest release date found in either source
  (MusicBrainz often only knows a later reissue). Examples: Eat Static *Implant* stays 1994,
  Grouch *The Moof is Rooving* 2014 → 2006, Nitzer Ebb *Belief* stays 1989.
- **Compilations removed from album lists:** best-ofs, festival compilations, remix albums.
- **Not on Discogs via MusicBrainz link (27):** Cosmosis, GMS, Rinkadink, Wrecked Machines, Cid Inc,
  Tetrameth, Hux Flux, Xikwri Neyrra, Squaremeat, Haltya, Naima, Hypnoxock, Kneether, Biomechanimal,
  Hammerer, Hol Baumann, Kalya Scintilla, Holymen, Gataka, Human Blue, Mood Deluxe, Slack Baba,
  Hedflux, Bad Tango, Monk3y Logic, The Grateful Dead, DAF. Their data stays as before
  (tracks verified on YouTube), but has no second-source check.

## Festivals (Played at)

224 festival sets for 102 artists, each backed by a YouTube video of the set.
Removed false matches: RadiOzora radio shows, "Ozora One Day" spin-off events, "Hadra Returns"
club nights, single-track uploads, "RajaRam" matching "Ra", a video credit "Quanta.Vision".
Pyramid Festival (Liquid Soul, Atmos, Atriohm) and Magna Mysteria (Necropsycho) come from published line-ups.

## Sources
- Discogs API (labels and artists, linked from MusicBrainz)
- MusicBrainz API
- https://bluehoursounds.bandcamp.com/community · https://soundcloud.com/bluehoursounds
- https://volumo.com/nl/label/328184-hommega-productions · https://hommega.bandcamp.com/community
- https://soundcloud.com/spin_twist_records
- https://bandsintown.com/a/81569-raja-ram · https://en.wikipedia.org/wiki/Raja_Ram_(musician)
- https://soundcloud.com/Zenon-Records · https://zenonrecords.bandcamp.com/community
- https://en.wikipedia.org/wiki/Harthouse · https://ucm.one/en/music-labels/harthouse/history-of-harthouse
- https://en.wikipedia.org/wiki/Trax_Records

## Artist placement (which genre an artist orbits)

Checked against public genre tags from MusicBrainz and Last.fm (203 placements):

| Result | Count | Meaning |
|---|---|---|
| ✓ confirmed | 109 | tags name this exact genre (or the artist's country matches a regional scene) |
| ≈ related | 78 | tags say psytrance or a neighbouring genre in the same family |
| ? points elsewhere | 0 | — |
| – no data | 16 | no usable tags, or the name is shared with an unrelated act (Bliss, Ajna, Noma, Avalon, Naima…) |

**Changed:** Zyce moved from Brazilian full-on to Progressive psy (Serbian act, tagged progressive psytrance).
After review: Hypnoise and Freedom Fighters moved to Full-on (tagged full-on), Hypnoxock moved from Hi-tech to Neo-goa
(tagged full-on/goa and released on the neo-goa label Suntrip), Ajja added to Twilight. Cosinus stays in Night full-on.

**Worth a look (tags point to another family, not changed):**
Hypnoise (Zenonesque → tags: full-on), Freedom Fighters (Psy-techno → full-on), Digicult (Twilight → full-on),
Hypnoxock (Hi-tech → full-on), Talpa (Progressive → dark psytrance), Ital (Morning → progressive),
Cosinus and Ajja (Night/Morning → darkpsy), Vini Vici (Mainstream → progressive).

Every artist profile on the site now has a "Check the facts" block with these results, the public tags
and links to MusicBrainz, Discogs and Last.fm.
