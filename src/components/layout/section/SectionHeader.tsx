import Link from "next/link";
import { useCategories } from "@/hooks/category/useCategory";

import Categorybar from "../bars/Categoriesbar";

interface SectionHeaderProps {
  title: string;

  subtitle?: string;

  description?: string;

  actionLabel?: string;

  actionHref?: string;

  type?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  description,
  actionLabel,
  actionHref,
  type,
}: SectionHeaderProps) {
  const { categories } = useCategories();
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between w-full ">
      <div>
        {subtitle && (
          <p className="text-sm font-medium uppercase tracking-wide text-text-sdy text-center md:text-left">
            {subtitle}
          </p>
        )}

        <h2 className="section-title text-center">{title}</h2>

        {description && (
          <p className="mt-3 max-w-2xl text-gray-500">{description}</p>
        )}
      </div>

      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="font-sm hover:underline px-3 py-1.5 bg-bg-pry rounded-full text-white cursor-pointer w-max self-end mt-3 md:hidden"
        >
          {actionLabel}
        </Link>
      )}

      {/* {type == "all" && (
        <div className="">
          <Categorybar />
        </div>
      )} */}
    </div>
  );
}
