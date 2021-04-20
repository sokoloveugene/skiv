import React, { useState } from "react";
import Modal from "components/Modal";
import { ReactComponent as Close } from "assets/icons/Close.svg";
import * as s from "./FilePreview.styled";

interface FilePreviewI {
  id: string;
  url: string;
  filename?: string;
  onDelete: (id: string) => void;
}

const FilePreview: React.FC<FilePreviewI> = ({
  id,
  url,
  filename,
  onDelete,
}) => {
  const handleDelete = () => onDelete(id);
  const [open, setOpen] = useState(false);

  return (
    <>
      <s.ListItem withName={!!filename}>
        <s.Preview src={url} alt="preview" onClick={() => setOpen(true)} />

        {filename && (
          <s.TruncateContainer>
            <s.Truncated>{filename}</s.Truncated>
          </s.TruncateContainer>
        )}

        <s.CloseButton role="button" onClick={handleDelete}>
          <Close />
        </s.CloseButton>
      </s.ListItem>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <s.FullSizeImage src={url} alt="preview" />
        </Modal>
      )}
    </>
  );
};

export default FilePreview;
