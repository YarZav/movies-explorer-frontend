import './Page.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from './Profile/Profile';

function Page() {
    return(
        <div className='page'>
            <Header isAuthed={true}/>
            <Profile />
            <Footer />
        </div>
    )
}

export default Page;