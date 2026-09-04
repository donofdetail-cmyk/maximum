# Maximum Mobile Detailing — launch punch list

Static site. No build step, no framework, no form backend. Upload the folder to any host
(Netlify, Cloudflare Pages, Vercel, or plain shared hosting) and it runs.

Conversion path is **call or text 775-374-1281**. There is no contact form to maintain
and nothing to activate.

---

## 1. Blockers

### 1.1 Domain — the redirect has to go
Live domain is `https://maximummobiledetailing.com`, registered on GoDaddy
(ns05/ns06.domaincontrol.com). It is set in the canonical tag, OG and Twitter tags,
the JSON-LD, robots.txt and sitemap.xml.

**As of 2026-09-04 that domain 301-redirects to `maximummobiledetail.com`, which does not
exist.** No DNS record, NXDOMAIN. Every visitor, and everyone clicking the website link on
the Google Business Profile, lands on a dead page.

Kill the forwarding rule in the GoDaddy dashboard, then point the domain at wherever the
site is hosted. Nothing in this repo can fix it, the redirect happens before the request
ever reaches the files.

### 1.2 Reviews — DONE
The REVIEWS block carries three real Google reviews word for word, and the
"See all reviews on Google" button points at the Google Business Profile.
The same three are marked up as `Review` nodes in the JSON-LD, so the
`aggregateRating` (5.0 from 66) has visible backing on the page.

### 1.3 Confirm the phone number is text-capable
Every CTA on the page is a `tel:` or `sms:` link to 775-374-1281. If that line cannot
receive SMS, the Text buttons are dead ends. Test both from a phone before launch.

---

## 2. Photos to shoot

Everything below is a styled placeholder. Real photos are the biggest conversion lever left.

| Where | Shot | Notes |
|---|---|---|
| `.who-photo` | Alec + the work truck | The most valuable photo on the page. Outdoors, truck visible, Alec in frame. |
| Gallery, 6 slots | Finished jobs | One per service line. Same 4:3 crop, same time of day if possible. |
| `assets/img/og-image.jpg` | Social preview | Currently built from the logo. A real finished car will outperform it. 1200x630. |

Export as WebP around 1200px wide, under ~200KB each, and give every `<img>` an alt that
names the vehicle and the neighborhood ("Ceramic coating on a black F-150 in Spanish Springs").

---

## 3. Google Business Profile

The map pack is where most of this traffic will come from, and the site alone will not get you there.

- [ ] Claim and verify the GBP. Primary category: **Car detailing service**.
- [ ] Set it as a **service area business** so the radius shows instead of a street address. List Reno, Sparks, Spanish Springs, Sun Valley, Verdi, Washoe Valley.
- [x] Hours and phone match, checked against the live GBP on 2026-09-04. Both say Monday to Friday, 8:00am to 5:00pm, weekends closed, 775-374-1281. If the GBP hours ever change, change the footer and the JSON-LD `openingHoursSpecification` with them.
- [x] `postalCode` is gone from the JSON-LD. The GBP is a service area business and hides the
  street address, so publishing a ZIP would have been a NAP mismatch. `areaServed` carries the
  coverage instead. Do not add an address back unless the GBP starts showing one.

The GBP, Facebook, Instagram, Yelp and BBB URLs are already in the JSON-LD `sameAs` array.

`aggregateRating` is already in the LocalBusiness schema: 5.0 from 66 reviews, read off
the GBP on 2026-08-20. Update the count in both the schema and the line under the
REVIEWS heading when it drifts.

---

## 4. After launch

- [ ] Submit `sitemap.xml` in Google Search Console and request indexing.
- [ ] Verify in Bing Webmaster Tools too. It feeds ChatGPT and Copilot search.
- [ ] Run the page through Google's Rich Results Test. LocalBusiness and FAQPage should both validate.
- [ ] Tap every Call and Text button from a real phone.
- [ ] Consider Google Ads or LSAs for "mobile detailing reno" while organic builds. Local SEO takes 30 to 90 days.

---

## 5. Notes on what is deliberately not here

- **No pricing.** Services show duration, not cost. The FAQ explains that condition drives the number. The JSON-LD Offer catalog carries no price data.
- **No contact form.** Call and text only.
- **No gold or secondary accent.** Palette is the logo: black, chrome, and red reserved for CTAs.

## 5b. What ships

The web root now holds site files only. Every working file lives in `_src/`, which is not
part of the site: the original photos, `maximum.jpg`, `logo.png`, the cutout PNG, the .docx.

`robots.txt` blocks `/_src/` and `/TODO.md` as a safety net in case the whole folder gets
uploaded, but the clean move is to upload `index.html`, `404.html`, `styles.css`,
`script.js`, `robots.txt`, `sitemap.xml`, `site.webmanifest` and `assets/` only.

## 6. Files

```
index.html       the whole site, 9 sections
styles.css       one stylesheet, no framework
script.js        mobile nav, gallery slider, FAQ accordion
404.html
robots.txt       AI crawlers explicitly allowed, _src blocked
sitemap.xml
site.webmanifest
assets/img/      logo derivatives, favicons, OG image
_src/            working files, never uploaded: source photos, maximum.jpg (logo source),
                 logo.png, the cutout PNG, Copy of Pictures.docx
```

`assets/img/logo-mark.webp` is the Maximum logo with the black keyed out to transparency.
That is the one the site uses.

The footer credit reads "Built by Rankdon" and links dofollow to https://rankdon.com in a
new tab. No `rel="nofollow"`, so it passes equity, and the anchor text is the brand name.
