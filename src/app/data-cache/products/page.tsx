import React from "react";

const ProductPage = async () => {
    const userResponse = await fetch("http://localhost:3001/users");
    const users = await userResponse.json();
    const response = await fetch("http://localhost:3001/products", {
        cache: "no-store",
    });
    const products = await response.json();

    return (
        <div>
            {products.map(
                (product: { title: string; price: number; id: number }) => (
                    <div key={product.id}>
                        <ul>
                            <li>{product.title}</li>
                            <li>{product.price}</li>
                        </ul>
                    </div>
                )
            )}

            <div>
                {users.map(
                    (user: {
                        id: number;
                        name: string;
                        email: string;
                        "year-old": number;
                    }) => (
                        <div key={user.id}>{user.name}</div>
                    )
                )}
            </div>
        </div>
    );
};

export default ProductPage;
