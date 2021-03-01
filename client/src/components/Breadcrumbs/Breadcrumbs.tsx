import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getBreadcrumb } from "consts/categoryToBreadcrumbs";
import * as s from "./Breadcrumbs.styled";

interface BreadcrumbI {
  title: string;
  link: string;
}

interface BreadcrumbsI {
  category?: string;
}

const data: Array<BreadcrumbI> = [
  { title: "Головна", link: "/" },
  { title: "Каталог", link: "/catalog" },
];

const Breadcrumbs: React.FC<BreadcrumbsI> = ({ category }) => {
  const history = useHistory();
  const [breadCrumbs, setBreadCrumbs] = useState<BreadcrumbI[]>(data);

  useEffect(() => {
    if (!category) return;

    const breadCrumb: BreadcrumbI = {
      title: getBreadcrumb(category),
      link: `/catalog?category=${category}`,
    };

    setBreadCrumbs((p) => [...p, breadCrumb]);
  }, [category]);

  const handleRedirect = (link: string) => {
    history.push(link);
  };

  return (
    <s.Container>
      {breadCrumbs.map((i, idx, arr) => (
        <s.Wrapper key={i.title}>
          <s.TextItem onClick={() => handleRedirect(i.link)}>
            {i.title}
          </s.TextItem>
          {idx + 1 !== arr.length && <s.TextItem>/</s.TextItem>}
        </s.Wrapper>
      ))}
    </s.Container>
  );
};

export default Breadcrumbs;
