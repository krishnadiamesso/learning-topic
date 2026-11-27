import './App.css'
import {useState} from "react";

interface TopicButtonProps {
    name: string
    onSelect: (topic: string) => void
}

function TopicButton({name, onSelect}: TopicButtonProps) {
    return (
        <button type="button" onClick={() => onSelect(name)}>{name}</button>
    )
}

function App() {
    const [selectedTopic, setSelectedTopic] = useState("React")

    function handleSelect(topic: string){
        setSelectedTopic(topic)
    }

    return (
        <main>
            <h1>Choose a topic</h1>
            <TopicButton name="React" onSelect={handleSelect}/>
            <TopicButton name="Ruby" onSelect={handleSelect}/>
            <TopicButton name="Go" onSelect={handleSelect}/>
            <p>Selected Topic: {selectedTopic}</p>
        </main>
    )
}

export default App
