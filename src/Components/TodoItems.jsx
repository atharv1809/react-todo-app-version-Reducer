import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
function TodoItems({todoitems,handleDeleteButton})
{
    return <div className={styles.itemContainer}>
            {
                todoitems.map((item)=>(<TodoItem todoName={item.name} todoDate={item.date} handleDeleteButton={handleDeleteButton}></TodoItem>))
            }
      </div>
}
export default TodoItems;