import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

import styles from '../components/UI/Error.module.css';

const parentVariants = {
    hidden: { y: '-100vh', opacity: 0, type: 'spring' },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            staggerChildren: 0.7,
            staggerDirection: -1,
            when: 'beforeChildren',
            delayChildren: 0.5,
        },
    },
};

const childVariants = {
    hidden: { scaleY: 0, transition: { type: 'spring', bounce: 0.8 } },
    visible: { scaleY: 1, transition: { type: 'spring', bounce: 0.8 } },
};

const PrimaryErrorPage = () => {
    return (
        <motion.section
            className={`section_wrapper ${styles.error_container} | ${styles.error_container_styling}`}
            variants={parentVariants}
            initial="hidden"
            animate="visible"
        >
            <div className={styles.error_signs}>
                <div className={styles.dot1}></div>
                <div className={styles.dot2}></div>
                <div className={styles.dot3}></div>
            </div>
            <motion.div variants={childVariants} className={styles.rolling_animation_container}>
                <div className={`${styles.face} ${styles.face_styling}`}>
                    <div className={`${styles.eye} ${styles['eye-1']}`}></div>
                    <div className={`${styles.eye} ${styles['eye-2']}`}></div>
                </div>
                <div className={`${styles.shadow} | ${styles.shadow_styling}`}></div>
            </motion.div>
            <motion.div variants={childVariants} className={styles.error_content_cont}>
                <h3 className={`${styles.error_heading}`}>OOPS!</h3>
                <p className={styles.error_message}>Invalid link</p>
                <Link to='/'>
                    <Button classes={`${styles.try_again_btn} py-1.5 sm:px-8 px-4`}>Home</Button>
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default PrimaryErrorPage;
