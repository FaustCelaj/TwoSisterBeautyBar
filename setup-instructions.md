# Spa Website Setup Instructions

This document outlines the steps to set up your Spa Website built with Payload CMS.

## Initial Setup

1. First, make sure you have MongoDB installed and running on your machine. If not, you can download it from [MongoDB's website](https://www.mongodb.com/try/download/community).

2. Create a `.env` file in the project root with the following content:
   ```
   DATABASE_URI=mongodb://127.0.0.1/spa-website
   PAYLOAD_SECRET=your-secure-random-string
   PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
   ```
   
   Replace `your-secure-random-string` with a strong, random string for security.

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open your browser and navigate to `http://localhost:3000/admin` to access the Payload CMS admin panel.

6. Create your admin user when prompted.

## Project Structure

The Spa Website CMS consists of the following main components:

### Collections

1. **Service Categories** - Categories of spa services (e.g., Massage, Facial, Body Treatment)
2. **Services** - Individual spa services with details like price, duration, description
3. **FAQ Categories** - Categories for frequently asked questions
4. **FAQs** - Individual questions and answers, organized by category
5. **Media** - Images and other media files for your website
6. **Users** - Admin users who can access the CMS

### Globals

1. **Spa Settings** - Global settings for your spa website including contact information, business hours, and social media links

## Adding Content

After setup, you should add content in the following order:

1. Upload some images to the Media collection
2. Create Service Categories
3. Add Services under each category
4. Create FAQ Categories (both general and service-specific)
5. Add FAQs under each category
6. Configure your Spa Settings global

## SEO Implementation

This CMS setup includes SEO features:

- Meta titles and descriptions for services and categories
- Alt text for images
- Custom slugs for better URLs
- Structured data organization

## API Access

Your content can be accessed via:

- REST API: `http://localhost:3000/api/[collection-name]`
- GraphQL: `http://localhost:3000/api/graphql`

Use these endpoints to connect your frontend to the CMS.