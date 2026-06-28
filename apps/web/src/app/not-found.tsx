import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-4">
      <div className="max-w-lg text-center">
        <p className="font-mono text-sm font-semibold text-brand-500">404</p>
        <h1 className="mt-3 text-4xl font-extrabold text-slate-950">This page is not part of the lesson.</h1>
        <p className="mt-4 leading-7 text-slate-600">The link may be outdated, or the page may have moved.</p>
        <Button href="/" className="mt-7">
          <ArrowLeft aria-hidden="true" size={17} /> Back to profile
        </Button>
      </div>
    </main>
  );
}

