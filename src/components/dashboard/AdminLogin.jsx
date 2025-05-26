import React, { useState } from 'react';
import AdminLogo from '../../assets/images/admin-logo.png';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../assets/images/background-image.png';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { useEffect } from 'react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/admin-dashboard');
    };

    return (
         <div style={{ ...styles.body, backgroundImage: `url(${BackgroundImage})` }}>
            <div style={styles.container}>
                <div className="mx-auto w-[380px] max-w-[100%] text-center">
                    <img src={AdminLogo} alt="Admin Logo" className='mx-auto mb-6' />
                    <h2 className="text-2xl font-bold">Admin</h2>
                    <p className="text-gray-600">Please enter your information below to login to the admin dashboard.</p>
                </div>

                <form onSubmit={handleSubmit} style={styles.form} className='mx-auto'>
                    <label style={styles.label}>
                        Email
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </label>

                    <label style={styles.label}>
                        Password
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                            required
                        />
                    </label>

                    <Link to={"/admin-dashboard"}>
                        <button className='bg-gradient-to-r from-[#622BB9] to-[#351A60] text-white w-full px-16 py-2 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105' type="submit" >Login</button>
                    </Link>
                    {/* <Link to="/" className="text-sm text-blue-500 text-center mt-2">← Back to home</Link> */}
                </form>
            </div>
        </div>
    );
};

const styles = {
    body: {
       minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    container: {
        width: '100%',
        maxWidth: 500,
        padding: 32,
        border: '1px solid #ddd',
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        background: '#fff',
        textAlign: 'center',
        fontFamily: 'Urbanist, sans-serif',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        marginTop: 24,
        width: '100%',
    },
    label: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        fontWeight: 500,
        fontSize: 15,
    },
    input: {
        marginTop: 6,
        padding: '10px 12px',
        borderRadius: 4,
        border: '1px solid #ccc',
        fontSize: 15,
        width: '100%',
        boxSizing: 'border-box',
    },
    // button: {
    //     marginTop: 18,
    //     padding: '12px',
    //     background: '#E94E30',
    //     color: '#fff',
    //     border: 'none',
    //     borderRadius: 4,
    //     fontWeight: 600,
    //     fontSize: 16,
    //     cursor: 'pointer',
    // },
};

export default AdminLogin;
