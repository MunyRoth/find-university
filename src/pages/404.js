import Navbar from "@/components/navbar"
import Footer from "@/components/footer";
import styles from '@/styles/404.module.css';

export default function NotFoundPage () {
    return (
        <>
            <Navbar/>
            <div className={styles.container}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, there is nothing to see here</p>
            </div>
            <Footer/>
        </>
    )
}
