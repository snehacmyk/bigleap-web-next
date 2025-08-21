import styles from '../enquiry/enquiry.module.scss'; 
import Image from 'next/image';

 export default function EnquirySect() {
    return(
        <>
        <section className={styles['enquiry-section']}>
           <Image src="/enquiry.png" alt="Enquiry Background" width={1920} height={1080} className={styles.image} />
        </section>
        </>
    )
}