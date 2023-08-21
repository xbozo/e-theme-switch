import { ThemeContext } from "@/contexts/ThemeContext"
import { useContext } from "react"

export function Button() {
    const themeContext = useContext(ThemeContext)

    function handleChangeTheme() {
      themeContext?.setTheme(themeContext.theme === 'dark' ? 'light': 'dark')
    }

    return (
        <button
            onClick={handleChangeTheme}
            className={`
                p-2 rounded mt-5
                ${themeContext?.theme === 'dark' ? 'bg-black text-white' : 'bg-gray-300 text-black'}
            `}
        >
            Mudar Tema
        </button>
    )
}