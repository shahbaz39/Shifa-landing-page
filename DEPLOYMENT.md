# ShifaCom Landing Page - Deployment Guide

## 🚀 Quick Start Deployment

### Deploy to Vercel (Recommended - 5 minutes)

**Vercel is the easiest option** - it's built by the Next.js creators and requires no configuration.

1. **Push to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "ShifaCom landing page"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com/signup)
   - Click "Sign up with GitHub"
   - Authorize Vercel to access your GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. **Done!** 🎉
   - Vercel will automatically build and deploy
   - Your site is live in seconds
   - Get a free `.vercel.app` domain

4. **Connect Custom Domain** (Optional)
   - In Vercel Dashboard: Project Settings → Domains
   - Add your custom domain (e.g., shifacom.com)
   - Follow DNS instructions from Vercel
   - Wait 24 hours for propagation

---

## 📋 Other Deployment Options

### Deploy to Netlify

1. **Push to GitHub** (required)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Configure Domain**
   - Site settings → Domain management
   - Add custom domain

### Deploy to AWS Amplify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Connect to AWS Amplify**
   - Go to AWS Amplify Console
   - Connect GitHub repository
   - Build settings will auto-configure
   - Deploy

3. **Configure Domain**
   - Add custom domain in Amplify settings

### Deploy to Self-Hosted Server

#### Using Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   
   # Copy package files
   COPY package*.json ./
   
   # Install dependencies
   RUN npm ci --only=production
   
   # Copy app
   COPY . .
   
   # Build
   RUN npm run build
   
   # Expose port
   EXPOSE 3000
   
   # Start
   CMD ["npm", "start"]
   ```

2. **Build Docker image**
   ```bash
   docker build -t shifacom-landing .
   ```

3. **Run container**
   ```bash
   docker run -p 3000:80 shifacom-landing
   ```

4. **Push to Container Registry**
   - Docker Hub
   - AWS ECR
   - Google Container Registry
   - Your private registry

#### Using Linux Server (VPS)

1. **SSH into your server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install dependencies**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs npm git
   ```

3. **Clone repository**
   ```bash
   git clone <your-repo-url>
   cd shifacom
   npm install
   ```

4. **Build application**
   ```bash
   npm run build
   ```

5. **Install PM2 (process manager)**
   ```bash
   sudo npm install -g pm2
   ```

6. **Start application**
   ```bash
   pm2 start npm --name "shifacom" -- start
   pm2 save
   pm2 startup
   ```

7. **Setup Nginx (reverse proxy)**
   ```bash
   sudo apt-get install nginx
   sudo nano /etc/nginx/sites-available/default
   ```

   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name shifacom.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Enable and restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

9. **Setup SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d shifacom.com
   ```

---

## 🔧 Environment Variables

### Create `.env.local` (for development)
```env
# Not needed for this landing page
# But if you add backend features:
NEXT_PUBLIC_API_URL=https://api.shifacom.com
DATABASE_URL=postgresql://...
```

### Production Environment
Set these in your hosting platform's settings:
- Vercel: Project Settings → Environment Variables
- Netlify: Build & deploy → Environment
- AWS: Systems Manager → Parameter Store
- Self-hosted: In `.env` file or system environment

---

## 📊 Pre-Deployment Checklist

### Content ✅
- [ ] Logo uploaded (/public/appstore.png)
- [ ] Company information updated
- [ ] Contact details are correct
- [ ] All links work
- [ ] No placeholder text

### SEO & Meta ✅
- [ ] Page titles updated
- [ ] Meta descriptions set
- [ ] OG images configured
- [ ] Sitemap ready
- [ ] Robots.txt checked

### Performance ✅
- [ ] Images optimized
- [ ] Lighthouse score > 90
- [ ] No console errors
- [ ] Mobile responsive tested

### Security ✅
- [ ] HTTPS configured
- [ ] No API keys in code
- [ ] Forms validated
- [ ] CORS headers set (if needed)

### Testing ✅
- [ ] Desktop browser testing
- [ ] Mobile testing
- [ ] Tablet testing
- [ ] Form submission works
- [ ] All pages load

---

## 📈 Post-Deployment Setup

### 1. Monitor Performance
- Set up Sentry for error tracking:
  ```bash
  npm install @sentry/nextjs
  ```

- Add Google Analytics:
  - Get tracking ID from Google Analytics
  - Add to your pages

### 2. Setup Email Notifications
For contact form, integrate with:
- **SendGrid** - Email API
- **Resend** - Email service
- **EmailJS** - Client-side emails

Example with Resend:
```bash
npm install resend
```

Update `/app/contact/page.tsx` to use Resend API.

### 3. Monitor Uptime
- Use tools like:
  - UptimeRobot (free)
  - Pingdom
  - New Relic

### 4. Setup Backups
- Enable version control backups
- Set up repository backups
- Consider database backups (if added)

---

## 🔍 Domain Setup

### Point Domain to Vercel
1. Get Vercel nameservers from dashboard
2. Update domain DNS:
   - Go to domain registrar (GoDaddy, Namecheap, etc.)
   - Update nameservers to Vercel's:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```

### Point Domain to Custom Server
1. Get server IP address
2. Update DNS A record:
   ```
   A Record: @ → your-server-ip
   A Record: www → your-server-ip
   ```
3. Wait 24 hours for propagation

---

## 🐛 Troubleshooting Deployments

### Page Shows Build Error
```bash
# Check logs locally first
npm run build

# If it builds locally but not on hosting:
# - Check Node version matches (18+)
# - Verify all dependencies in package.json
# - Check for environment variable issues
```

### Images Not Loading
- Ensure images are in `/public` folder
- Use relative paths: `/appstore.png`
- Verify Image component is used correctly
- Check CORS headers if images from CDN

### Form Not Working
- Check network tab for API errors
- Verify form endpoint is configured
- Check email service is connected
- Test locally first

### Site Shows Old Content
- Clear browser cache (Ctrl+Shift+Delete)
- Clear CDN cache (in hosting platform)
- Clear Vercel cache:
  ```bash
  # If using Vercel CLI:
  vercel env pull
  vercel deploy --prod
  ```

---

## 🚨 Emergency Rollback

If something breaks in production:

### Vercel
1. Go to Deployments tab
2. Find previous working deployment
3. Click "Promote to Production"

### Netlify
1. Go to "Deploys"
2. Find previous successful deploy
3. Click "Publish"

### Git Rollback
```bash
# Find previous commit
git log

# Revert to previous commit
git revert <commit-hash>
git push
```

---

## 📊 Monitoring After Deployment

### Essential Metrics to Track
1. **Uptime** - Should be 99.9%+
2. **Page Load Time** - < 3 seconds
3. **Traffic Sources** - Where users come from
4. **Bounce Rate** - User engagement
5. **Conversion Rate** - Contact form submissions

### Setup Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID
3. Add to your site:
   ```bash
   npm install @react-google-analytics
   ```

### Setup Error Tracking
1. Create Sentry account
2. Get DSN
3. Add to your site

---

## 🔒 Security Checklist Post-Deployment

- [ ] Enable HTTPS
- [ ] Set security headers (in next.config.mjs)
- [ ] Configure CORS
- [ ] Enable rate limiting
- [ ] Setup WAF (Web Application Firewall)
- [ ] Monitor for DDoS attacks
- [ ] Review access logs
- [ ] Ensure backups working
- [ ] Update dependencies regularly
- [ ] Monitor SSL certificate expiry

---

## 📝 Common Deployment Issues

### Issue: Build Fails with "Module not found"
**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Issue: Port 3000 Already in Use
**Solution:**
```bash
# Use different port
PORT=3001 npm start

# Or kill process using 3000:
lsof -ti:3000 | xargs kill
```

### Issue: Styles Not Applied
**Solution:**
- Clear `.next` folder
- Rebuild with `npm run build`
- Check globals.css is imported
- Verify Tailwind config

### Issue: Images Show 404 Error
**Solution:**
- Images must be in `/public` folder
- Use correct paths: `/image.png`
- Rebuild if newly added
- Check permissions on hosting

---

## 🎯 Next Steps After Deployment

1. **Share the Site**
   - Email launch notification
   - Share on social media
   - Update business cards
   - Update email signatures

2. **Monitor Analytics**
   - Track visitor numbers
   - Monitor form submissions
   - Check bounce rates
   - Analyze user behavior

3. **Gather Feedback**
   - Monitor support emails
   - Check contact form submissions
   - Gather user feedback
   - Identify improvement areas

4. **Plan Updates**
   - Schedule content updates
   - Plan new features
   - Fix any issues reported
   - Improve conversion rate

---

## 📞 Support & Help

If you encounter issues:

1. **Check Documentation**
   - README.md
   - SETUP.md
   - This file

2. **Platform Support**
   - Vercel: [Support](https://vercel.com/support)
   - Netlify: [Community](https://community.netlify.com)
   - AWS: [Support](https://console.aws.amazon.com/support)

3. **Next.js Help**
   - [Next.js Documentation](https://nextjs.org/docs)
   - [Next.js Discord](https://discord.gg/nextjs)

---

**Good luck with your deployment! 🚀**
