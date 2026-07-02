import Image from "next/image";

import { profileConfig } from "@/config/profile";

export function AboutSection() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="grid items-start gap-10 md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[20px] bg-primary-soft shadow-[0_20px_55px_rgba(22,33,62,0.14)]">
          <Image
            src={profileConfig.photo}
            alt={`${profileConfig.name} (${profileConfig.englishName}), giảng viên IELTS`}
            width={1128}
            height={2048}
            priority
            className="aspect-[3/4] w-full object-cover object-[center_34%]"
            sizes="(max-width: 768px) 280px, 340px"
          />
          <span className="absolute right-4 bottom-4 left-4 rounded-full bg-primary/92 px-4 py-2 text-center text-xs font-bold text-white backdrop-blur-sm">
            {profileConfig.badge}
          </span>
        </div>

        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
            {profileConfig.eyebrow}
          </p>
          <h1 className="mt-3 text-5xl leading-[0.95] font-bold text-primary sm:text-6xl">
            {profileConfig.name}
          </h1>
          <p className="mt-3 text-base font-semibold text-accent sm:text-lg">{profileConfig.role}</p>

          <ul className="mt-7 space-y-4">
            {profileConfig.credentials.map((credential) => (
              <li key={credential.emphasis} className="flex gap-3 text-sm leading-7 text-ink sm:text-[15px]">
                <span aria-hidden="true" className="mt-[0.65rem] size-1.5 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="font-bold text-primary">{credential.emphasis}</strong>{" "}
                  {credential.detail}
                </span>
              </li>
            ))}
          </ul>

          <blockquote className="relative mt-8 overflow-hidden rounded-2xl bg-primary px-7 py-8 text-white sm:px-8">
            <span
              aria-hidden="true"
              className="absolute top-0 left-5 font-display text-7xl leading-none text-highlight"
            >
              “
            </span>
            <p className="relative pl-5 font-display text-xl leading-8 italic sm:text-2xl">
              {profileConfig.philosophy}
            </p>
            <footer className="relative mt-4 pl-5 text-xs font-bold text-highlight">
              - Triết lý giảng dạy của Lucy
            </footer>
          </blockquote>
        </div>
      </div>

      <dl className="mt-12 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-4">
        {profileConfig.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-line bg-white p-5 text-center">
            <dd className="font-display text-3xl font-bold text-primary sm:text-4xl">{stat.value}</dd>
            <dt className="mt-1 text-xs leading-5 text-muted">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
