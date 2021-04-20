interface CategoryI {
  category: string;
  childs: SubCategoryI[] | null;
  value?: string;
}

interface SubCategoryI {
  label: string;
  value: string;
}

export type { CategoryI, SubCategoryI };
