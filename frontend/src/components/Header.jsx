import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <nav className="flex justify-between items-center py-10 md:mx-1 lg:mx-0 border-b-[1px] border-black">
                <Link to={'/'} className='text-4xl font-black'>Blogs</Link>
                <div className="flex gap-6 items-center">
                    <Link to={'/add'} className="text-2xl font-bold hover:text-gray-700">Create</Link>
                    <Link to={'/about'} className='text-2xl font-bold hover:text-gray-700'>About</Link>
                    <Link to={'/contact'} className='text-2xl font-bold hover:text-gray-700'>Contact</Link>
                </div>
            </nav>
        </>
    )
}