# Riley's CrossFit - Next.js Website Starter

This repository contains a starter website for a CrossFit studio, developed as part of a podcast demonstration showcasing the development process of a basic website with Next.js and deployment on Vercel.

## About the Project

This project serves as a foundation for a fitness/CrossFit studio website, featuring:

- Responsive design
- Modern UI components
- Feature-based architecture
- Clean, maintainable code structure

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod) for validation
- **Theme Switching**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure

The project follows a feature-based architecture:

- `/app` - Next.js app router pages
- `/components` - Shared UI components
- `/features` - Feature modules (home, instructors, layout, etc.)
- `/hooks` - Custom React hooks
- `/lib` - Utility functions
- `/public` - Static assets
- `/styles` - Global CSS styles

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/rileys-crossfit.git
   cd rileys-crossfit
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment on Vercel

This project is optimized for deployment on Vercel:

1. Create a [Vercel account](https://vercel.com/signup) if you don't have one already.
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. From the project directory, run:
   ```bash
   vercel
   ```
4. Follow the prompts to deploy your project.

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments:

1. Push your project to GitHub
2. Import your repository in the Vercel dashboard
3. Configure your project settings
4. Deploy

## Development Guidelines

This project follows specific architecture patterns:

- **Feature Module Pattern**: Each feature has its own directory with components, hooks, and services
- **Repository/Service/Hook Pattern**: Data flow through repositories to services to hooks
- **SOLID Principles**: Focus on maintainable, extensible code
- **Display Component Pattern**: Each feature has a main display component that manages its own state

## License

This project is available as open source under the terms of the MIT License.

## Acknowledgments

- Created as part of a podcast demonstration on web development with Next.js
- Designed for educational purposes to showcase modern web development practices
