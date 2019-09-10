import React, { useState } from 'react';
import fetch from 'node-fetch';

import './Main.css';    

export default function Main() {

    const [command, setCommand] = useState('');

    async function handleSubmit() {
        const response = await fetch('http://127.0.0.1:3030', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: {
                "command": command
            }
        });
        console.log(response)
        
    }

    return (
        <div>
            <div className="execute-container">
                <input
                    placeholder="Informa o comando Iptables"
                    value={command}
                    onChange={e => setCommand(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>EXECUTAR</button>
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