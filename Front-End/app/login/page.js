'use client'
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
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

        signIn('credentials', {
            ...state,
            redirect: false,
        })
            .then((callback) => {
                if (callback?.ok) {
                    router.refresh();
                }
                if (callback?.error) {
                    throw new Error('Wrong Credentials');
                }
            });

        router.push('/');
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
                    Don't have an account? <Link href='/signup' className='text-blue-500'>Sign Up!</Link>
                </div>
            </div>
        </form>
    );
}
