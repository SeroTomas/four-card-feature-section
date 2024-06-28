import style from './app.module.css';
import Text from './components/Text';

function App() {
  return (
    <main className={style.container}>
      <section className={style.cardsSection}>
        <Text />
      </section>
    </main>
  )
}

export default App
