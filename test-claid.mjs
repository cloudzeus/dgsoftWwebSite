import FormData from 'form-data';
import fetch from 'node-fetch';
import fs from 'fs';

async function testClaid() {
    const claidApiKey = process.env.CLAID_API_KEY;
    if (!claidApiKey) throw new Error("CLAID_API_KEY not configured");

    const form = new FormData();
    form.append('operations', JSON.stringify({ background: { remove: true } }));
    form.append('output', JSON.stringify({ format: 'png', destination: 'tmp' }));
    
    // upload dummy
    const b64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
    form.append('file', Buffer.from(b64, 'base64'), { filename: 'test.png' });

    const claidRes = await fetch("https://api.claid.ai/v1-beta1/image/edit", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${claidApiKey}`,
            ...form.getHeaders()
        },
        body: form
    });

    const body = await claidRes.json();
    console.log(JSON.stringify(body, null, 2));
}

testClaid()
