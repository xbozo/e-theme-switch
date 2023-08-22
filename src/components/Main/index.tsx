import { ThemeContext } from "@/contexts/ThemeContext"
import { useContext } from "react"

export function Main() {
    const themeContext = useContext(ThemeContext)

    return (
        <div className="
            w-full h-full bg-gray-200 text-black
            dark:text-white dark:bg-black
        "
        >
            <h1 className="text-2xl">Título da página</h1>
            <p>Conteúdo da página</p>

            <button
                onClick={() => alert('haha')}
                className="p-2"
            >
                Botão
            </button>
        </div>
    )
}