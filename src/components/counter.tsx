"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useStore } from "zustand";
import { createCounterStore } from "@/stores/counter-store";

export function Counter() {
  const [store] = useState(createCounterStore);
  const count = useStore(store, (state) => state.count);
  const increment = useStore(store, (state) => state.increment);
  const decrement = useStore(store, (state) => state.decrement);
  const reset = useStore(store, (state) => state.reset);
  const buttonClass =
    "inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700";

  return (
    <section
      aria-labelledby="counter-title"
      className="mt-10 rounded-2xl border border-slate-200 p-6 sm:p-8"
    >
      <h2 id="counter-title" className="text-lg font-semibold">
        第一個互動元件
      </h2>
      <p className="mt-2 text-slate-600">
        試著加減數字，確認狀態與畫面同步更新。
      </p>
      <p
        aria-live="polite"
        aria-atomic="true"
        className="my-8 text-6xl font-semibold tabular-nums"
      >
        <span className="sr-only">目前數值：</span>
        {count}
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={decrement}
          aria-label="減少 1"
          className={buttonClass}
        >
          <Minus aria-hidden="true" size={20} />
        </button>
        <button
          type="button"
          onClick={increment}
          aria-label="增加 1"
          className={buttonClass}
        >
          <Plus aria-hidden="true" size={20} />
        </button>
        <button type="button" onClick={reset} className={buttonClass}>
          <RotateCcw aria-hidden="true" size={18} />
          重設
        </button>
      </div>
    </section>
  );
}
