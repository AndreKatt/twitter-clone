export type UploadedObject = {
  blobUrl: string;
  file: File;
};

export type LoginFormProps = {
  email: string;
  password: string;
};

export type HeaderSectionTitleType = {
  item: { title: string; active?: boolean };
};
