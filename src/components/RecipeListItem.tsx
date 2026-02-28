import type { ReactNode } from "react"
import styles from "./RecipeListItem.module.scss"

export default function RecipeListItem({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <li className={styles.root}>
      <span>{label}</span> {children}
    </li>
  )
}
