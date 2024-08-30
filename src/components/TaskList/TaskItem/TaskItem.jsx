import styles from './TaskItem.module.css'

export function TaskItem(props) {

    const {texto} =  props

    return (
        <li className={styles.TaskItem}>
            {texto}
            <span>x</span>
        </li>
    );
}