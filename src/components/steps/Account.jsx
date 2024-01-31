import React, { useEffect, useState } from 'react';
import { useStepperContext } from '../../contexts/StepperContext';

export default function Account({ setIsFormValid }) {
    const {userData, setUserData} = useStepperContext();
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value});

        // Validate email
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailValid(emailRegex.test(value));
        }
    
        // Validate password
        if (name === 'password') {
            setPasswordValid(value.length >= 6);
        }
    }

    // Check form validity and update parent component
  useEffect(() => {
    setIsFormValid(emailValid && passwordValid);
  }, [emailValid, passwordValid, setIsFormValid]);

    return (
    <div className='flex flex-col'>
        {/* <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                Full name
            </div>
            <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input 
                    onChange={handleChange}
                    value={userData['username'] || ''}
                    name='username'
                    placeholder='Miraj Asraf'
                    className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                />
            </div>
        </div> */}

        <div className='w-full mx-2 flex-1'>
            <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
                Email id
            </div>
            <div className={`my-2 flex rounded border ${emailValid ? 'border-gray-200' : 'border-red-500'} bg-white p-1`}>
                <input 
                    onChange={handleChange}
                    value={userData['email'] || ''}
                    name='email'
                    placeholder='miraj@example.com'
                    type='email'
                    className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                />
            </div>
            {!emailValid && <p className='text-red-500 text-xs'>Enter a valid email address</p>}
        </div>
        <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Password
        </div>
        <div className={`my-2 flex rounded border ${passwordValid ? 'border-gray-200' : 'border-red-500'} bg-white p-1`}>
          <input
            onChange={handleChange}
            value={userData["password"] || ""}
            name="password"
            placeholder="Password"
            type="password"
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          />
        </div>
        {!passwordValid && <p className='text-red-500 text-xs'>Password must be at least 6 characters long</p>}
      </div>
    </div>
    );
}