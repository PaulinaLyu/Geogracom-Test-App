import { useState } from 'react';

export function useNumbers() {
    const [numbers, setNumbers] = useState('');
    return { numbers, setNumbers }
}