import RecipeListItem from "@/components/RecipeListItem"
import styles from "./Card.module.scss"
import { recipe } from "@/data/recipe"
import BigSection from "@/components/BigSection"
import NutritionTable from "@/components/NutritionTable"

export default function Card() {
  return (
    <div className={styles.root}>
      <div className={styles.recipe_data}>
        <div className={styles.intro}>
          <h1> Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to
            perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
        </div>

        <div className={styles.topic}>
          <h1>Preparation Time</h1>
          <ul>
            {recipe.prepTime.map(item => (
              <RecipeListItem key={item.label} label={`${item.label}: `}>
                {item.text}
              </RecipeListItem>
            ))}
          </ul>
        </div>

        <BigSection className={styles.ingredients} heading="Ingredients">
          <ul>
            {recipe.ingredients.map(item => (
              <RecipeListItem key={item}>{item}</RecipeListItem>
            ))}
          </ul>
        </BigSection>

        <BigSection className={styles.instructions} heading="Instructions">
          <ol>
            {recipe.instructions.map(item => (
              <RecipeListItem key={item.label} label={`${item.label}: `}>
                {item.text}
              </RecipeListItem>
            ))}
          </ol>
        </BigSection>
        
        <BigSection className={styles.nutrition} heading="Nutrition">
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <NutritionTable />
        </BigSection>
      </div>
    </div>
  )
}
