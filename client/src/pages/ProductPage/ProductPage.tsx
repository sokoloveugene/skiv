import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useWish } from "hooks/useWish";
import { useStoreContext } from "store/storeContext";
import { ProductWithSimilarI, SizeOptionI } from "types";
import { getProductById } from "api/productsApi";
import { Divider } from "ui/ui.styled";
import { WishNotActive, WishActive } from "assets/icons";
import ProportionWrapper from "components/ProportionWrapper";
import Carousel from "components/Carousel";
import Breadcrumbs from "components/Breadcrumbs";
import Button from "components/Button";
import Currency from "components/Currency";
import DropDown from "components/DropDown";
import SelectSize from "components/SelectSize";
import NotificationPortal from "components/NotificationPortal";
import * as s from "./ProductPage.styled";

const ProductPage: React.FC = observer(() => {
  const { cartStore, productStore } = useStoreContext();
  const { id } = useParams<{ id: string }>();
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [size, setSize] = useState<SizeOptionI | null>(null);
  const [isWished, wishHandler] = useWish(id);

  const onLoad = useCallback(
    (res: ProductWithSimilarI) => {
      productStore.setCurrentProduct(res.product);
      productStore.setSimilarProducts(res.similarProducts);
      setMainImageUrl(res.product.images[0]);
    },
    [productStore]
  );

  useEffect(() => {
    getProductById(id, onLoad);

    return () => {
      productStore.setCurrentProduct(null);
    };
  }, [id, onLoad, productStore]);

  const handleSelectImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setMainImageUrl(e.currentTarget.dataset.url || "");
  };

  const handleAddToCart = () => {
    cartStore.addToCart(size);
    setSize(null);
  };

  if (!productStore.productInView) return null;

  return (
    <>
      <Breadcrumbs category={productStore.productInView.category} />
      <s.Container>
        <s.LeftContainer>
          <s.PreviewContainer>
            {productStore.productInView.images.map((url) => (
              <s.PreviewListItem key={url}>
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
          <s.ProductTitle>{productStore.productInView.name}</s.ProductTitle>
          <Currency
            customMargin="0px 0px 46px 0px"
            value={productStore.productInView.price}
          />
          <SelectSize
            selectedOption={size}
            setSelectedOption={setSize}
            options={cartStore.sizeOptions}
          />
          <Button
            customMargin="0px 0px 32px 0px"
            maxWidth="206px"
            onClick={handleAddToCart}
            title="Add to cart"
          />
          <Button
            transparent
            customMargin="0px auto 88px 0px"
            customPadding="0px"
            icon={isWished ? WishActive : WishNotActive}
            onClick={wishHandler}
            title={isWished ? "Видалити з бажань" : "Додати до бажань"}
          />

          {productStore.productInView.additional.map((a, idx, arr) => (
            <s.KeyWrapper key={a.title}>
              <DropDown title={a.title} data={a.data} />
              {idx + 1 !== arr.length && (
                <Divider customMargin="8px 0px 20px 0px" />
              )}
            </s.KeyWrapper>
          ))}
        </s.RightContainer>
      </s.Container>
      <NotificationPortal />
      <Divider customMargin="67px 0px 42px 0px" />
      {productStore.similarProducts.length > 0 && (
        <Carousel
          title="Вам може сподобатись"
          items={productStore.similarProducts}
        />
      )}
    </>
  );
});

export default ProductPage;
