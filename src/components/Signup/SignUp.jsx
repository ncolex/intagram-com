import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { client } from '../../main'
import { Footer } from '../Common/Footer/footer'
import StoreContext from '../Context/UserContextStore'

const SignUp = () => {

    const { newuserEmail, setnewuserEmail, password, setPassword, setFullName, setUserName } = useContext(StoreContext);

    const navigate = useNavigate()

    const handlenewemail = (e) => {
        setnewuserEmail(e.target.value)
    }
    const handlefullname = (e) => {
        setFullName(e.target.value)
    }
    const handleusername = (e) => {
        setUserName(e.target.value)
    }
    const handlenewpassword = (e) => {
        setPassword(e.target.value)
    }

    const createUser = async (e) => {
        // if(!email || !password) return;
        e.preventDefault();
        try {
            const user = await client.users.create({
                email: newuserEmail,
                password: password,
                passwordConfirm: password,
            });
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ marginLeft: -80 }} className="-mt-12 h-fit w-screen bg-gray-50 flex flex-col">
            <div style={{ width: 350 }} className='h-fit mt-8 bg-white border-solid="true" border-2="true" border-gray-300="true" m-auto flex items-center justify-items flex-col'>
                <img className='h-16 mt-8 m-auto' src="data:image/png;base64,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" alt="" />
                <p style={{ width: 250 }} className='h-fit mt-2 text-m font-medium'>Sign up to see photos and videos from your friends.</p>
                <button type="submit" className='h-8 w-64 mt-3 bg-blue-400 font-white rounded'>
                    <a href="https://www.facebook.com/" className=' flex justify-center items-center h-12 text-sm ml-4 -mt-2 mr-2 font-medium text-white'>
                        <img className='h-4 mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsopFzwl5NhkdQf74U92qjJBsfVbilRK2S1b2HgaT4sg&s" alt="" srcSet="" />
                        Log in with Facebook</a>
                </button>
                <span className='bg-white-900 flex h-12 w-72 mt-1 b-green-800 justify-center items-center'>
                    <div className='h-px w-28 bg-gray-300'></div>
                    <div className='text-gray-500 font-medium text-xs mr-4 ml-4'>OR</div>
                    <div className='h-px w-24 ml-1 bg-gray-300'></div>
                </span>
                <form onSubmit={createUser}>
                    <input onChange={handlenewemail} autoComplete="off" type="email" border-solid="true" border-2="true" border-gray-300="true" style={{ outline: "none", height: 38 }} placeholder='Mobile Number or Email' name="" id="1" className=' text-xs w-64 mt-1 p-1 border-solid="true" border-2="true" border-gray-300="true"' />
                    <input onChange={handlefullname} autoComplete="off" type="text" style={{ outline: "none", height: 38 }} placeholder="Full Name" name="" id="2" className=' text-xs w-64 mt-1 p-1 border-solid="true" border-2="true" border-gray-300="true"' />
                    <input onChange={handleusername} autoComplete="off" type="text" style={{ outline: "none", height: 38 }} placeholder="Username" name="" id="3" className=' text-xs w-64 mt-1 p-1 border-solid="true" border-2="true" border-gray-300="true"' />
                    <input onChange={handlenewpassword} autoComplete="off" type="password" style={{ outline: "none", height: 38 }} placeholder="Password" name="4" id="" className=' text-xs w-64 mt-1 p-1 border-solid="true" border-2="true" border-gray-300="true"' />
                    <div className='h-18 w-64 mx-auto mt-4'>
                        <p className='text-xs text-gray-400'>People who use our service may have uploaded your contact information to Instagram. <a target="_blank" href="https://www.facebook.com/help/instagram/261704639352628" className='font-bold'>Learn More</a></p>
                        <p className='text-xs text-gray-400 mt-4'>By signing up, you agree to our <a target="_blank" className='font-bold' href="https://help.instagram.com/581066165581870/?locale=en_US">Terms</a>,<a target="_blank" className='font-bold' href="https://www.facebook.com/privacy/policy">Privacy Policy </a> and <a target="_blank" className='font-bold' href="https://help.instagram.com/1896641480634370/">Cookies Policy .</a></p>
                    </div>
                    <button type="submit" className='h-8 w-64 mt-3 bg-blue-200  hover:bg-blue-400 text-white rounded'>Sign up</button>
                </form><div className='h-10'></div>
            </div>
            <div style={{ width: 350 }} className=' mx-auto border-solid="true" bg-white mt-2 h-fit border-2="true" border-gray-200 '>
                <p className='text-sm h-16 bg-white flex justify-center items-center'>Have an account?&nbsp;
                    <Link to='/accounts/login/' className='text-cyan-600 font-normal'>Log in</Link></p>
            </div>
            <p className='text-sm mt-5 '>Get the app.</p>
            <div style={{ width: 350 }} className='h-16 mx-auto mt-2 flex justify-center items-center '>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DF7680D91-7FA6-44F2-AEB9-06A1EECF23DF%26utm_content%3Dlo%26utm_medium%3Dbadge"><img className='h-10  mr-3' alt="Get it on Google Play" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"></img></a>
                <a href="https://www.microsoft.com/store/productId/9NBLGGH5L9XT"><img className='h-10' alt="Get it from Microsoft" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"></img></a>
            </div>
            <br /><br /><br />
            <Footer />
        </div>
    )
}

export default SignUp;