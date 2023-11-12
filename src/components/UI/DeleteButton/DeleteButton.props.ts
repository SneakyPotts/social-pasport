import type {HTMLProps} from "react";

export interface DeleteButtonProps extends HTMLProps<HTMLButtonElement>{
  studentId: number
  type: "button" | "submit" | "reset"
}
