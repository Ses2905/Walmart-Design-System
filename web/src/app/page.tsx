"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Chip } from "@/components/ui/chip";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ui/product-card";
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
  const [selectedChip, setSelectedChip] = useState("rollback");

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
      <header className="flex flex-col gap-2">
        <span className="wm-eyebrow text-eyebrow">Design system</span>
        <h1 className="text-display font-black tracking-tight text-bentonville-blue">
          Walmart UI Kit
        </h1>
        <p className="max-w-[62ch] text-body-lg text-ink-secondary">
          Tailwind v4 + shadcn/ui primitives, wired directly to the design system&apos;s own
          tokens and component API — pill buttons, True Blue actions, Everyday Sans type.
        </p>
      </header>

      <Section title="Buttons" subtitle="variant × size, ported 1:1 from Button.jsx">
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Shop now</Button>
          <Button variant="secondary">Add to list</Button>
          <Button variant="spark">Try Sparky</Button>
          <Button variant="ghost">Learn more</Button>
          <Button variant="primary" iconLeft={<Icon name="add-to-cart" />}>
            Add to cart
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

      <Section title="Badges" subtitle="status pills for fulfillment, stock, and promos">
        <div className="flex flex-wrap gap-2">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success">In stock</Badge>
          <Badge variant="rollback">Rollback</Badge>
          <Badge variant="clearance">Clearance</Badge>
          <Badge variant="brand">Brand</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </Section>

      <Section title="Chips">
        <div className="flex flex-wrap gap-2">
          {["rollback", "in-store", "free-shipping"].map((id) => (
            <Chip
              key={id}
              selected={selectedChip === id}
              onClick={() => setSelectedChip(id)}
              icon={id === "rollback" ? "coupon" : id === "in-store" ? "pick-up" : "shipping"}
            >
              {id.replace("-", " ")}
            </Chip>
          ))}
        </div>
      </Section>

      <Section title="Forms">
        <div className="grid max-w-md gap-6">
          <Input label="Search Walmart.com" iconLeft={<Icon name="search" />} placeholder="Search" />
          <Input label="Email" error="Enter a valid email address" defaultValue="not-an-email" />
          <Checkbox label="Text me order updates" defaultChecked />
          <Switch label="Save this card for later" defaultChecked />
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="all" className="max-w-md">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pharmacy">Pharmacy</TabsTrigger>
            <TabsTrigger value="orders" count={3}>
              Orders
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="pt-4 text-sm text-ink-secondary">
            Everything across your Walmart account.
          </TabsContent>
          <TabsContent value="pharmacy" className="pt-4 text-sm text-ink-secondary">
            Prescriptions and pharmacy orders.
          </TabsContent>
          <TabsContent value="orders" className="pt-4 text-sm text-ink-secondary">
            3 orders in progress.
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Cards & product tiles">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card elevated className="flex flex-col gap-2">
            <h3 className="text-h4">Elevated card</h3>
            <p className="text-sm text-ink-secondary">
              Generic content surface with the DS&apos;s soft, navy-tinted shadow.
            </p>
          </Card>
          <ProductCard
            title="Whole Milk, 1 Gallon"
            brand="Great Value"
            price={3.24}
            was={3.98}
            rating={4.6}
            reviews={2140}
            badge={{ label: "Rollback" }}
          />
        </div>
      </Section>
    </div>
  );
}
