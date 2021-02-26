import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProportionWrapper from "../../components/ProportionWrapper";
import { Divider } from "../../ui/ui.styled";
// import Carousel from "../../components/Carousel";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import { WishNotActive } from "../../assets/icons";
import Currency from "../../components/Currency";
import DropDown from "../../components/DropDown";
import SelectSize from "../../components/SelectSize";
import NotificationPortal from "../../components/NotificationPortal/NotificationPortal";
import { getProductById } from "../../api/productsApi";
import { ProductI } from "../../types";
import * as s from "./ProductPage.styled";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductI | null>(null);
  const [mainImageUrl, setMainImageUrl] = useState("");

  const onLoad = (loadedProduct: ProductI) => {
    setProduct(loadedProduct);
    setMainImageUrl(loadedProduct.image[0]);
  };

  useEffect(() => {
    getProductById(id, onLoad);
  }, [id]);

  const handleSelectImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setMainImageUrl(e.currentTarget.dataset.url || "");
  };

  if (!product) return null;

  return (
    <>
      <Breadcrumbs />
      <s.Container>
        <s.LeftContainer>
          <s.PreviewContainer>
            {product.image.map((url) => (
              <s.PreviewListItem>
                <s.SideImage
                  active={mainImageUrl === url}
                  data-url={url}
                  onClick={handleSelectImage}
                  src={url}
                  alt="product"
                />
              </s.PreviewListItem>
            ))}
          </s.PreviewContainer>
          <ProportionWrapper horizontalRation={586} verticatRation={770}>
            <s.MainImage src={mainImageUrl} alt="product" />
          </ProportionWrapper>
        </s.LeftContainer>
        <s.RightContainer>
          <s.ProductTitle>{product.name}</s.ProductTitle>
          <Currency customMargin="0px 0px 46px 0px" value={product.price} />
          <SelectSize options={product.sizes} />
          <Button
            customMargin="0px 0px 32px 0px"
            maxWidth="206px"
            onClick={() => null}
            title="Add to cart"
          />
          <Button
            transparent
            customMargin="0px auto 88px 0px"
            customPadding="0px"
            icon={WishNotActive}
            onClick={() => null}
            title="Додати до бажань"
          />

          {product.additional.map((a, idx, arr) => (
            <>
              <DropDown title={a.title} data={a.data} />
              {idx + 1 !== arr.length && (
                <Divider customMargin="8px 0px 20px 0px" />
              )}
            </>
          ))}
        </s.RightContainer>
      </s.Container>
      <NotificationPortal open />
      <Divider customMargin="67px 0px 42px 0px" />
      {/* <Carousel title="Вам може сподобатись" items={testProducts} /> */}
    </>
  );
};

export default ProductPage;
