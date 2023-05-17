import { useEffect } from "react";
import useLocalStorage from './useLocalStorage.js';

const useThemeChanger = () => {
    var [Theme, setTheme] = useLocalStorage('theme', 'dark');
    useEffect(() => {
        const root = document.getElementById("root");
        const { classList } = root;

        // Remove any existing classes
        [...classList].forEach((name) => {
            classList.remove(name);
        });

        // Add the new class to the root div
        classList.add(Theme);
    }, [Theme]);
    return [Theme, setTheme]
}

export default useThemeChanger;