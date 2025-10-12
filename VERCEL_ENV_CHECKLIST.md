# Quick Vercel Environment Variables Check

## Go to Vercel Dashboard NOW:
https://vercel.com/dashboard

## Navigate to Settings:
1. Click on "pbminds-site" project
2. Click "Settings" tab at the top
3. Click "Environment Variables" in the left sidebar

## What You Should See:
You need ALL THREE of these variables:

✓ VITE_EMAILJS_SERVICE_ID = service_j1engff
✓ VITE_EMAILJS_TEMPLATE_ID = template_ysu2rmz  
✓ VITE_EMAILJS_PUBLIC_KEY = 0RgSeE5ektOPuP7R6

## If ANY are missing:
1. Click "Add New" button
2. Enter the Name (exactly as shown above)
3. Enter the Value (exactly as shown above)
4. Check ALL boxes: Production, Preview, Development
5. Click Save
6. Repeat for each missing variable

## After Adding ALL Variables:
1. Go to "Deployments" tab
2. Find the LATEST deployment (top of list)
3. Click three dots menu (⋮)
4. Click "Redeploy"
5. Wait 2-3 minutes
6. Test form again

## Common Mistakes:
❌ Only added to "Production" - need all 3 environments
❌ Typo in variable name - must match EXACTLY
❌ Forgot to redeploy after adding variables
❌ Missing one of the three variables
