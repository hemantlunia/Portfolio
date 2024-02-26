import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("https://api.github.com/users/hemantlunia")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='bg-[navy] min-h-screen flex items-center justify-center'>
            <div className='text-white text-center'>
                <h1 className='text-3xl underline'>Github followers: {data.followers > 50?data.followers:86}</h1>
                <div className='flex flex-col items-center sm:flex-row'>
                    <img className='mx-10 rounded-full mb-4 sm:mb-0' src={data.avatar_url} alt="Git Image" width={300} />
                    <div className='bg-black p-4 rounded'>
                        <p className='text-white'>{data.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;
