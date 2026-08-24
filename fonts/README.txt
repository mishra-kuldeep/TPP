This project currently loads its two typefaces (Fraunces and Inter) from
Google Fonts via a <link> tag in index.html — the same method used in the
approved concept file, so the design renders exactly as approved.

This folder is reserved for self-hosted font files (.woff2) if you'd
prefer not to depend on Google's CDN — for example, for offline use,
faster loading, or GDPR-related preferences.

To self-host:
1. Download the two families from https://fonts.google.com
   (Fraunces — weights 300/400/500/600, roman + italic;
   Inter — weights 400/500/600/700)
2. Place the .woff2 files in this folder
3. Replace the Google Fonts <link> tags in index.html with local
   @font-face rules at the top of css/style.css pointing to
   fonts/<filename>.woff2

This step was intentionally left as-is to guarantee zero visual change
from the approved version.
