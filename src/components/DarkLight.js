import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkLight = () => {
    const [isDarkMode, setDarkMode] = React.useState(false);

    console.log('isDarkMode :>> ', isDarkMode);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };
    return (

        <DarkModeSwitch
            style={{ marginBottom: '2rem', backgroundColor: 'red' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
        />

    );
};

export default DarkLight;