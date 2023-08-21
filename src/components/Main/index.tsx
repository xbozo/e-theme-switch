import { ThemeContext } from "@/contexts/ThemeContext"
import { useContext } from "react"

export function Main() {
    const themeContext = useContext(ThemeContext)

    return (
        <div className={`
            w-full h-full
            ${themeContext?.theme === 'dark' ? 'text-white bg-black' : 'text-black bg-gray-200'}
        `}
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