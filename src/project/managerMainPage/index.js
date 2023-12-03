
import React from 'react'
import { useState, useEffect } from 'react';
function ManagerMainPage() {


    // Mock data for accounts
    const mockAccounts = [
        { id: 1, username: 'user1', email: 'user1@example.com', role: 'user' },
        { id: 2, username: 'user2', email: 'user2@example.com', role: 'seller' },
        // ... add more mock accounts as needed
    ];

    // Initialize accounts with mock data
    const [accounts, setAccounts] = useState(mockAccounts);
    const [selectedAccount, setSelectedAccount] = useState(null);

    // Handlers for form inputs
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user'); // Default role

    const handleSelectAccount = (account) => {
        setSelectedAccount(account);
        setUsername(account.username);
        setEmail(account.email);
        setRole(account.role);
    };

    const handleDeleteAccount = (accountId) => {
        setAccounts(accounts.filter(account => account.id !== accountId));
    };

    const handleSaveAccount = () => {
        if (selectedAccount) {
            // Update existing account
            setAccounts(accounts.map(account =>
                account.id === selectedAccount.id
                    ? { ...account, username, email, role }
                    : account
            ));
        } else {
            // Add new account
            const newAccount = {
                id: Math.max(...accounts.map(a => a.id)) + 1,
                username,
                email,
                role
            };
            setAccounts([...accounts, newAccount]);
        }
        // Reset form and selected account
        setSelectedAccount(null);
        setUsername('');
        setEmail('');
        setRole('user');
    };

    return (
        <div className="container">
            <h1>Admin Dashboard</h1>
            <div className="row">
                <div className="col-md-6">
                    <h2>Accounts</h2>
                    <ul className="list-group">
                        {accounts.map((account) => (
                            <li
                                key={account.id}
                                className="list-group-item"
                                onClick={() => handleSelectAccount(account)}
                            >
                                {account.username}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setSelectedAccount(null)}>Add New Account</button>
                </div>
                <div className="col-md-6">
                    <h2>{selectedAccount ? "Edit Account" : "New Account"}</h2>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Role</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="user">User</option>
                            <option value="seller">Seller</option>
                        </select>
                        <button onClick={handleSaveAccount}>Save Account</button>
                        {selectedAccount && (
                            <button onClick={() => handleDeleteAccount(selectedAccount.id)}>Delete Account</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMainPage;