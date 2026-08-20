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
  App.jsx              
  main.jsx            
  styles.css          
  assets/             
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
  logo.webp           
.github/
  workflows/
    deploy.yml          
```
