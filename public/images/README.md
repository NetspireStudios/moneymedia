# Images Folder

This folder contains static images for the Internet Money Media website.

## Logo Files

### Current Official Logo
- `internetmoneymedia.svg` - Official Internet Money Media logo in SVG format
- `internetmoneymedia.ico` - Official favicon for browser tabs and bookmarks

The logo is automatically implemented in:
- Navigation header across all pages
- Browser favicon (shows in tabs and bookmarks)
- All important brand placement areas

### Logo Specifications
- **Format**: SVG (scalable vector graphics)
- **Dimensions**: Optimized for navigation use
- **Theme compatibility**: Works with both light and dark themes
- **Quality**: Vector-based for crisp display at all sizes

### Performance Optimization
- SVG format ensures minimal file size with infinite scalability
- Logo uses `priority` loading in navigation for immediate display
- Favicon properly configured in site metadata

## File Naming Convention
- Use lowercase letters
- Use descriptive names: `internetmoneymedia.svg`
- Include file format extension

## Additional Logo Guidelines

If you need to add more logo variations in the future:

### Theme-Specific Logos
If different versions are needed for light/dark themes:

```tsx
import { useTheme } from '@/lib/theme-context'

const { theme } = useTheme()

<Image
  src={theme === 'dark' ? '/images/logo-dark.svg' : '/images/logo-light.svg'}
  alt="Internet Money Media Logo"
  width={120}
  height={40}
  className="h-8 w-auto sm:h-10"
  priority
/>
```

### Logo Update Process
To update the logo in the future:
1. Replace `internetmoneymedia.svg` with your new logo
2. Replace `internetmoneymedia.ico` with your new favicon
3. No code changes needed - the file paths remain the same 