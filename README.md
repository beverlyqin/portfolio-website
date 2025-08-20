# Beverly Qin - Portfolio Website

A minimal and elegant portfolio website built with Next.js, showcasing computer science projects and expertise.

## Features

- **Home Page**: Introduction section with photo placeholder and 6 project cards
- **Computation Page**: Showcases algorithmic and computational work
- **Architecture Page**: Displays system design and software architecture projects
- **About Page**: Personal background, skills, and contact information
- **Responsive Design**: Optimized for all device sizes
- **Minimal Aesthetic**: Clean, elegant design with Proxima Nova typography

## Pages

1. **Home** (`/`) - Landing page with introduction and project overview
2. **Computation** (`/computation`) - Algorithmic and computational projects
3. **Architecture** (`/architecture`) - System design and software architecture
4. **About** (`/about`) - Personal information and contact details

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Inter (Proxima Nova alternative)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Adding Your Photo
- Replace the placeholder image holder on the home page with your actual photo
- Update the image dimensions in the CSS if needed

### Updating Project Information
- Modify the project cards on the home page with your actual projects
- Add images, descriptions, and links to your work

### Personal Information
- Update the introduction text on the home page
- Modify the about page with your actual background and contact information

### Styling
- The website uses Tailwind CSS for styling
- Colors, spacing, and typography can be customized in the component files

## Build and Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
The website is optimized for deployment on Vercel:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── computation/
│   │   └── page.tsx      # Computation page
│   ├── architecture/
│   │   └── page.tsx      # Architecture page
│   ├── about/
│   │   └── page.tsx      # About page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
```

## License

This project is open source and available under the [MIT License](LICENSE).
