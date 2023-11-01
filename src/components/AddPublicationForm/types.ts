export type AddPublicationFormProps = {
  type: "tweet" | "reply";
  maxRows?: number;
  minHeight: number;
  divider?: boolean;
  publicationId?: string;
};

export type StyledCircularProgressProps = {
  textLength: boolean;
};

export type BodyContainerProps = {
  minHeight: number;
};
