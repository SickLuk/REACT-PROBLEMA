import {useEffect, useState} from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import axios from 'axios';
import styles from './styles/SearchBar.module.css';

function App() {  
  const [data, setData] = useState();
  const [inputText, setInputText] = useState('');
  const fetchData = async () =>{
    const myData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputText}`);
    // Entro direttamente dentro data
    setData(myData);
  }

  // Mostra i risultati
  // const showResults = () => {
  //   console.log(data);
  //   if (data.totalItems === 0){
  //     return <p>Ricerca senza risultati</p>
  //   } else if(data.length === 0){
  //     return <p>In attesa di cercare..</p>
  //   } else {
  //     return <Results data={data} /> 
  //   }
  // }


  const handleInput = (e) =>{
  setInputText(e.target.value);
  }

  console.log('data', data.length);
  return (
    <div>
      <Header />
      <div className={styles.container}>
      <h2>Cerca un libro</h2>
      <div style={{ display: 'flex'}}>
      <input value={inputText} onChange={handleInput} type="text" />
      <button onClick={fetchData}>Cerca</button>
      </div>
    </div>

    {/* {data.length === 0 ? null : <Results data={data} />} */}
  </div>
  );

}

export default App;
