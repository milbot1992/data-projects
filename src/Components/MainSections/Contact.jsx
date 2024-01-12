import '../../../Styling/Contact.css'
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
    return (
        <div className='contact-section'>
            <h3 className='contact-header'>Contact</h3>
            <div className='email-grid'>
                <p className='email-text1'><EmailIcon/></p>
                <p className='email-text2'>ellismillie92@gmail.com</p>
            </div>
        </div>
    )
}