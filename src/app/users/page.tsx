import React from "react";

const UserPage = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch("https://dummyjson.com/users");
    const user = await response.json();
    console.log(user);
    return <div>UserPage</div>;
};

export default UserPage;
