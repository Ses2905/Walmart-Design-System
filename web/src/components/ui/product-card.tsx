"use client";

import * as React from "react";
import { HeartIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { Price } from "@/components/ui/price";
import { Rating } from "@/components/ui/rating";
import { cn } from "@/lib/utils";

/**
 * Walmart product tile — the core merchandising unit. Square image
 * well, price-first hierarchy, fulfillment line, pill "Add"
 * affordance. Ported from components/commerce/ProductCard.jsx.
 */
function ProductCard({
  image,
  title,
  brand,
  price,
  was,
  rating,
  reviews,
  badge,
  fulfillment = "Free shipping, arrives in 2 days",
  sponsored = false,
  onAdd,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  image?: string;
  title: string;
  brand?: string;
  price: number;
  was?: number;
  rating?: number;
  reviews?: number;
  badge?: { label: string; variant?: "neutral" | "info" | "success" | "rollback" | "clearance" | "brand" | "outline" };
  fulfillment?: string;
  sponsored?: boolean;
  onAdd?: () => void;
}) {
  const [fav, setFav] = React.useState(false);

  return (
    <div
      data-slot="product-card"
      className={cn(
        "group relative flex flex-col gap-2 rounded-lg border border-border-subtle bg-surface p-3 font-sans transition-[box-shadow,border-color] duration-base ease-standard hover:border-border hover:shadow-md",
        className
      )}
      {...props}
    >
      <div className="relative aspect-square overflow-hidden rounded-md bg-white">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="size-full object-contain" />
        ) : (
          <div className="grid size-full place-items-center bg-gray-50 text-gray-300">
            <Icon name="photo" size={40} />
          </div>
        )}
        <button
          onClick={() => setFav(!fav)}
          aria-label="Save to list"
          className={cn(
            "absolute right-2 top-2 grid size-9 place-items-center rounded-pill bg-white/92 shadow-sm",
            fav ? "text-true-blue" : "text-gray-600"
          )}
        >
          <HeartIcon className="size-[18px]" fill={fav ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="flex flex-col gap-2 pt-1">
        {sponsored && <span className="text-[11px] text-ink-tertiary">Sponsored</span>}
        <Price value={price} was={was} size="md" />
        {badge && (
          <div>
            <Badge variant={badge.variant || "rollback"} size="sm">
              {badge.label}
            </Badge>
          </div>
        )}
        <div className="line-clamp-2 min-h-[38px] text-sm leading-[1.35] text-ink">
          {brand && <span className="font-bold">{brand} </span>}
          {title}
        </div>
        {rating != null && <Rating value={rating} count={reviews} size={15} />}
        <div className="text-[13px] text-ink-secondary">{fulfillment}</div>
        <button
          onClick={onAdd}
          className="mt-1 inline-flex h-10 w-fit items-center justify-center gap-1.5 rounded-pill border-[1.5px] border-gray-900 bg-white px-[22px] font-sans text-[15px] font-bold text-bentonville-blue transition-colors duration-fast hover:bg-gray-50"
        >
          <Icon name="add-to-cart" size={18} /> Add
        </button>
      </div>
    </div>
  );
}

export { ProductCard };
