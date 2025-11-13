"use client";

import Link from "next/link";
import { Card } from "@/components/card";
import {
  braedenProfile,
  maryProfile,
  supportPillars,
  timeline,
  resources
} from "@/content/story";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";

function formatDate(iso: string) {
  return format(new Date(iso), "MMMM d, yyyy");
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-12">
      <header className="flex flex-col gap-6 text-center sm:text-left">
        <motion.span
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-accent"
        >
          Standing With Braeden
        </motion.span>
        <div className="flex flex-col gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Grounding, safety, and next steps after a threatening confrontation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            This space helps you process what happened, organize protective actions, and
            stay anchored in hope for yourself and your children.
          </motion.p>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <Card glow>
          <h2 className="text-xl font-semibold">About Braeden</h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-medium text-foreground">Full name</dt>
              <dd>{braedenProfile.fullName}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Born</dt>
              <dd>{formatDate(braedenProfile.birthDate)}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Children</dt>
              <dd>{braedenProfile.childrenCount}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Focus</dt>
              <dd>{braedenProfile.focus}</dd>
            </div>
          </dl>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">About Mary</h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-medium text-foreground">Full name</dt>
              <dd>{maryProfile.fullName}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Born</dt>
              <dd>{formatDate(maryProfile.birthDate)}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Relationship</dt>
              <dd>{maryProfile.status}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Recent statement</dt>
              <dd className="italic text-foreground">&ldquo;{maryProfile.lastStatement}&rdquo;</dd>
            </div>
          </dl>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Support Pillars</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {supportPillars.map((pillar) => (
            <Card key={pillar.title} className="flex h-full flex-col gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
              </div>
              <ul className="mt-auto space-y-2 text-sm">
                {pillar.actions.map((action) => (
                  <li key={action} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Stabilization Timeline</h2>
        <div className="relative ml-6 border-l-2 border-accent/40 pl-6">
          {timeline.map((item, idx) => (
            <div key={item.label} className="relative mb-8">
              <span className="absolute -left-[38px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground">
                {idx + 1}
              </span>
              <h3 className="text-lg font-semibold">{item.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,3fr]">
        <Card className="flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Create A Safe Space</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Visualize the future you deserve—steady, hopeful, and anchored in love. Use
              the affirmation below when anxiety surges.
            </p>
          </div>
          <blockquote className="rounded-xl border border-accent/40 bg-accent/20 p-5 text-base font-medium text-foreground shadow-inner">
            I am present, grounded, and worthy of protection. My children and I are safe,
            supported, and surrounded by people who care.
          </blockquote>
          <p className="text-xs text-muted-foreground">
            Repeat the affirmation while taking three intentional breaths, morning and
            night.
          </p>
        </Card>
        <Card className="relative overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
            alt="A supportive friend offering comfort"
            width={1200}
            height={800}
            className="rounded-2xl object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-background/70 via-background/20 to-transparent" />
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Trusted Resources</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {resources.map((resource) => (
            <Card key={resource.label} className="h-full">
              <h3 className="text-lg font-semibold text-foreground">{resource.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{resource.detail}</p>
              <Link
                href={resource.url}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent underline-offset-4 hover:underline"
              >
                Visit resource
                <span aria-hidden>→</span>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <footer className="pb-8 text-center text-xs text-muted-foreground">
        Created to remind you: you are not alone. Reach out any time you feel unsafe.
      </footer>
    </main>
  );
}
