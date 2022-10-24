export interface IButton {
  children?: React.ReactNode;
  className: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
