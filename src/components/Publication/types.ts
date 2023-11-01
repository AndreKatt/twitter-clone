import type { PublicationType } from "../../types";

export type PublicationProps = {
  type: "tweet" | "reply";
  publicationData: PublicationType;
};
