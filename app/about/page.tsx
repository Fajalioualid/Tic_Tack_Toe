import Link from 'next/link';
import styles from './page.module.css'
function about(){
    return <><div className={styles.ddd}>
        <h1>About</h1>
    </div><Link href="/">go to main</Link></>
}
export default about;