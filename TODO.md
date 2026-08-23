# Maximum Mobile Detailing — launch punch list

Static site. No build step, no framework, no form backend. Upload the folder to any host
(Netlify, Cloudflare Pages, Vercel, or plain shared hosting) and it runs.

Conversion path is **call or text 775-374-1281**. There is no contact form to maintain
and nothing to activate.

---

## 1. Blockers

### 1.1 Domain — DONE
Live domain is `https://maximummobiledetail.com`. It is set in the canonical tag,
OG and Twitter tags, the JSON-LD, robots.txt and sitemap.xml. Nothing left to swap.

### 1.2 Replace the placeholder reviews
`index.html`, the REVIEWS block. All three quotes are placeholder text and say so.
Paste in real Google reviews word for word with the reviewer's real first name and last
initial, then point the "Read all reviews on Google" link at the Google Business Profile.

Do not publish the placeholder text.

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
- [ ] Hours 7am to 7pm daily and phone 775-374-1281, matching the footer character for character. NAP consistency is a real ranking factor.
- [ ] Paste the GBP URL into two places in `index.html`: the footer link and the `sameAs` array in the JSON-LD.
- [ ] Confirm the `postalCode` in the JSON-LD matches the GBP. It is `89501` as a stand-in.
- [ ] Add Facebook and Instagram to the same `sameAs` array.

Once you have real review counts, add `aggregateRating` to the LocalBusiness schema.
It is deliberately absent. Fabricated ratings get flagged.

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

## 6. Files

```
index.html       the whole site, 9 sections
styles.css       one stylesheet, no framework
script.js        mobile nav, gallery slider, FAQ accordion
404.html
robots.txt       AI crawlers explicitly allowed
sitemap.xml
site.webmanifest
assets/img/      logo derivatives, favicons, OG image, DON credit mark
maximum.jpg      original logo source
logo.png         Don of Detail mark you dropped in
```

`assets/img/logo-mark.png` is the Maximum logo with the black keyed out to transparency.
That is the one the site uses.

The footer credit links the DON mark dofollow to https://donofdetail.com in a new tab.
No `rel="nofollow"`, so it passes equity. Alt text is "Don of Detail", which is the
anchor text Google reads for an image link.
