import styles from '../styles/Results.module.css';
import SingleResult from './SingleResult';

// const fakeData = [
//   {titolo: 'libro 1', descrizione: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sapiente!'},
//   {titolo: 'libro 2', descrizione: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sapiente!'},
//   {titolo: 'libro 3', descrizione: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sapiente!'},
//   {titolo: 'libro 4', descrizione: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sapiente!'},
//   {titolo: 'libro 5', descrizione: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sapiente!'},
//   {titolo: 'libro 6', descrizione: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sapiente!'},
//   {titolo: 'libro 7', descrizione: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sapiente!'}
// ]

const Results = (data) =>{
  const myData = data.data.items;
  const renderElement = () =>{
    return myData.map((book, index) =>{
      return <SingleResult key={index} title={book.volumeInfo.title} description={book.volumeInfo.description}/>
    })
    
  }
  return (
    <div className={styles.container}>
      <h1>Results</h1>
      <div className={styles.resultsContainer}>
      {renderElement()};
      </div>
    </div>
  )
}

export default Results;