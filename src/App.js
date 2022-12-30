import Header from './components/Header'

const App = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  )
}

export default App
