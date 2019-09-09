import React, { useState } from 'react';
import './Main.css';

export default function Main() {

    const [command, setCommand] = useState('');

    async function handleSubmit() {
        console.log(command)

        //BOTAO EXECUTAR
    }

    return (
        <div>
            <div className="logo-container">
                <div>CGNAT MANAGER</div>
            </div>

            <div className="execute-container">
                <input
                    placeholder="Informa o comando Iptables"
                    value={command}
                    onChange={e => setCommand(e.target.value)}
                />
                <button type="button" onClick={handleSubmit} >EXECUTAR</button>
            </div>

            <div className="title-container">
                <div>Logs</div>
            </div>
            <div className="response-container">
                <div />
            </div>
        </div>
    )
}