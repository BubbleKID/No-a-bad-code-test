import React, { useState, useEffect } from 'react';
import { ITEM_API_URL } from '../api/HomeAPI';
import Card from '../components/Card/Card';
import './Home.sass';

export default function Home() {
    const [items, setItems] = useState([] as any[]);
    
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(ITEM_API_URL)
                const data = await response.json();
                setItems(data.items);
            } catch (err) {
                console.log(err);
            }
        }
        fetchItems();
    }, []);
    
    return(
        <div className="main-container">
            <div className="card-container">
                { items.map(item => <Card key={item.id} {...item} height={280} width={180}/>) }
            </div>
        </div>
    );
}