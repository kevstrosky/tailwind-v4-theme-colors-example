import { ThemeButtons } from "./components/theme-buttons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-3xl font-semibold text-center">
        Tailwind CSS v4.0 Theme Colors Example
      </h1>
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-4">
        <div className="h-64 w-full sm:w-52 bg-blue-500 text-white p-4 rounded-lg flex flex-col gap-4">
          <h1 className="text-xl font-bold">Card using static color</h1>
          <span>bg-blue-500</span>
        </div>
        <div className="h-64 w-full sm:w-52 bg-amber-500 dark:bg-violet-500 text-white p-4 rounded-lg flex flex-col gap-4">
          <h1 className="text-xl font-bold">Card using dark class</h1>
          <div className="flex flex-col gap-2">
            <span>bg-amber-500</span>
            <span>dark:bg-violet-500</span>
          </div>
        </div>
        <div className="h-64 w-full sm:w-52 bg-card text-white dark:text-black p-4 rounded-lg flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            Card using CSS Variables (Custom Properties)
          </h1>
          <span>bg-card</span>
        </div>
        <ThemeButtons />
      </div>
    </div>
  );
}
