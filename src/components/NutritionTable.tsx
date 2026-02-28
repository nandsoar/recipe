import { recipe } from "@/data/recipe"
import styles from "./NutritionTable.module.scss"

export default function NutritionTable() {
  return (
    <table className={styles.root}>
      <tbody>
        {recipe.nutrition.map(item => (
          <tr key={item.name}>
            <td className={styles.label}>{item.name}</td>
            <td className={styles.value}>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
