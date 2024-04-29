import AddFriendsButton from '@/components/ui/AddFriendsButton'
import { FC } from 'react'



const page: FC = ({ }) => {
    return ( 
    <main className='pt-8'>
        <h1 className='font-bold text-5xl mb-8 text-white bg-black'>Add a Friend</h1>
        <AddFriendsButton />
    </main>
    )
}

export default page