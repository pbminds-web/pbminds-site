# EmailJS Troubleshooting Checklist

## 1. Verify Service ID

**Go to EmailJS Dashboard**: https://dashboard.emailjs.com/admin

### Steps:
1. Click on "Email Services" in the left menu
2. Look for your service (Gmail, Outlook, etc.)
3. **Copy the Service ID** - should be: `service_j1engff`
4. If different, update `.env.local` with correct ID

### Check:
- [ ] Service exists
- [ ] Service is ACTIVE (not blocked/suspended)
- [ ] Service ID matches: `service_j1engff`

---

## 2. Verify Template ID

### Steps:
1. Click on "Email Templates" in the left menu
2. Find your contact form template
3. **Copy the Template ID** - should be: `template_ysu2rmz`
4. Click on the template to edit it

### Check Template Content:
Your template MUST have these variables:
```
{{user_name}}
{{user_email}}
{{message}}
```

### Template Example:
```
New message from {{user_name}}

From: {{user_email}}

Message:
{{message}}
```

### Check:
- [ ] Template exists
- [ ] Template ID matches: `template_ysu2rmz`
- [ ] Template has `{{user_name}}` variable
- [ ] Template has `{{user_email}}` variable
- [ ] Template has `{{message}}` variable

---

## 3. Verify Public Key

### Steps:
1. Click on "Account" in the left menu
2. Click on "General" tab
3. Find "Public Key" section
4. **Copy the Public Key** - should be: `0RgSeE5ektOPuP7R6`

### Check:
- [ ] Public Key matches: `0RgSeE5ektOPuP7R6`
- [ ] Account is active (not suspended)

---

## 4. Check Email Service Connection

### Steps:
1. Go to "Email Services"
2. Click on your service
3. Click "Check connection" or "Test" button

### Check:
- [ ] Connection test passes
- [ ] SMTP/API credentials are valid
- [ ] Service is not rate-limited

---

## 5. Check Template Field Names

**IMPORTANT**: Field names in your form MUST match template variables!

### Your Contact Form Fields:
```jsx
<input name="user_name" />      → Template: {{user_name}}
<input name="user_email" />     → Template: {{user_email}}
<textarea name="message" />     → Template: {{message}}
```

### Check:
- [ ] Form field names match template variables EXACTLY
- [ ] No typos in variable names
- [ ] Variables use double curly braces {{}}

---

## 6. Check EmailJS Account Limits

### Free Plan Limits:
- 200 emails/month
- Rate limit: 1 email per second

### Steps:
1. Go to EmailJS Dashboard
2. Check "Usage" or "Statistics"
3. Verify you haven't exceeded limits

### Check:
- [ ] Not at monthly limit
- [ ] Not rate-limited
- [ ] Account in good standing

---

## 7. Common Error Messages

### "The public key is invalid"
**Fix**: Copy correct public key from Account → General

### "The user ID is invalid"
**Fix**: Public key is called "Public Key" now, not "User ID" (old version)

### "Template params are invalid"
**Fix**: Check template variable names match form field names

### "Service ID is invalid"
**Fix**: Copy correct service ID from Email Services

### "Template ID is invalid"
**Fix**: Copy correct template ID from Email Templates

### "Request failed with status code 400"
**Fix**: One or more credentials are wrong

### "Request failed with status code 403"
**Fix**: Service blocked or account suspended

### "Request failed with status code 422"
**Fix**: Template variables don't match form fields

---

## 8. Test Credentials Manually

**Test page created**: `test-emailjs.html`

### Steps:
1. Open `test-emailjs.html` in browser
2. Click "Send Test Email"
3. Check the error message
4. Fix the issue based on error
5. Test again

---

## 9. Quick Fix Checklist

If test fails, verify IN THIS ORDER:

1. [ ] Go to https://dashboard.emailjs.com/admin
2. [ ] Check Email Services → Copy Service ID
3. [ ] Check Email Templates → Copy Template ID  
4. [ ] Check Account → General → Copy Public Key
5. [ ] Update `.env.local` with correct values
6. [ ] Restart dev server: `npm run dev`
7. [ ] Test again on localhost:5173

---

## 10. Update Credentials

If any values are different, update `.env.local`:

```bash
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

Then restart: `npm run dev`

---

## Need Help?

After checking everything above, if still failing:
1. Copy the EXACT error message from test page
2. Screenshot your EmailJS dashboard (hide sensitive info)
3. Double-check all IDs match EXACTLY (case-sensitive!)
