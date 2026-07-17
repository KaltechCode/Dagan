import { Category, CategoryTree } from "@/types/product";

export function buildCategoryTree(categories: Category[]): CategoryTree[] {
  const map = new Map<number, CategoryTree>();

  const roots: CategoryTree[] = [];

  categories.forEach((category) => {
    map.set(category.id, {
      ...category,
      children: [],
    });
  });

  map.forEach((category) => {
    if (category.parent === 0) {
      roots.push(category);
      return;
    }

    const parent = map.get(category.parent);

    if (parent) {
      parent.children.push(category);
    }
  });

  return roots;
}
