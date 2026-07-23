"use client";
interface ProductTabsProps {
  product: Product;
}

import { Product } from "@/types/product";
import AdditionalInformationTab from "./AdditionalInfomation";
import DescriptionTab from "./DescriptionTab";
import ProductTabList from "./ProductTabList";
import ProductTabPanel from "./ProductTabPanel";
import ShippingReturnsTab from "./ShippingReturnTabs";
import SpecificationsTab from "./SpecificationTab";
import WhyTab from "./TabBox";
import { useProductTabs } from "@/hooks/product/useProductTab";
import ProductAccordion from "./ProducAccordion";
import TabsBox from "./TabBox";

export default function ProductTabs({ product }: ProductTabsProps) {
  const { activeTab, setActiveTab } = useProductTabs();

  return (
    <section className="md:col-span-2">
      {/* Mobile & Tablet */}
      <div className="md:hidden border border-gray-200 py-5 px-5 rounded-md xmd:p-7">
        <ProductAccordion product={product} />
      </div>

      {/* Desktop */}
      <div className="hidden md:block border border-gray-200 py-5rounded-md py-5">
        <ProductTabList
          activeTab={activeTab}
          onChange={setActiveTab}
          product={product}
        />

        <div className="px-5 w-[80%]">
          <ProductTabPanel active={activeTab === "description"}>
            <DescriptionTab html={product.description} />
          </ProductTabPanel>

          {product.details?.features && (
            <ProductTabPanel active={activeTab === "features"}>
              <TabsBox html={product.details.features} title="Features" />
            </ProductTabPanel>
          )}

          {product.details?.perfect_for && (
            <ProductTabPanel active={activeTab === "perfect_for"}>
              <TabsBox html={product.details.perfect_for} title="Perfect For" />
            </ProductTabPanel>
          )}
          {product.details?.styling_suggestions && (
            <ProductTabPanel active={activeTab === "styling_suggestions"}>
              <TabsBox
                html={product.details.styling_suggestions}
                title="Styling Suggestions"
              />
            </ProductTabPanel>
          )}
          {product.details?.care_instructions && (
            <ProductTabPanel active={activeTab === "care_instructions"}>
              <TabsBox
                html={product.details.care_instructions}
                title="Care Instruction"
              />
            </ProductTabPanel>
          )}
          {product.details?.fit && (
            <ProductTabPanel active={activeTab === "fit"}>
              <TabsBox html={product.details.fit} title="FIt" />
            </ProductTabPanel>
          )}

          <ProductTabPanel active={activeTab === "shipping"}>
            <ShippingReturnsTab />
          </ProductTabPanel>
        </div>
      </div>
    </section>
  );
}
