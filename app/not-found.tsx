import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-background">
      <div className="border-3 border-black dark:border-white p-8 max-w-md w-full text-center">
        <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6 tracking-tighter">404</h1>
        <h2 className="font-mono text-2xl font-bold mb-4 tracking-tight">PAGE NOT FOUND</h2>
        <p className="font-mono mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/"
          className="font-mono inline-block bg-black text-white dark:bg-white dark:text-black hover:bg-brand hover:text-white border-3 border-black dark:border-white rounded-none px-6 py-3"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  )
}
