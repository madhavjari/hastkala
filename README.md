# Hastkala Handmade Landing Page

A responsive landing page for Hastkala Handmade, a business that makes saree latkans, blouse dori charms, tassels, and festive accessories.

## Features

- Responsive landing page for desktop, tablet, and mobile.
- Sticky header with mobile dropdown navigation.
- Handmade latkan hero visual.
- Collection section with filter buttons.
- Craft/process section.
- Custom order call-to-action.
- Testimonials section.
- WhatsApp enquiry form with a prefilled customer message.
- Contact number and address displayed on the page.
- Favicon files included.

## Project Structure

```text
hastkala/
  index.html
  style.css
  script.js
  assets/
    hastkala-logo.jpg
    instagram-logo.svg
    main-image.png
    latkan-display.svg
    tassel-1.png
    tassel-2.png
    tassel-3.png
    tassel-4.png
    favicon_io/
      android-chrome-192x192.png
      android-chrome-512x512.png
      apple-touch-icon.png
      favicon-16x16.png
      favicon-32x32.png
      favicon.ico
      site.webmanifest
```

## How To Run

This is a static HTML, CSS, and JavaScript website. No backend is required for the current version.

Open `index.html` directly in a browser:

```text
hastkala/index.html
```

You can also serve it with any static server if needed.

## WhatsApp Enquiry Form

The form does not save data in a database and does not send an email.

When a visitor submits the form, JavaScript creates a WhatsApp message using the visitor's:

- Name
- Phone or email
- Requirement

Then it opens WhatsApp using this business number:

```text
+91 81414 22171
```

The WhatsApp number is configured in `script.js`:

```js
const whatsappNumber = "918141422171";
```

## Business Details

Contact number:

```text
+91 81414 22171
```

Address:

```text
157, Vishal Society, Bhatar Char Rasta, Surat
```

## Customization Checklist

Before final delivery, update these if required:

- Business name and tagline in `index.html`.
- WhatsApp number in `script.js`.
- Address in `index.html`.
- Product names and descriptions in the collection section.
- Colors, spacing, and typography in `style.css`.
- Replace or add product photos in `assets/` and update the collection cards in `index.html`.

## Deployment

This site can be deployed on:

- GitHub Pages
- Netlify
- Vercel
- Any shared hosting provider

For GitHub Pages or shared hosting, upload the full `hastkala` folder contents and make sure `index.html` remains at the root of the deployed site.
