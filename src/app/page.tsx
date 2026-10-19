import { Counter } from "@/components/counter";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 sm:py-24">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        從這裡開始。
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-slate-600">
        你的 React 練習專案已經就緒，先從一個小功能開始。
      </p>
      <Counter />
    </main>
  );
}
