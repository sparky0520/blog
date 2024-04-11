import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="flex justify-between my-5 text">
            <Link to={'/'} className='text-2xl font-bold'>Blogs</Link>
            <div className="flex gap-4">
                <Link to={'/about'} className='text-2xl font-bold'>About</Link>
                <Link to={'/contact'} className='text-2xl font-bold'>Contact</Link>
            </div>
        </nav>
    )
}