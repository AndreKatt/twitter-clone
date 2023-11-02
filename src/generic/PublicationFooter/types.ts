import type { PublicationType } from "../../types";

export type PublicationFooterProps = {
  publicationData: PublicationType;
  kind: "publication" | "fullPublication";
};
