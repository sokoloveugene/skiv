import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { OptionI, AdditionalI } from "types";
import { getProductById, updateProduct } from "api/productsApi";
import CustomInput from "components/CustomInput";
import CustomFileInput from "components/CustomFileInput";
import CustomSelect from "components/CustomSelect";
import Button from "components/Button";
import CustomCheckbox from "components/CustomCheckbox";
import FilePreview from "components/FilePreview";
import { Divider } from "ui/ui.styled";
import * as yup from "yup";
import { ReactComponent as Close } from "assets/icons/Close.svg";
import { CATEGORIES } from "consts/categoriesWithLabels";
import * as s from "../CreateProductPage/CreateProductPage.styled";

const requiredErrorMessage = "This field is required";
const maxLenthError = "Value is too long";
const priceError = "Price is not valid";

const schema = yup.object().shape({
  productName: yup
    .string()
    .required(requiredErrorMessage)
    .max(30, maxLenthError),
  price: yup
    .string()
    .required(requiredErrorMessage)
    .matches(/^\d+(\.\d{2})?$/, { message: priceError }),
});

type FormValues = {
  productName: string;
  price: number;
  amount: string;
  category: OptionI;
  composition: string;
  measure: string;
  images: File[];
  sizeTitle: string;
  sizeAmount: number;
  tag: "sale" | "new" | "";
};

interface Size {
  _id: string;
  title: string;
  available: number;
  new?: boolean;
}

interface MappedSize {
  _id?: string;
  title: string;
  available: number;
}

interface UpdatedProduct {
  images: File[];
  deletedUrls: string[];
  tag?: "sale" | "new" | "";
  name: string;
  price: number;
  sizes: Array<{ title: string; available: number; _id?: string }>;
  category: string;
  additional: AdditionalI[];
}

const EditProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [sizeOptions, setSizeOptions] = useState<Size[]>([]);
  const [compositionOptions, setCompositionOptions] = useState<string[]>([]);
  const [measureOptions, setMeasureOptions] = useState<string[]>([]);
  const [backImages, setBackImages] = useState<string[]>([]);
  const [deletedBackImages, setDeletedBackImages] = useState<string[]>([]);

  const {
    setValue,
    getValues,
    errors,
    register,
    handleSubmit,
    control,
    reset,
    watch,
  } = useForm<FormValues>({
    defaultValues: { images: [] },
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const { product } = await getProductById(id);
        setValue("tag", product.tag || "");
        setValue("productName", product.name);
        setValue("price", product.price);
        setValue(
          "category",
          CATEGORIES.find((opt) => opt.value === product.category)
        );
        setSizeOptions(product.sizes);

        if (product.additional) {
          product.additional.forEach((info) => {
            if (info.title === "Склад виробу") {
              setCompositionOptions(info.data);
            }
            if (info.title === "Обміри виробу") {
              setMeasureOptions(info.data);
            }
          });
        }

        setBackImages(product.images);
      } catch (error) {
        console.log(error);
      }
    };
    loadProduct();
  }, [id, setValue]);

  // size ======================================================= //

  const addSizeOption = (): void => {
    const _id = uuidv4();
    const { sizeTitle: title, sizeAmount: available } = getValues();
    if (!title || !available) return;
    setSizeOptions((p) => [...p, { title, available, _id, new: true }]);
    setValue("sizeTitle", undefined);
    setValue("sizeAmount", undefined);
  };

  const removeSizeOption = (_id: string) => {
    setSizeOptions((p) => p.filter((option) => option._id !== _id));
  };

  // ============================================================ //

  // composition ================================================ //

  const addCompositionOption = () => {
    const { composition } = getValues();
    if (!composition) return;

    setCompositionOptions((p) => [...p, composition]);
    setValue("composition", undefined);
  };

  const removeCompositionOption = (option: string) => {
    setCompositionOptions((p) => p.filter((opt) => opt !== option));
  };

  // =========================================================== //

  // measurements ============================================== //

  const addMeasureOption = () => {
    const { measure } = getValues();
    if (!measure) return;

    setMeasureOptions((p) => [...p, measure]);
    setValue("measure", undefined);
  };

  const removeMeasureOption = (option: string) => {
    setMeasureOptions((p) => p.filter((opt) => opt !== option));
  };

  // =========================================================== //

  const deleteBackImage = (url: string) => {
    setDeletedBackImages((p) => [...p, url]);
    setBackImages((p) => p.filter((backUrl) => backUrl !== url));
  };

  const handleReset = () => {
    reset();
    setSizeOptions([]);
    setCompositionOptions([]);
    setMeasureOptions([]);
  };

  const onSubmit = handleSubmit((data) => {
    if (!sizeOptions.length) return;

    const sizes = sizeOptions.map((opt) => {
      const size: MappedSize = {
        title: opt.title,
        available: Number(opt.available),
      };

      if (!opt.new) {
        size._id = opt._id;
      }
      return size;
    });

    const updatedProduct: UpdatedProduct = {
      images: data.images,
      deletedUrls: deletedBackImages,
      name: data.productName,
      price: Number(data.price) || 0,
      sizes,
      category: data.category.value,
      additional: [],
    };

    if (compositionOptions.length) {
      updatedProduct.additional.push({
        title: "Склад виробу",
        data: compositionOptions,
      });
    }

    if (measureOptions.length) {
      updatedProduct.additional.push({
        title: "Обміри виробу",
        data: measureOptions,
      });
    }

    if (data.tag) {
      updatedProduct.tag = data.tag;
    }

    const bodyFormData: FormData = new FormData();

    Object.entries(updatedProduct).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((file: File) => bodyFormData.append("images", file));
        return;
      }
      bodyFormData.append(key, JSON.stringify(value));
    });

    updateProduct(bodyFormData, id);
  });

  const newImages = watch("images") || [];

  return (
    <s.GridForm onSubmit={onSubmit}>
      <div style={{ gridArea: "productName" }}>
        <Controller
          name="productName"
          control={control}
          render={({ value, onChange }) => (
            <CustomInput
              value={value}
              onChange={onChange}
              label="Найменування"
              errorMessage={errors.productName?.message}
            />
          )}
        />
      </div>

      <div style={{ gridArea: "price" }}>
        <Controller
          name="price"
          control={control}
          render={({ value, onChange }) => {
            return (
              <CustomInput
                value={Number(value || "")}
                onChange={onChange}
                type="number"
                label="Ціна"
                errorMessage={errors.price?.message}
              />
            );
          }}
        />
      </div>

      <div style={{ gridArea: "upload" }}>
        <Controller
          name="images"
          control={control}
          render={({ value, onChange }) => (
            <CustomFileInput value={value} onChange={onChange} />
          )}
        />
        {!!newImages.length && !!backImages.length && <Divider />}
        {backImages.map((url) => (
          <FilePreview
            key={url}
            id={url}
            url={url}
            onDelete={() => deleteBackImage(url)}
          />
        ))}
      </div>

      <div style={{ gridArea: "category" }}>
        <Controller
          name="category"
          control={control}
          render={({ onChange, value }) => (
            <CustomSelect
              selectedValue={value}
              placeholder="Оберiть категорiю"
              options={CATEGORIES}
              onChange={onChange}
            />
          )}
        />
      </div>

      <div style={{ gridArea: "sizeSelector" }}>
        <s.InlineFlex>
          <Controller
            name="sizeTitle"
            control={control}
            render={({ value, onChange }) => (
              <CustomInput
                value={value}
                onChange={onChange}
                mask="upperCase"
                label="Введіть розмір"
                errorMessage={errors.sizeTitle?.message}
              />
            )}
          />
          <Controller
            name="sizeAmount"
            control={control}
            render={({ value, onChange }) => (
              <CustomInput
                value={value}
                onChange={onChange}
                type="number"
                mask="upperCase"
                label="Кількість"
                errorMessage={errors.sizeAmount?.message}
              />
            )}
          />

          <Button
            customPadding="0px 57px"
            title="Додати"
            onClick={addSizeOption}
          />
        </s.InlineFlex>
        {sizeOptions.map((option) => (
          <s.Option key={option._id}>
            {`${option.title} - ${option.available}шт`}
            <s.CloseButton
              role="button"
              onClick={() => removeSizeOption(option._id)}
            >
              <Close />
            </s.CloseButton>
          </s.Option>
        ))}
      </div>

      <div style={{ gridArea: "composition" }}>
        <Controller
          name="composition"
          control={control}
          render={({ value, onChange }) => (
            <CustomInput
              value={value}
              onChange={onChange}
              mask="upperCase"
              label="Склад та догляд"
              errorMessage={errors.composition?.message}
              icon
              onIconClick={addCompositionOption}
            />
          )}
        />

        {compositionOptions.map((option) => (
          <s.Option key={option}>
            {option}
            <s.CloseButton
              role="button"
              onClick={() => removeCompositionOption(option)}
            >
              <Close />
            </s.CloseButton>
          </s.Option>
        ))}
      </div>

      <div style={{ gridArea: "measure" }}>
        <Controller
          name="measure"
          control={control}
          render={({ value, onChange }) => (
            <CustomInput
              value={value}
              onChange={onChange}
              label="Обміри виробу"
              errorMessage={errors.measure?.message}
              icon
              onIconClick={addMeasureOption}
            />
          )}
        />

        {measureOptions.map((option) => (
          <s.Option key={option}>
            {option}
            <s.CloseButton
              role="button"
              onClick={() => removeMeasureOption(option)}
            >
              <Close />
            </s.CloseButton>
          </s.Option>
        ))}
      </div>

      <div style={{ gridArea: "tags" }}>
        <CustomCheckbox
          type="radio"
          title="No tag"
          name="tag"
          value=""
          ref={register}
          customMargin="0px 0px 10px 0px"
        />
        <CustomCheckbox
          type="radio"
          title="New"
          name="tag"
          value="new"
          ref={register}
          customMargin="0px 0px 10px 0px"
        />
        <CustomCheckbox
          type="radio"
          title="Sale"
          name="tag"
          value="sale"
          ref={register}
        />
      </div>

      <s.Controls style={{ gridArea: "controls" }}>
        <Button title="Видалити" onClick={handleReset} inversion />
        <Button title="Зберегти змiни" onClick={onSubmit} />
      </s.Controls>
    </s.GridForm>
  );
};

export default EditProductPage;
