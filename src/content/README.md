# Site Content

All website text and photos live in this folder.

## To change text
Open **`site.ts`** and edit any string. Save — the preview updates instantly.

## To change a photo
1. Open **`images/`**.
2. Replace a file with a new one **using the same filename** (e.g. drop a new `hero.jpg` over the old one).
3. That's it — every place using that image updates.

## To add a new photo
1. Drop the new file into **`images/`** (e.g. `images/feat-6.jpg`).
2. In `site.ts`, add an `import` line at the top:
   ```ts
   import feat6 from "./images/feat-6.jpg";
   ```
3. Add it to the `images` object and reference it where you want.
