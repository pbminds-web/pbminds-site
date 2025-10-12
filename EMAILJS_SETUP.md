# EmailJS Configuration Guide

## Overview
The contact form uses EmailJS to send emails. You need to configure EmailJS credentials in both local development and production (Vercel).

## Local Development Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Update `.env.local` with your EmailJS credentials:**
   ```
   VITE_EMAILJS_SERVICE_ID=service_j1engff
   VITE_EMAILJS_TEMPLATE_ID=template_ysu2rmz
   VITE_EMAILJS_PUBLIC_KEY=0RgSeE5ektOPuP7R6
   ```

3. **Restart your dev server:**
   ```bash
   npm run dev
   ```

## Production Setup (Vercel)

### Add Environment Variables to Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your "pbminds-site" project
3. Go to **Settings** → **Environment Variables**
4. Add these three variables:

   **Service ID:**
   - Name: `VITE_EMAILJS_SERVICE_ID`
   - Value: `service_j1engff`
   - Environments: Production, Preview, Development

   **Template ID:**
   - Name: `VITE_EMAILJS_TEMPLATE_ID`
   - Value: `template_ysu2rmz`
   - Environments: Production, Preview, Development

   **Public Key:**
   - Name: `VITE_EMAILJS_PUBLIC_KEY`
   - Value: `0RgSeE5ektOPuP7R6`
   - Environments: Production, Preview, Development

5. **Redeploy your site:**
   - Go to Deployments tab
   - Click ⋮ on latest deployment
   - Click "Redeploy"

## Getting EmailJS Credentials

1. Visit [EmailJS Dashboard](https://dashboard.emailjs.com)
2. **Service ID**: Go to Email Services → Your Service → Copy Service ID
3. **Template ID**: Go to Email Templates → Your Template → Copy Template ID
4. **Public Key**: Go to Account → General → Copy Public Key

## Template Configuration

Your EmailJS template should include these variables:
- `{{user_name}}` - Name from contact form
- `{{user_email}}` - Email from contact form
- `{{message}}` - Message from contact form

## Current Configuration (As of October 13, 2025)

- Service ID: `service_j1engff`
- Template ID: `template_ysu2rmz`
- Public Key: `0RgSeE5ektOPuP7R6`

## Security Notes

⚠️ **Important:**
- Never commit `.env.local` to Git
- The `.env.local` file is already in `.gitignore`
- Keep your EmailJS credentials private
- Use environment variables in Vercel for production

## Troubleshooting

**"Failed to send message" error:**
1. Verify credentials are correct in EmailJS dashboard
2. Check environment variables are set in Vercel
3. Redeploy after adding/updating Vercel env vars
4. Check browser console for detailed error messages
5. Verify EmailJS template has correct variable names

**Local development not working:**
1. Make sure `.env.local` file exists
2. Restart dev server after changing `.env.local`
3. Check that variable names start with `VITE_`

## Testing

**Local:**
```bash
npm run dev
# Visit http://localhost:5173
# Go to Contact section
# Submit form
```

**Production:**
1. Visit https://pbmindstech.com
2. Go to Contact section
3. Submit test message
4. Check recipient email for delivery
