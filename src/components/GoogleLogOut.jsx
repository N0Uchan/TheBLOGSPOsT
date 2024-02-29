import { GoogleLogout } from '@react-oauth/google';

export default function GoogleLogOut() {

    function onSuccessLogOut() {
        console.log('Logout made successfully');
    }

    return (
        <GoogleLogout
            buttonText="Logout"
            onLogoutSuccess={onSuccessLogOut}
        />
    );
}