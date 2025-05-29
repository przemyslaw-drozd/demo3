# Copilot Instructions

## Best Practices for React
1. Use `React.memo` for components that do not need frequent re-rendering.
2. Wrap the application in `StrictMode` to identify potential issues.
3. Use TypeScript interfaces or types for props to ensure type safety.
4. Avoid inline styles; use styled-components or CSS modules for styling.
5. Use hooks like `useEffect` and `useState` responsibly to manage side effects and state.

## Best Practices for TypeScript
1. Enable strict type-checking in `tsconfig.json`:
   ```json
   "strict": true,
   "noImplicitAny": true,
   "strictNullChecks": true,
   "noImplicitReturns": true,
   "noImplicitThis": true,
   "alwaysStrict": true
   ```
2. Use type-safe hooks and avoid the `any` type.
3. Define reusable types and interfaces for complex objects.
4. Use `tslint` or `eslint` with TypeScript-specific rules for linting.

## Best Practices for Vite
1. Optimize the `vite.config.ts` file:
   - Use aliases for cleaner imports:
     ```ts
     resolve: {
       alias: {
         '@': '/src',
       },
     }
     ```
   - Configure plugins for production builds.
2. Use the `public` folder for static assets like images and icons.
3. Leverage Vite's HMR (Hot Module Replacement) for faster development.

## Best Practices for Styled Components
1. Use `ThemeProvider` to manage global themes:
   ```tsx
   import { ThemeProvider } from 'styled-components';

   const theme = {
     colors: {
       primary: '#646cff',
       secondary: '#535bf2',
     },
   };

   <ThemeProvider theme={theme}>...</ThemeProvider>
   ```
2. Define reusable styled components for consistent styling.
3. Avoid hardcoding styles; use theme variables instead.
4. Use `createGlobalStyle` for global CSS.

## Project Structure
1. Organize files into meaningful folders:
   - `src/components`: For React components.
   - `src/assets`: For images, icons, and other static assets.
   - `src/styles`: For global styles and theme definitions.
2. Use `index.ts` files for barrel exports.
3. Keep the `public` folder for static files accessible without imports.
4. Maintain a clean and descriptive `README.md` for project documentation.

## Additional Notes
- Use ESLint with React and TypeScript plugins for consistent code quality.
- Regularly update dependencies to avoid security vulnerabilities.
- Write unit tests for critical components and functions.
- Document reusable components and hooks for better collaboration.
