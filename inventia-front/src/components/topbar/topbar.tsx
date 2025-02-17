import React from "react";

export default function Topbar() {
    return (
        <div className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-4">
            <img src="../../public/logo-inventario.png" alt="Inventia company" className="h-10 w-auto" />
            <h1 className="text-white text-2xl font-semibold">Inventia</h1>
        </div>
        <div className="flex items-center space-x-4">
            <button className="text-white">Home</button>
            <button className="text-white">About</button>
            <button className="text-white">Contact</button>
        </div>
        </div>
    );
}
