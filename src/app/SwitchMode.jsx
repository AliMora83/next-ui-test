'use client'

import React, { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";

export default function Switcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if (!mounted) return null

    return (
        <Switch
            defaultSelected
            size="lg"
            color="secondary"
            isSelected={theme === 'dark'}
            onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
        </Switch>
    );
}
