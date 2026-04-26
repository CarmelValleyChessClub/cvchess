# Carmel Valley Chess Club Website
## cvchess.com — GitHub Pages Deployment Guide

---

## SITE STRUCTURE

```
cvchess/
├── index.html          ← Homepage
├── after-school.html   ← After-School Program
├── summer-camp.html    ← Summer Camp 2026
├── friday-nights.html  ← $5 Friday Night Chess
├── coach-jb.html       ← Meet Coach JB
├── contact.html        ← Contact Page
├── assets/             ← ALL images and videos go here
│   ├── logo.png                    ← Chess club logo (transparent background)
│   ├── club-full.jpg               ← IMG_20260328_212054.jpg (full club, hand raised girl)
│   ├── kids-overhead.jpg           ← 20260421_154818.jpg (overhead kids playing)
│   ├── kids-playing-2.jpg          ← 20260421_155117.jpg (two kids with clock)
│   ├── giant-chess.jpg             ← Screenshot_2026-04-26_100835.jpg (boys playing giant chess)
│   ├── pool.jpg                    ← Screenshot_2026-04-24_165911.jpg (CVCYC pool)
│   ├── playground.jpg              ← Screenshot_2026-04-24_142152.jpg (Tatum's Treehouse)
│   ├── friday-night.jpg            ← 20260424_180418_3.jpg (adults playing Friday night)
│   ├── friday-adults.jpg           ← 20260424_180418_3.jpg (same, used on Friday page)
│   ├── coach-jb-portrait.jpg       ← chessclub-36.jpg (close-up portrait)
│   ├── coach-jb-smile.jpg          ← chessclub-43.jpg (smiling at camera)
│   ├── coach-jb-action.jpg         ← chessclub-32.jpg (leaning over board)
│   ├── coach-teaching.jpg          ← 20260420_163122_2.mp4 (use thumbnail/screenshot)
│   ├── family.jpg                  ← AbbyClaydenPhotography-79.jpg (family on bridge)
│   ├── venue-wide.jpg              ← chessclub-11.jpg (wide venue shot)
│   ├── venue-floor.jpg             ← chessclub-4.jpg (floor chess + bean bags)
│   └── venue-entry.jpg             ← chessclub-16.jpg (doorway entry shot)
└── README.md           ← This file
```

---

## STEP 1 — CREATE GITHUB REPOSITORY

1. Go to **github.com** and sign in (or create free account)
2. Click **"New repository"** (green button)
3. Name it exactly: `cvchess` (or your GitHub username's special repo for root domain)
4. Set to **Public**
5. Check **"Add a README file"**
6. Click **"Create repository"**

---

## STEP 2 — UPLOAD FILES

### Option A — GitHub Web Interface (easiest)
1. In your new repository, click **"uploading an existing file"**
2. Drag ALL the HTML files into the upload area
3. Create an `assets` folder by typing `assets/` before a filename
4. Upload all photos renamed exactly as shown in the file structure above
5. Click **"Commit changes"**

### Option B — GitHub Desktop App
1. Download **GitHub Desktop** from desktop.github.com
2. Clone your repository to your computer
3. Copy all files into the folder
4. Click **"Commit to main"** then **"Push origin"**

---

## STEP 3 — ENABLE GITHUB PAGES

1. In your repository, click **"Settings"** (top menu)
2. Click **"Pages"** (left sidebar)
3. Under "Source" select **"Deploy from a branch"**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**
6. Wait 2–3 minutes — your site will be live at: `yourusername.github.io/cvchess`

---

## STEP 4 — CONNECT YOUR CUSTOM DOMAIN (cvchess.com)

### In GitHub:
1. Settings → Pages → Custom domain
2. Type: `cvchess.com`
3. Click Save
4. Check "Enforce HTTPS" once available

### In your Domain Registrar (wherever cvchess.com is registered):
Add these DNS records:

**A Records (point to GitHub):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record:**
```
www → yourusername.github.io
```

DNS changes take 24–48 hours to fully propagate.

---

## STEP 5 — ADD YOUR IMAGES

Rename your photos EXACTLY as shown below before uploading to the `assets/` folder:

| Your File | Rename To |
|---|---|
| Chess_club_logo_no_white_background.png | logo.png |
| IMG_20260328_212054.jpg | club-full.jpg |
| 20260421_154818.jpg | kids-overhead.jpg |
| 20260421_155117.jpg | kids-playing-2.jpg |
| Screenshot_2026-04-26_100835.jpg | giant-chess.jpg |
| Screenshot_2026-04-24_165911.jpg | pool.jpg |
| Screenshot_2026-04-24_142152.jpg | playground.jpg |
| 20260424_180418_3.jpg | friday-night.jpg |
| 20260424_180418_3.jpg | friday-adults.jpg |
| chessclub-36.jpg | coach-jb-portrait.jpg |
| chessclub-43.jpg | coach-jb-smile.jpg |
| chessclub-32.jpg | coach-jb-action.jpg |
| AbbyClaydenPhotography-79.jpg | family.jpg |
| chessclub-11.jpg | venue-wide.jpg |
| chessclub-4.jpg | venue-floor.jpg |
| chessclub-16.jpg | venue-entry.jpg |

For `coach-teaching.jpg` — take a screenshot from the video `20260420_163122_2.mp4` and save as `coach-teaching.jpg`

---

## STEP 6 — VERIFY YOUR SITE

Once live, check these items:
- [ ] Homepage loads at cvchess.com
- [ ] Logo appears in navigation
- [ ] All photos load correctly
- [ ] All links between pages work
- [ ] Registration links go to Google Forms
- [ ] Phone number (831) 392-7456 is clickable on mobile
- [ ] Email chessclubcv@gmail.com is clickable
- [ ] Google Maps embed loads on Contact page
- [ ] Site looks correct on mobile (test on your phone)

---

## ADDING GOOGLE ANALYTICS (Recommended)

1. Go to analytics.google.com
2. Create a free account
3. Add your Measurement ID to each HTML file in the `<head>` section

---

## UPDATING THE SITE

To update any page:
1. Edit the HTML file on your computer
2. Upload the updated file to GitHub (it will replace the old one)
3. Changes go live within 1–2 minutes

---

## SEO CHECKLIST — Already Built In

✅ Unique meta title and description on every page
✅ Schema markup (LocalBusiness, Course, Event, Person)
✅ Canonical URLs
✅ Open Graph tags for social sharing
✅ Semantic HTML structure (h1, h2, h3)
✅ Alt text on all images
✅ NAP (Name, Address, Phone) consistent across all pages
✅ Address in footer of every page
✅ Mobile responsive design
✅ Fast loading (no bloated frameworks)

---

## GEO CHECKLIST — Already Built In

✅ Clear factual language throughout
✅ FAQ sections on key pages
✅ Structured data for AI engines
✅ Consistent NAP for local search
✅ Location-specific keyword usage
✅ Plain language descriptions of every program

---

## CONTACT & SUPPORT

- **Phone:** (831) 392-7456
- **Email:** chessclubcv@gmail.com
- **Instagram:** @chessclubcv
- **Facebook:** Carmel Valley Chess Club
- **Address:** 9 Del Fino Place, Suite 201, Carmel Valley, CA 93924

---

*Built for Carmel Valley Chess Club · Coach JB · cvchess.com*
