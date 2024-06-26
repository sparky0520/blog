import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="flex justify-between my-5 md:mx-1 lg:mx-0">
                <Link to={'/'} className='text-2xl font-bold'>Blogs</Link>
                <div className="flex gap-4">
                    <Link to={'/about'} className='text-2xl font-bold'>About</Link>
                    <Link to={'/contact'} className='text-2xl font-bold'>Contact</Link>
                </div>
            </nav>
            <Link to={'/add'} className="border-2 rounded-full px-3 pb-1 text-3xl float-right mr-5 transition hover:bg-black hover:text-white">+</Link>
        </>
    )
}