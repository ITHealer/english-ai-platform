import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-page px-4">
      <div className="max-w-lg text-center">
        <p className="text-sm font-bold tracking-[0.18em] text-accent uppercase">404</p>
        <h1 className="mt-3 text-5xl font-bold text-primary">Không tìm thấy trang</h1>
        <p className="mt-4 leading-7 text-muted">Đường dẫn có thể đã thay đổi hoặc nội dung chưa được cập nhật.</p>
        <Button href="/" className="mt-7">
          <ArrowLeft aria-hidden="true" size={17} /> Quay lại website
        </Button>
      </div>
    </main>
  );
}
