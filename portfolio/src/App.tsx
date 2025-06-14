import  Listgroup from "./components/listgroup"; 


function App() {
    let items = ["MELAKA", "SELANGOR", "KEDAH", "JOHOR"];

  return <div><Listgroup items={items} heading="items"/></div>;
}

export default App;