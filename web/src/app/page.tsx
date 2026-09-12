"use client";

import Image from "next/image";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Chip } from "@/components/ui/chip";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2 className="text-h3">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-ink-secondary">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const [selectedChip, setSelectedChip] = useState("sponsored-search");

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
      <header className="flex flex-col gap-2">
        <span className="wm-eyebrow text-eyebrow">Walmart Ads</span>
        <h1 className="text-display font-black tracking-tight text-bentonville-blue">
          Ads Platform UI Kit
        </h1>
        <p className="max-w-[62ch] text-body-lg text-ink-secondary">
          Tailwind v4 + shadcn/ui primitives, wired directly to the design system&rsquo;s own
          tokens and component API — built for Walmart Ads&rsquo; campaign tools: pill buttons,
          True Blue actions, Everyday Sans type.
        </p>
      </header>

      <Section title="Buttons" subtitle="variant × size, ported 1:1 from Button.jsx">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Launch campaign</Button>
          <Button variant="secondary">Save as draft</Button>
          <Button variant="spark">Ask Sparky</Button>
          <Button variant="ghost">Learn more</Button>
          <Button variant="primary" iconLeft={<Icon name="plus" />}>
            Create ad group
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="rounded-lg bg-bentonville-blue p-6">
          <Button variant="ondark">On dark surface</Button>
        </div>
      </Section>

      <Section title="Badges" subtitle="status pills for campaign state, delivery, and budget">
        <div className="flex flex-wrap gap-2">
          <Badge variant="neutral">Draft</Badge>
          <Badge variant="info">Under review</Badge>
          <Badge variant="success">Active</Badge>
          <Badge variant="rollback">Optimized</Badge>
          <Badge variant="clearance">Rejected</Badge>
          <Badge variant="brand">Sponsored</Badge>
          <Badge variant="outline">Ended</Badge>
        </div>
      </Section>

      <Section title="Chips" subtitle="ad-format filters">
        <div className="flex flex-wrap gap-2">
          {(
            [
              { id: "sponsored-search", icon: "search" },
              { id: "sponsored-products", icon: "bag" },
              { id: "display", icon: "photo" },
            ] as const
          ).map(({ id, icon }) => (
            <Chip
              key={id}
              selected={selectedChip === id}
              onClick={() => setSelectedChip(id)}
              icon={icon}
            >
              {id.replace("-", " ")}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Forms">
        <div className="grid max-w-md gap-6">
          <Input
            label="Search campaigns"
            iconLeft={<Icon name="search" />}
            placeholder="Search campaigns, ad groups, or ads"
          />
          <Input label="Budget alert email" error="Enter a valid email address" defaultValue="not-an-email" />
          <Checkbox label="Text me budget alerts" defaultChecked />
          <Switch label="Enable automatic bidding" defaultChecked />
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="all" className="max-w-md">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="attention" count={3}>
              Needs attention
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-4 text-sm text-ink-secondary">
            Every campaign across your Walmart Ads account.
          </TabsContent>
          <TabsContent value="active" className="pt-4 text-sm text-ink-secondary">
            Live campaigns currently serving impressions.
          </TabsContent>
          <TabsContent value="attention" className="pt-4 text-sm text-ink-secondary">
            3 campaigns need your review.
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Cards">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card elevated className="flex flex-col gap-2">
            <h3 className="text-h4">Elevated card</h3>
            <p className="text-sm text-ink-secondary">
              Generic content surface with the DS&rsquo;s soft, navy-tinted shadow.
            </p>
          </Card>
          <div className="relative rounded-lg">
            <BorderBeam />
            <Card elevated className="flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-h4">Back to School</h3>
                  <p className="text-sm text-ink-secondary">Campaign · Sponsored Search</p>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div>
                  <div className="text-xs text-ink-tertiary">Impressions</div>
                  <div className="wm-numeric text-h5 font-bold text-ink">128,400</div>
                </div>
                <div>
                  <div className="text-xs text-ink-tertiary">Clicks</div>
                  <div className="wm-numeric text-h5 font-bold text-ink">3,216</div>
                </div>
                <div>
                  <div className="text-xs text-ink-tertiary">CTR</div>
                  <div className="wm-numeric text-h5 font-bold text-ink">2.5%</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="Illustrations & imagery"
        subtitle="Brand imagery from the design system&rsquo;s asset library — platform visuals and Sparky"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <Card padding={24} className="flex flex-col items-center gap-3">
            <Image
              src="/illustrations/mascot/hi-im-sparky.png"
              alt="Sparky, the Walmart mascot"
              width={120}
              height={120}
            />
            <span className="text-sm text-ink-secondary">Sparky</span>
          </Card>
          <Card padding={0} className="col-span-2 overflow-hidden">
            <Image
              src="/illustrations/marketing/seller-tools.png"
              alt="Illustration of Walmart seller and advertiser performance tools"
              width={1000}
              height={563}
              className="h-full w-full object-cover"
            />
          </Card>
        </div>
      </Section>
    </div>
  );
}
