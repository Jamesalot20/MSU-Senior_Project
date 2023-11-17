'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Corrected import
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const initialState = {
    email: '',
    password: '',
};

export default function Page() {
    const [state, setState] = useState(initialState);
    const router = useRouter();

    function handleChange(event) {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    function onSubmit(event) {
        event.preventDefault();

        // Updated API endpoint to match the backend route
        axios
            .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user-form`, state)
            .then(() => {
                // Assuming you want to do a page refresh to clear the form
                router.reload(); // Updated method for refreshing the page
            })
            .catch((error) => {
                // Better error handling
                console.error('Error submitting form:', error.response?.data || error.message);
                // Here you could set an error state and display it to the user
            });
    }

    return (
        <form onSubmit={onSubmit} className='text-center'>
            <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
                <Input placeholder='Email' id='email' type='email' name='email' onChange={handleChange} value={state.email} />
                <Input placeholder='Password' id='password' type='password' name='password' onChange={handleChange} value={state.password} />
                <Button type='submit' variant='bank'>Submit</Button>
            </div>

            <div>
                <div>
                    Already have an account? <Link href='/login'><a className='text-blue-500'>Sign In</a></Link>
                </div>
            </div>
        </form>
    );
}
