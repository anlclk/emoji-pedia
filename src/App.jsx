import './App.css'
import emojipedia from './assets/components/data/data';
import Card from './assets/components/Card/Card';

function createCard(emojiTerm) {
  return <Card 
  key={emojiTerm.id}
  name={emojiTerm.name}
  emoji={emojiTerm.emoji}
  meaning={emojiTerm.meaning}
  />
}

function App() {

  return (
    <>
     <div>
      <h1>Emoji Pedia</h1>
      <div className='cards'>
        {emojipedia.map(createCard)}
      </div>
      </div>
    </>
  )
}

export default App;
