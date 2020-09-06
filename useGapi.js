import { useEffect, useState, } from 'react';
import { gapi } from 'gapi-script';

// Custom hook to initialize and use the Google API
function useGapi(options,) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {
        apiKey,
        clientId,
        discoveryDocs,
        scope,
        ux_mode,
        // redirect_uri,
        onLoaded,
    } = options;

    useEffect(() => {
        gapi.load("client:auth2", initClient);
    }, []);

    function initClient() {
        // Initialize the JavaScript client library.
        gapi.client
            .init({
                apiKey,
                discoveryDocs,
                clientId,
                scope,
                ux_mode,
                // redirect_uri
            })
            .then(() => {
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

                // Handle the initial sign-in state.
                updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

                // Initialize and make the API request.
                onLoaded && onLoaded()
                setIsLoading(false)
            });
    };

    function updateSigninStatus(isSignedIn) {
        if (!isSignedIn) {
            // gapi.auth2.getAuthInstance().signIn();
        } else {
            const userInfo = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
            const basicProfile = {
                id: userInfo && userInfo.getId(),
                fullName: userInfo && userInfo.getName(),
                givenName: userInfo && userInfo.getGivenName(),
                familyName: userInfo && userInfo.getFamilyName(),
                imageUrl: userInfo && userInfo.getImageUrl(),
                email: userInfo && userInfo.getEmail(),
            };

            setIsAuthenticated(true);
            setCurrentUser(basicProfile);
        }
    };

    async function handleSignIn() {
        try {
            await gapi.auth2.getAuthInstance().signIn();
        } catch (error) {
            console.log(error);
            throw new Error('Google API not loaded', error);
        }
    };

    async function handleSignOut() {
        try {
            await gapi.auth2.getAuthInstance().signOut();
            setIsAuthenticated(false);
        } catch (error) {
            console.log(error);
            throw new Error('Google API not loaded', error);
        }
    };

    return {
        isLoading,
        currentUser,
        isAuthenticated,
        handleSignIn,
        handleSignOut
    };
}

export default useGapi;