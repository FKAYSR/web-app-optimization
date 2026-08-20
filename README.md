## Hvad projektet indeholder

- React 19 + Vite 8 med den officielle React-plugin
- React Router v7 med `BrowserRouter` og `basename` via `import.meta.env.BASE_URL`
- 5 sider out-of-the-box: `Home`, `Posts`, `About`, `Contact`, `NotFound`
- Supabase starter med `/posts`, `.env.example` og GitHub Pages workflow support
- Eksempler på billedbrug i `HomePage`:
  - import fra `src/assets`
  - fil fra `public`
  - ekstern URL
- GitHub Actions workflow til automatisk deploy på push til `main`
- SPA-fallback på GitHub Pages via `404.html`

## Projektstruktur

```text
src/
  App.jsx               # Routes
  main.jsx              # BrowserRouter + basename
  styles.css            # Global styling
  assets/               # Lokale assets (fx example.svg)
  components/
    Navbar.jsx
    PostCard.jsx
  pages/
    HomePage.jsx
    PostsPage.jsx
    AboutPage.jsx
    ContactPage.jsx
    NotFoundPage.jsx
public/
  logo.webp             # Public asset
.env.example            # Skabelon til lokale Supabase variabler
.github/
  workflows/
    deploy.yml          # Build + deploy til GitHub Pages
```
