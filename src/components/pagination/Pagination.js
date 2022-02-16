import styles from './pagination.module.css'

const Pagination = ({children, length, changePage}) => {
    return <div className={styles.pagination}>
        {children}

        <div className={styles?.pageIndexContent}>
        {
            !!length && Array.from(Array(Math.floor(length / 10)))?.map((item, index) => {
                return <div className={styles.pageIndex}
                            key={index}
                onClick={() => changePage(index)}>{index + 1}</div>
            })
        }
        </div>
    </div>
}

export default Pagination
