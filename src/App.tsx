import './App.css'
import {useState} from "react";

interface TopicButtonProps {
    name: string
    onSelect: () => void
}

function TopicButton({name, onSelect}: TopicButtonProps) {
    return (
        <button type="button" onClick={onSelect}>{name}</button>
    )
}

function App() {
    const [selectedTopic, setSelectedTopic] = useState("React")

    function selectGo(){
        setSelectedTopic("Go")
    }

    return (
        <main>
            <h1>Choose a topic</h1>
            <TopicButton name="React" onSelect={() => setSelectedTopic("React")}/>
            <TopicButton name="Ruby" onSelect={() => setSelectedTopic("Ruby")}/>
            <TopicButton name="Go" onSelect={selectGo}/>
            <p>Selected Topic: {selectedTopic}</p>
        </main>
    )
}

export default App
