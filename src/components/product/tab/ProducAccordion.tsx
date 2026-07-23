"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import WhyTab from "./TabBox";
import { Product } from "@/types/product";
import DescriptionTab from "./DescriptionTab";
import SpecificationsTab from "./SpecificationTab";
import AdditionalInformationTab from "./AdditionalInfomation";
import ShippingReturnsTab from "./ShippingReturnTabs";
import TabsBox from "./TabBox";

interface ProductAccordionProps {
  product: Product;
}

export default function ProductAccordion({ product }: ProductAccordionProps) {
  const [open, setOpen] = useState("description");

  const toggle = (value: string) => {
    setOpen((current) => (current === value ? "" : value));
  };

  const Item = ({
    value,
    title,
    children,
  }: {
    value: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-gray-200 px-3 mt-2">
      <button
        type="button"
        onClick={() => toggle(value)}
        className="flex w-full items-center justify-between py-4 text-left font-semibold"
      >
        <span>{title}</span>

        <ChevronDown
          className={`h-5 w-5 transition-transform duration-500 ${
            open === value ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open === value ? "max-h-[2000px] pb-5" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <div className="divide-y rounded-lg bg-white">
      <Item value="description" title="Description">
        <DescriptionTab html={product.description} />
      </Item>

      {product.details?.fit && (
        <Item value="fit" title="Fit For">
          <TabsBox html={product.details.fit} />
        </Item>
      )}
      {product.details?.features && (
        <Item value="features" title="Features">
          <TabsBox html={product.details.features} />
        </Item>
      )}

      {product.details?.perfect_for && (
        <Item value="perfect_for" title="Perfect For">
          <TabsBox html={product.details.perfect_for} />
        </Item>
      )}
      <Item value="shipping" title="Shipping & Returns">
        <ShippingReturnsTab />
      </Item>

      {product.details?.styling_suggestions && (
        <Item value="why" title="Styling Suggestions">
          <TabsBox html={product.details.styling_suggestions} />
        </Item>
      )}
    </div>
  );
}
