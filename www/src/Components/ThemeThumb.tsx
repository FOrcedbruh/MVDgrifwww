import { useTheme } from "./hooks/useTheme";
import { useState } from 'react';
import Button from '@mui/material/Button';




const ThemeThumb: React.FC = () => {

    const {theme, setTheme} = useTheme();

    const handleChange = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    return (
        <>
            <section>
                <Button variant="contained" color="secondary" onClick={handleChange}>Тема</Button>
            </section>
        </>
    )
}


export default ThemeThumb;