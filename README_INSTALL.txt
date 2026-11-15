OzAir Flight Tools Pilot Test v0.32.24 — iPad PDF export candidate

Changes from v0.32.23:
- Installed iPad PWA: Flight Data Card button attempts to render each existing Data Card page into an offline JPEG-backed PDF and share the .pdf through the native iOS Share Sheet.
- Visible error messages for rendering failures; cancellation is silent.
- Existing desktop/Android print path unchanged.
- Trip Document Import explanations unchanged.
- No fuel planning logic changes.

IMPORTANT: iPad PDF rendering uses browser SVG foreignObject canvas capture. Compatibility with the installed iPad PWA is UNVERIFIED. Do not consider this fixed until tested on the iPad. The PDF pages must be visually inspected for content and alignment before operational use.

This is a PILOT TEST build, not a validated production release.
