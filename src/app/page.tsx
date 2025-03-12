import { ThemeButtons } from "./components/theme-buttons";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
        <ThemeButtons />
        <div className="h-48 w-full sm:w-24 bg-blue-500 text-white p-4 rounded-lg flex items-center justify-center">
          <h1>Blue Card</h1>
        </div>
        <div className="h-48 w-full sm:w-24 bg-emerald-500 text-white p-4 rounded-lg flex items-center justify-center">
          <h1>Emerald Card</h1>
        </div>
        <div className="h-48 w-full sm:w-24 bg-red-500 text-white p-4 rounded-lg flex items-center justify-center">
          <h1>Red Card</h1>
        </div>
        <div className="h-48 w-full sm:w-24 bg-violet-500 dark:bg-amber-300 text-white p-4 rounded-lg flex items-center justify-center">
          <h1>Violet Card</h1>
        </div>
        <div className="h-48 w-full sm:w-24 bg-card text-white p-4 rounded-lg flex items-center justify-center">
          <h1>Custom Card</h1>
        </div>
      </div>
    </div>
  )
}

