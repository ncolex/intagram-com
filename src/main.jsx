import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import admin_cred from './components/pocketbase_admin_cred'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
import PocketBase from 'pocketbase';
export const client = new PocketBase('http://127.0.0.1:8090');
try {
    const authData = client.admins.authViaEmail(admin_cred.username, admin_cred.password);
    client.authStore.save()
} catch (e) {
    console.log("Backend server not available")
}
