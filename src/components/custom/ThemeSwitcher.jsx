'use client'

import React, { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const onThemeToggler = () => {
        const root = document.getElementsByTagName('html')[0]

        root.classList.toggle('dark')
        setIsDarkMode(prevMode => !prevMode)
    }

    return (
        <button
            type="button"
            className="flex border-1 w-2rem h-2rem p-0 align-center justify-center"
            onClick={onThemeToggler}>
            {isDarkMode ? (
                <Sun size={18} className="dark:text-white" />
            ) : (
                <Moon size={18} className="dark:text-white" />
            )}
        </button>
    )
}

export default ThemeSwitcher
