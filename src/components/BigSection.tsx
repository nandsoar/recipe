import type { ReactNode } from "react"
import styles from "./BigSection.module.scss"
import clsx from "clsx"

export default function BigSection({
  heading,
  children,
  className,
}: {
  heading: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={clsx(styles.root, className)}>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}
