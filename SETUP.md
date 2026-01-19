# ShifaCom Landing Page - Setup Guide

## 📦 Project Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git (for version control)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <your-repository-url>
   cd shifacom
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the site

### Building for Production

```bash
# Build the project
npm run build

# Start production server
npm run start

# Generate static export (if needed)
npm run export
```

## 🎨 Customization Guide

### Logo & Branding

The ShifaCom logo (`appstore.png`) is located in `/public/`. To replace it:

1. Add your logo to `/public/appstore.png`
2. Update references if needed in components
3. Logo is used in Header and Hero components

### Color Scheme

All colors are defined in `/app/globals.css` under the `:root` CSS variables:

```css
:root {
  --primary: #2E595C;        /* Main brand color */
  --background: #FFFFFF;     /* Page background */
  --foreground: #1a1a1a;     /* Text color */
  --secondary: #F0F4F5;      /* Secondary background */
  /* ... more colors ... */
}
```

To change colors, update the hex values in globals.css.

### Content Updates

#### Home Page (`/app/page.tsx`)
- Edit hero headline and description
- Modify feature cards in Features component
- Update CTA text and links

#### Features Page (`/app/features/page.tsx`)
- Update `featureCategories` array with your features
- Modify security features list
- Update HIPAA compliance claims

#### Pricing Page (`/app/pricing/page.tsx`)
- Edit the `plans` array to change pricing tiers
- Update feature lists per plan
- Modify FAQ questions and answers

#### About Page (`/app/about/page.tsx`)
- Update mission statement
- Modify team member count
- Update statistics (facilities, records, etc.)

#### Contact Page (`/app/contact/page.tsx`)
- Update contact information (email, phone, address)
- Modify hours of operation
- Change office hours

#### Footer (`/components/Footer.tsx`)
- Update company description
- Modify footer links
- Update contact details

### Component Customization

#### Header Navigation
Edit the `navLinks` array in `/components/Header.tsx`:
```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  // Add more links as needed
]
```

#### Hero Section
Modify content in `/components/Hero.tsx`:
- Change headline and subheading
- Update statistics and metrics
- Modify CTA button text and links

### Form Setup

The contact form in `/app/contact/page.tsx` is functional but doesn't send emails by default.

To enable email sending:

1. **Option 1: Connect to SendGrid**
   - Add SendGrid API key to environment variables
   - Update form handler to call SendGrid API

2. **Option 2: Use Vercel Functions**
   - Create API route: `/app/api/contact/route.ts`
   - Implement email sending logic

3. **Option 3: Use Third-party Service**
   - Formspree
   - Netlify Forms
   - EmailJS

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Configure Domain**
   - Add your custom domain in Vercel project settings
   - Update DNS records with Vercel values

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the 'out' folder to Netlify
```

#### Docker (Self-hosted)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📧 Email Integration

To enable contact form emails, add an environment variable:

```env
SENDGRID_API_KEY=your_api_key_here
# or
RESEND_API_KEY=your_api_key_here
```

Then update `/app/contact/page.tsx` to use the service.

## 🔒 Security Checklist

- [ ] Update all placeholder email addresses
- [ ] Update phone numbers
- [ ] Update physical address
- [ ] Add real company information
- [ ] Enable HTTPS on production domain
- [ ] Set up security headers in `next.config.mjs`
- [ ] Configure robots.txt for SEO
- [ ] Add actual logo image
- [ ] Review HIPAA statements for accuracy
- [ ] Set up monitoring and analytics

## 📊 SEO Setup

1. **Meta Tags**: Update in each page's `metadata` export
2. **Sitemap**: Generate with `next-sitemap` package
3. **Robots.txt**: Already configured in `/public/robots.txt`
4. **Open Graph**: Add og: meta tags in page components

## 📱 Testing

### Mobile Testing
```bash
# Use mobile view in browser DevTools
# Or test on actual devices
npm run dev
```

### Cross-browser Testing
- Test in Chrome, Firefox, Safari, Edge
- Check mobile responsiveness

### Performance Testing
```bash
npm run build
npm run start
# Use Lighthouse in Chrome DevTools
```

## 🔄 Updates & Maintenance

### Regular Tasks
- [ ] Update content quarterly
- [ ] Review and update testimonials
- [ ] Check for broken links
- [ ] Verify contact information
- [ ] Update pricing if needed

### Security
- [ ] Keep dependencies updated: `npm audit fix`
- [ ] Monitor for security vulnerabilities
- [ ] Backup important data
- [ ] Test disaster recovery

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
npm install

# Rebuild
npm run build
```

### Image Loading Issues
- Ensure images are in `/public` folder
- Check image paths are correct
- Verify Image component alt text

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind CSS is properly imported
- Verify globals.css is loaded

### Form Not Working
- Check browser console for errors
- Verify form fields have correct `name` attributes
- Test with browser's form validation

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vercel Deployment](https://vercel.com/docs)

## 🎯 Next Steps

1. Customize content with your information
2. Add real logo and images
3. Set up email service for contact form
4. Test on multiple devices
5. Deploy to production
6. Monitor analytics and user feedback
7. Regularly update content and features

## 📞 Support

For questions or issues:
- Check the README.md file
- Review code comments
- Consult Next.js documentation
- Contact development team
