# Jacob Wong — Personal Portfolio

A lightweight, static portfolio made with semantic HTML, CSS, and vanilla JavaScript. It can be hosted directly on GitHub Pages or Netlify.

## Update your content

- Replace `assets/image.png` with your preferred photo, keeping the filename or updating the image path in `index.html`.
- Replace `assets/Jacob_Wong_Resume.pdf` with the latest resume, keeping the filename or updating the download link in `index.html`.
- Update the email, LinkedIn, GitHub, experience, and project links in `index.html`.

## Connect the contact form

1. Create a free form at [Formspree](https://formspree.io/).
2. Copy the form endpoint provided by Formspree.
3. Replace `REPLACE_WITH_YOUR_FORM_ID` in `js/main.js` with the form ID.
4. Confirm the recipient email in your Formspree account. The form will then submit without a custom server.

Until the endpoint is configured, the form validates visitors’ entries and shows a helpful message directing them to email you directly.

## Deploy

### GitHub Pages

Upload the repository to GitHub and enable Pages from the repository settings, using the root folder of the default branch as the publishing source.

### Netlify

Drag the project folder into Netlify’s deploy area, or connect the GitHub repository. No build command or publish directory is needed; the project is ready to serve as-is.
