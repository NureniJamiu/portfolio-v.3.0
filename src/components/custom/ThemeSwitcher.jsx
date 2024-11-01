'use client'
import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Determine initial theme
        const savedTheme = localStorage.getItem('theme')
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        const initialTheme = savedTheme
            ? savedTheme
            : (systemPrefersDark ? 'dark' : 'light')

        // Apply initial theme
        document.documentElement.classList.toggle('dark', initialTheme === 'dark')
        setTheme(initialTheme)

        // Mark as mounted
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'

        // Update DOM
        document.documentElement.classList.toggle('dark', newTheme === 'dark')

        // Persist theme
        localStorage.setItem('theme', newTheme)

        // Update state
        setTheme(newTheme)
    }

    // Prevent rendering until client-side
    if (!mounted) {
        return (
            <button
                type="button"
                className="flex items-center justify-center w-8 h-8 p-0 border opacity-50 cursor-not-allowed"
                disabled
            >
                <Sun size={18} className="text-gray-400" />
            </button>
        )
    }

    return (
        <button
            type="button"
            className="flex items-center justify-center w-8 h-8 p-0 border"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'dark' ? (
                <Sun size={18} className="text-white" />
            ) : (
                <Moon size={18} className="text-black" />
            )}
        </button>
    )
}

export default ThemeSwitcher
