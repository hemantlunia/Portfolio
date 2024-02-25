// import React, { useEffect, useState } from 'react'

// function Github() {
//     const [data,setData] = useState([])
//     useEffect(() => {
//         fetch("https://api.github.com/users/hemantlunia")
//             .then(res => res.json())
//             .then(data => {
//                 //  console.log(data)
//                  setData(data)
//             },[])
            
//     })
//     return (
//         <>
//         <div className='bg-[navy]'>

//             <div className='text-center text-white text-3xl h-80 underline'>Github followrs : {data.followers}
//             <p className='text-start'>{data.bio}</p>
//             <img className='mx-10 rounded-full' src={data.avatar_url} alt="Git Image" width={300} />
//             </div>
//         </div>
//         </>
//     )
// }

// export default Github


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
                <h1 className='text-3xl underline'>Github followers: {data.followers}</h1>
                <div className='flex justify-center items-center'>
                    <img className='mx-10 rounded-full' src={data.avatar_url} alt="Git Image" width={300} />
                    <div className='bg-[black] p-4 rounded'>
                        <p className='text-white'>{data.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Github;
