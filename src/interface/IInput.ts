export interface IInput {
  type: string;
  onChange: (e: any) => void;
  placeholder?: string;  
  value?: string;
  inputRef?: any;
}
