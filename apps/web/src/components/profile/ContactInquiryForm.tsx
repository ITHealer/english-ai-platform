"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";

import { contactConfig } from "@/config/contact";

function buildInquiryMessage(formData: FormData) {
  return [
    "Xin chào Lucy, mình muốn được tư vấn lộ trình học.",
    `Họ tên: ${String(formData.get("name") ?? "")}`,
    `Số điện thoại: ${String(formData.get("phone") ?? "")}`,
    `Email: ${String(formData.get("email") ?? "") || "Không cung cấp"}`,
    `Khoá học quan tâm: ${String(formData.get("course") ?? "")}`,
    `Lời nhắn: ${String(formData.get("message") ?? "") || "Không có"}`,
  ].join("\n");
}

async function copyMessage(message: string) {
  try {
    await navigator.clipboard.writeText(message);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = message;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  }
}

export function ContactInquiryForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "email" ? "email" : "zalo";
    const formData = new FormData(event.currentTarget);
    const message = buildInquiryMessage(formData);

    if (channel === "email") {
      const subject = encodeURIComponent("Yêu cầu tư vấn lộ trình học cùng Lucy");
      const body = encodeURIComponent(message);

      setStatus("Đã chuẩn bị email với đầy đủ thông tin. Vui lòng kiểm tra và chọn Gửi trong ứng dụng email.");
      window.location.href = `mailto:${contactConfig.recipientEmail}?subject=${subject}&body=${body}`;
      return;
    }

    const copyRequest = copyMessage(message);

    window.open(contactConfig.zaloUrl, "_blank", "noopener,noreferrer");

    void copyRequest.then((copied) => {
      setStatus(
        copied
          ? "Đã sao chép toàn bộ thông tin và mở Zalo. Trong cuộc trò chuyện, bạn chỉ cần chọn Dán rồi Gửi."
          : "Zalo đã được mở nhưng trình duyệt không cho phép tự sao chép. Vui lòng quay lại và thử lại sau khi cấp quyền clipboard.",
      );
    });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[20px] border border-line bg-white p-6 sm:p-9">
      <h2 className="text-3xl font-bold text-primary">Nhận tư vấn lộ trình</h2>
      <p className="mt-1 text-sm leading-6 text-muted">
        Website không lưu thông tin. Chọn Email để mở thư đã soạn sẵn, hoặc Zalo để sao chép nội dung và mở cuộc trò chuyện.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-primary">
          Họ và tên
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Nguyễn Văn A"
            className="min-h-11 rounded-xl border border-line bg-page px-4 text-sm font-normal text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-primary">
          Số điện thoại / Zalo
          <input
            required
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            placeholder="090 xxx xxxx"
            className="min-h-11 rounded-xl border border-line bg-page px-4 text-sm font-normal text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-primary">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="ban@email.com"
          className="min-h-11 rounded-xl border border-line bg-page px-4 text-sm font-normal text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-primary">
        Bạn quan tâm khoá nào?
        <select
          required
          name="course"
          defaultValue=""
          className="min-h-11 rounded-xl border border-line bg-page px-4 text-sm font-normal text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        >
          <option value="" disabled>Chọn khoá học</option>
          {contactConfig.inquiryOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-primary">
        Lời nhắn <span className="font-normal text-muted">(không bắt buộc)</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Trình độ hiện tại, mục tiêu và thời gian bạn muốn bắt đầu..."
          className="rounded-xl border border-line bg-page px-4 py-3 text-sm font-normal text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </label>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          name="channel"
          value="email"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary bg-white px-5 text-sm font-bold text-primary transition hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Mail aria-hidden="true" size={18} />
          Gửi qua Email
        </button>
        <button
          type="submit"
          name="channel"
          value="zalo"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-white transition hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <MessageCircle aria-hidden="true" size={18} />
          Gửi qua Zalo
        </button>
      </div>

      {status && <p role="status" className="mt-4 rounded-xl bg-surface-alt p-3 text-sm leading-6 text-primary">{status}</p>}
    </form>
  );
}
