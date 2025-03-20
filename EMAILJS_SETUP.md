# EmailJS Setup Instructions

Follow these steps to configure EmailJS for your R2code contact form:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Connect Your Email Service

1. In the EmailJS dashboard, go to "Email Services" in the sidebar
2. Click "Add New Service"
3. Choose your email provider (Gmail is recommended for simplicity)
4. Follow the authentication steps to connect your nikolartukov@gmail.com email
5. Give your service a name (e.g., "R2code Contact Form")
6. Note down the **Service ID** that is created for you (it will look like "service_xxxxxxx")

## Step 3: Create an Email Template

1. In the EmailJS dashboard, go to "Email Templates" in the sidebar
2. Click "Create New Template"
3. Give your template a name (e.g., "R2code Contact Form")
4. Design your email template. Here's a suggested format:

```
Subject: New Contact Form Submission from {{name}}

You've received a new message from your website contact form:

Name: {{name}}
Email: {{email}}
Company: {{company}}

Message:
{{message}}

Sent via the R2code website contact form.
```

5. Save your template
6. Note down the **Template ID** that is created for you (it will look like "template_xxxxxxx")

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to "Account" in the sidebar
2. Look for your "Public Key" (it will look like "XXXXXXXXXXXXXXXX")
3. Note down this key

## Step 5: Update Your Code

Open `src/components/ContactSection.tsx` and replace the placeholder values with your actual IDs:

```javascript
emailjs.sendForm(
  'service_xxxxxxx', // Replace with your service ID
  'template_xxxxxxx', // Replace with your template ID
  formRef.current as HTMLFormElement,
  'XXXXXXXXXXXXXXXX' // Replace with your public key
)
```

## Testing Your Form

Once you've updated the code with your IDs, you can test your form:

1. Run your application locally with `npm run dev`
2. Fill out and submit the contact form
3. Check the email address you connected to EmailJS to confirm you received the message

## Limits for Free Tier

The free tier of EmailJS allows for:
- 200 emails per month
- 2 email templates
- 2 email services

This should be more than sufficient for your company website contact form. 