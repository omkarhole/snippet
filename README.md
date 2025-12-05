# Snippet 📝

A modern, full-stack code snippet management application built with Next.js, allowing developers to create, store, edit, and organize their code snippets efficiently.

## ✨ Features

- **Create Snippets**: Add new code snippets with syntax highlighting.
- **Edit & Update**: Modify existing snippets seamlessly.
- **View Snippets**: Browse and search through your snippet collection
- **Responsive Design**: Modern UI built with Tailwind CSS and shadcn/ui components
- **Database Integration**: Persistent storage using Prisma ORM
- **Type-Safe**: Full TypeScript support throughout the application

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Database**: [Prisma ORM](https://prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```
snippet/
├── src/
│   ├── actions/           # Server actions
│   ├── app/              # Next.js app directory
│   │   ├── snippet/      # Snippet routes
│   │   │   ├── [id]/     # Dynamic snippet pages
│   │   │   │   ├── edit/ # Edit snippet page
│   │   │   │   └── page.tsx
│   │   │   └── new/      # Create new snippet
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   ├── EditSnippetFrom.tsx
│   │   └── ui/          # shadcn/ui components
│   └── lib/             # Utilities and configurations
├── prisma/              # Database schema
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Database (PostgreSQL, MySQL, or SQLite)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/omkarhole/snippet.git
   cd snippet
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update the `.env.local` file with your database connection string:
   ```
   DATABASE_URL="your-database-connection-string"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📖 Usage

### Creating a New Snippet
1. Navigate to `/snippet/new`
2. Fill in the snippet title and code
3. Click "Save" to store your snippet

### Viewing Snippets
- Browse all snippets on the home page
- Click on any snippet to view its details
- Use the search functionality to find specific snippets

### Editing Snippets
1. Navigate to any snippet's detail page
2. Click the "Edit" button
3. Modify the content and save changes

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 📊 Database Schema

The application uses Prisma with a simple schema for managing snippets. Check `prisma/schema.prisma` for the complete database structure.

## 🎨 UI Components

This project leverages [shadcn/ui](https://ui.shadcn.com/) for consistent and accessible UI components:
- Button
- Input
- Label  
- Textarea

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Set up your environment variables
4. Deploy!

### Other Deployment Options

- **Netlify**: Follow the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying)
- **Railway**: Easy database and app hosting
- **DigitalOcean App Platform**: Full-stack deployment

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

**Built with ❤️ by [Omkar Hole](https://github.com/omkarhole)**
