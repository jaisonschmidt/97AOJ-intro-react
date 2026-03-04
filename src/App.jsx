import Counter from "./components/Counter";

function App( { tool = "React" } ) {
    return (
        <>
            <h1>Bem-vindo ao {tool}!</h1>
            <Counter />
        </>
    )
}

export default App;