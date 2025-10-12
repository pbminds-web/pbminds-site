# reCAPTCHA Configuration for Contact Form

## What Was Updated

The contact form has been updated to work with EmailJS's reCAPTCHA integration.

## Changes Made:

1. **Contact.jsx**: Updated to handle reCAPTCHA token generation
2. **index.html**: Added Google reCAPTCHA script

## How It Works:

- The form now automatically handles reCAPTCHA if it's enabled in EmailJS
- If reCAPTCHA is disabled in EmailJS, the form still works normally
- No additional configuration needed - it's automatic!

## EmailJS reCAPTCHA Settings:

Your EmailJS account has reCAPTCHA enabled. The form will now:
1. Automatically request a reCAPTCHA token when form is submitted
2. Include the token with the email submission
3. Reset the reCAPTCHA after successful submission

## Testing:

### Local Testing:
1. Run: `npm run dev`
2. Go to: http://localhost:5173
3. Fill out and submit the contact form
4. Should work without errors ✅

### Production Testing:
After deployment:
1. Visit: https://pbmindstech.com
2. Go to Contact section
3. Fill out and submit the form
4. Should work without errors ✅

## Troubleshooting:

**If you see reCAPTCHA errors:**
1. Go to: https://dashboard.emailjs.com/admin/account/security
2. Verify reCAPTCHA is enabled
3. Make sure the reCAPTCHA type is "v2" (not v3)
4. EmailJS automatically handles the reCAPTCHA site key

**If you want to disable reCAPTCHA:**
1. Go to: https://dashboard.emailjs.com/admin/account/security
2. Toggle OFF reCAPTCHA
3. Form will still work (code handles both cases)

## Benefits:

✅ Prevents spam submissions
✅ Invisible to users (no checkbox required)
✅ Automatic integration with EmailJS
✅ Works with or without reCAPTCHA enabled
✅ No additional API keys needed

## Technical Details:

- Uses Google reCAPTCHA v2 (Invisible)
- Integrated with EmailJS's built-in reCAPTCHA support
- Falls back gracefully if reCAPTCHA script doesn't load
- Compatible with EmailJS's security settings

## Note:

EmailJS manages the reCAPTCHA integration internally. You don't need to:
- Get your own Google reCAPTCHA keys
- Configure reCAPTCHA settings separately
- Add reCAPTCHA widgets to your form

EmailJS handles everything automatically when reCAPTCHA is enabled in your account settings!
