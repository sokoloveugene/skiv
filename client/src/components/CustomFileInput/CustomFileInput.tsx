import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FilePreview from "components/FilePreview";
import { Upload } from "assets/icons";
import * as s from "./CustomFileInput.styled";

interface CustomFileInputI {
  value: any;
  onChange: (files: File[]) => void;
}

interface FileWithId {
  id: string;
  file: File;
}

const CustomFileInput: React.FC<CustomFileInputI> = ({ value, onChange }) => {
  const [files, setFiles] = useState<FileWithId[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = Array.from(e.target.files).map((file) => ({
      id: uuidv4(),
      file,
    }));
    setFiles((p) => [...p, ...newFiles]);
  };

  useEffect(() => {
    // clearPreview
    if (!value) setFiles([]);
  }, [value]);

  useEffect(() => {
    if (!files.length) return;
    onChange(files.map((item) => item.file));
  }, [files, onChange]);

  const handleDelete = (id: string) =>
    setFiles((p) => p.filter((f) => f.id !== id));

  return (
    <>
      <s.StyledInputButton>
        <s.Icon src={Upload} alt="icon" />
        Завантажити фото
        <s.HiddenInput
          accept="image/*"
          multiple
          onChange={handleChange}
          type="file"
        />
      </s.StyledInputButton>
      <s.List>
        {files.map(({ id, file }) => {
          const url = URL.createObjectURL(file);

          return (
            <FilePreview
              key={id}
              filename={file.name}
              id={id}
              url={url}
              onDelete={handleDelete}
            />
          );
        })}
      </s.List>
    </>
  );
};

export default CustomFileInput;
