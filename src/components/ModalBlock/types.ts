export type ModalBlockProps = {
  title?: string;
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
};
