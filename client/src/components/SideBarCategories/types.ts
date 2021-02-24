interface CategoryI {
  category: string;
  childs: SubCategoryI[] | null;
}

interface SubCategoryI {
  title: string;
  link: string;
}

export type { CategoryI, SubCategoryI };
