import { useState } from 'react';

export function useCollection() {
    const [collection, setCollection] = useState([]);
    return { collection, setCollection }
}