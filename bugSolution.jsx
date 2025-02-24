To address the issue, you can leverage the `useLocation` hook to check the current location and render a custom 404 component.   Alternatively, a catch-all route can be added to cover unexpected paths.

```jsx
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/home">Home</Link> <Link to="/about">About</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The requested path "`{location.pathname}"` was not found.</p>
    </div>
  );
}

// ... Home, About components
```
This approach provides a user-friendly error message, improving the overall application experience.