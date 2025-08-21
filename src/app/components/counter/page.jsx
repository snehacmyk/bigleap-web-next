
// import styles from '../counter/counter.module.scss'

// export default function CounterHead() {
//     document.addEventListener("DOMContentLoaded", function () {
//     const counters = document.querySelectorAll('.stat-number');
//     const duration = 1500;

//     counters.forEach(counter => {
//         const target = +counter.getAttribute('data-target');
//         const symbol = counter.getAttribute('data-symbol') || '';
//         let start = 0;
//         const increment = target / (duration / 16);

//         function updateCounter() {
//             start += increment;
//             if (start < target) {
//                 counter.textContent = Math.floor(start) + symbol;
//                 requestAnimationFrame(updateCounter);
//             } else {
//                 counter.textContent = target + symbol;
//             }
//         }
//         updateCounter();
//     });
// });
//     return (
//         <>
//             <section className={styles['stats-section']}>
//                 <div className={styles['stat-block']}>
//                     <span className={styles['stat-number']} data-target="98">0</span><span className={styles['stat-symbol']}>+</span>
//                     <span className={styles['stat-label']}>Projects</span>
//                 </div>
//                 <div className={styles['stat-divider']}></div>
//                 <div className={styles['stat-block']}>
//                     <span className={styles['stat-number']} data-target="65">0</span><span className={styles['stat-symbol']}>+</span>
//                     <span className={styles['stat-label']}>Clients</span>
//                 </div>
//                 <div className={styles['stat-divider']}></div>
//                 <div className={styles['stat-block']}>
//                     <span className={styles['stat-number']} data-target="10">0</span><span className={styles['stat-symbol']}>+</span>
//                     <span className={styles['stat-label']}>Years</span>
//                 </div>
//                 <div className={styles['stat-divider']}></div>
//                 <div className={styles['stat-block']}>
//                     <span className={styles['stat-number']} data-target="15">0</span><span className={styles['stat-symbol']}>+</span>
//                     <span className={styles['stat-label']}>Branches</span>
//                 </div>

                
//             </section>
//         </>
//     )
// }