OzAir Flight Tools v0.31a — PUBLIC-SAFE PWA PILOT TEST

WHAT THIS IS
The approved v0.31a standalone HTML app repackaged as a website-installable PWA. The existing planning code and card design were retained. The app now has a manifest, app icons, and offline caching for its local app shell.

DEPLOYMENT (ADMINISTRATOR)
1. Host the CONTENTS of this folder at an HTTPS address. GitHub Pages is one option for this version with pilot contacts removed. Do not ask pilots to open index.html from the Files app; that does NOT install a PWA.
2. If using GitHub Pages, put index.html, manifest.webmanifest, service-worker.js, and icons/ together at the site root (or same subfolder). Enable Pages for that branch/folder. Share the resulting HTTPS URL.
3. For testing, use a NEW dedicated repository/site path so it does not replace any existing OzAir deployment.

IPAD INSTALL
1. Open the HTTPS URL in Safari.
2. Tap Share, then Add to Home Screen (on some iPadOS versions choose More > Add to Home Screen).
3. Choose Add. Open OzAir Tools from the Home Screen icon.
4. Enter a test trip, close the app, reopen, and confirm persistence. Test Save Trip/Load Trip, PDF import, weather, and both print views.

IMPORTANT LIMITATIONS
- The PWA app shell can load offline after a successful first online visit and cache installation; forecast weather always needs internet.
- JetInsight PDF import uses PDF.js loaded from a third-party CDN in the existing v0.31a code; internet is required unless this dependency is bundled in a future change.
- iPad Home Screen app storage is not necessarily shared with Safari, Edge, Windows, or the original locally opened HTML. Export and import transfer backups to move the working trip/reference data; save individual trips separately.
- iPad printing, file pickers, offline cache, and persistence require actual device testing. This package was not tested on a physical iPad.
- Updates require a new hosted deployment/cache version and device testing; do not assume changes automatically migrate stored data.
- Existing flight planning calculations, layout, and printable Data Card have not been intentionally changed. Independent verification is still required before flight.
- Open-Meteo commercial-use/licensing requires review before operational rollout.

VERSION: v0.31a-PWA-Test-1. This is a TEST DISTRIBUTION, not an operational release.

PUBLIC REPOSITORY PRIVACY NOTICE
The built-in pilot contact directory has been replaced with an empty list. Pilot directory management remains available for local testing, but do NOT enter real pilot contact information in public issue reports or source files. This build still includes aircraft tail numbers, aircraft configuration, fuel purchase methods, logos, and application source. Confirm OzAir approves publishing these details before upload. Do not upload transfer backups or saved-trip JSON files containing personal or business information. Existing stored browser reference data may still contain contacts; a fresh install or explicit reference reset is needed to test the empty directory.
