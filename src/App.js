import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import {ReactLenis} from "lenis/react";
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import Loader from "./components/Loader";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const lenisRef = useRef(null);

    useEffect(() => {
        function update(time) {
            lenisRef?.current?.lenis?.raf(1000 * time);
        }
        gsap.ticker.add(update);
        gsap.ticker.fps(30);
    }, []);

    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
            {isLoading ? <Loader setIsLoading={setIsLoading} /> : <Main />}
        </ReactLenis>
    );
}


export default App;
