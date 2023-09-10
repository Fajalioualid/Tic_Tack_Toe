import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'
import Discription from './components/Description'
import Section from './components/Section'
import Link from 'next/link'








 function Home() {
  
  
  return (
    < main >
  
 <Header text='Header' subtext="hello"/>
 <div className={styles.Section}><Discription /> 
 
   <Section  />
   <Link href="/about">go to main</Link> 
   
   </div>
   
   
    </main>
  )
}
export default Home;