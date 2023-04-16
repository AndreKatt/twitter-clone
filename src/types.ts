import { useHomeStyles } from "./pages/Home/theme";

export type HomeComponentStyleProps = {
  classes: ReturnType<typeof useHomeStyles>;
};

export type UploadedObject = {
  blobUrl: string;
  file: File;
};

export type LoginFormProps = {
  email: string;
  password: string;
};
