import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { Password } from 'primereact/password';
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { navigate } from "wouter/use-hash-location";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember:", remember);
  };

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen fondo-inventia bg-cover bg-center">
    <div className="flex flex-1 flex-col justify-center min-w-[40rem] bg-gray-200/65 backdrop-blur-lg max-h-[35rem] rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Inventia company" src="../../public/logo-inventario.png" className="mx-auto h-15 w-auto"/>
          <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Bienvenido(a) a Inventia
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="mt-5card p-fluid">
                <FloatLabel>
                <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="username">Usuario</label>
                </FloatLabel>
              </div>
            </div>

            <div>
              <div className="mt-8 card p-fluid">
                <FloatLabel>
                <Password value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} toggleMask feedback={false} />
                    <label className="" htmlFor="password">Contraseña</label>
                </FloatLabel>
              </div>
            </div>
                 {/* Remember Me Checkbox */}
           <div className="mb-4 flex items-center">
             <Checkbox onChange={(e) => setRemember(e.checked ?? false)} checked={remember}></Checkbox>
             <label htmlFor="remember" className="ml-2"> Recuerdame </label>
           </div>
            <div>
              <Button onClick={handleLogin} label="Ingresar" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
            </div>
          </form>
        </div>
      </div>
      </div>
  );
}