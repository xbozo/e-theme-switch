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
            className="
                p-2 rounded mt-5 bg-gray-300 text-black
                dark:bg-black dark:text-white
            "
        >
            Mudar Tema
        </button>
    )
}