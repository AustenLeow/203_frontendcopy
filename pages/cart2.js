import { useState, useEffect, useCallback } from 'react';

export default function cart2() {
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItemsHandler = useCallback(async () => {
   
            fetch('http://localhost:8080/api/v1/cart', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
            })
            .then((response) => { return response.json(); })
            .then((data) => {
                    console.log(data);
                })
                .catch(err => {
                    console.log(err);
                });
    }, []);

    useEffect(() => {
        fetchCartItemsHandler();
    }, [fetchCartItemsHandler]);
}