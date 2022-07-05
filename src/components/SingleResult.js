import styles from '../styles/SingleResult.module.css';

const SingleResults = ({title, description}) =>{
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default SingleResults;