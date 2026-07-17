"use client";

import { Product } from "@/types/product";
import DescriptionTab from "./DescriptionTab";
import ProductTabList from "./ProductTabList";
import ProductTabPanel from "./ProductTabPanel";
import { useProductTabs } from "@/hooks/product/useProductTab";
import SpecificationsTab from "./SpecificationTab";
import AdditionalInformationTab from "./AdditionalInfomation";
import ShippingReturnsTab from "./ShippingReturnTabs";

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const { activeTab, setActiveTab } = useProductTabs();

  return (
    <section className="mt-16">
      <ProductTabList activeTab={activeTab} onChange={setActiveTab} />

      <ProductTabPanel active={activeTab === "description"}>
        <DescriptionTab html={product.description} />
      </ProductTabPanel>

      <ProductTabPanel active={activeTab === "specifications"}>
        <SpecificationsTab attributes={product.attributes} />
      </ProductTabPanel>

      <ProductTabPanel active={activeTab === "additional-information"}>
        <AdditionalInformationTab product={product} />
      </ProductTabPanel>

      <ProductTabPanel active={activeTab === "shipping"}>
        <ShippingReturnsTab />
      </ProductTabPanel>
    </section>
  );
}
