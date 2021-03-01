import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import ProportionWrapper from "../../components/ProportionWrapper";
import { Divider } from "../../ui/ui.styled";
import Carousel from "../../components/Carousel";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import { WishNotActive } from "../../assets/icons";
import Currency from "../../components/Currency";
import DropDown from "../../components/DropDown";
import SelectSize from "../../components/SelectSize";
import NotificationPortal from "../../components/NotificationPortal";
import { getProductById } from "../../api/productsApi";
import { ProductWithSimilarI, SizeOptionI } from "../../types";
import * as s from "./ProductPage.styled";
import { useStoreContext } from "../../store/storeContext";

const ProductPage: React.FC = observer(() => {
  const { cartStore } = useStoreContext();
  const { id } = useParams<{ id: string }>();
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [size, setSize] = useState<SizeOptionI | null>(null);

  const onLoad = useCallback(
    (res: ProductWithSimilarI) => {
      cartStore.setCurrentProduct(res.product);
      cartStore.setSimilarProducts(res.similarProducts);
      setMainImageUrl(res.product.image[0]);
    },
    [cartStore]
  );

  useEffect(() => {
    getProductById(id, onLoad);

    return () => {
      cartStore.setCurrentProduct(null);
    };
  }, [id, onLoad, cartStore]);

  const handleSelectImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setMainImageUrl(e.currentTarget.dataset.url || "");
  };

  const handleAddToCart = () => {
    cartStore.addToCart(size);
    setSize(null);
  };

  if (!cartStore.productInView) return null;

  return (
    <>
      <Breadcrumbs />
      <s.Container>
        <s.LeftContainer>
          <s.PreviewContainer>
            {cartStore.productInView.image.map((url) => (
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
          <s.ProductTitle>{cartStore.productInView.name}</s.ProductTitle>
          <Currency
            customMargin="0px 0px 46px 0px"
            value={cartStore.productInView.price}
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
            icon={WishNotActive}
            onClick={() => null}
            title="Додати до бажань"
          />

          {cartStore.productInView.additional.map((a, idx, arr) => (
            <s.KeyWrapper key={a.title}>
              <DropDown title={a.title} data={a.data} />
              {idx + 1 !== arr.length && (
                <Divider customMargin="8px 0px 20px 0px" />
              )}
            </s.KeyWrapper>
          ))}
        </s.RightContainer>
      </s.Container>
      <NotificationPortal open />
      <Divider customMargin="67px 0px 42px 0px" />
      {cartStore.similarProducts.length > 0 && (
        <Carousel
          title="Вам може сподобатись"
          items={cartStore.similarProducts}
        />
      )}
    </>
  );
});

export default ProductPage;
