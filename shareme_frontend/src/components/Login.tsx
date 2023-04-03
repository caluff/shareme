import GoogleLogin from "react-google-login";
import {useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/all";
import shareVideo from '../assets/mylivewallpapers.com-Mass-Effect.mp4'
import logo from '../assets/logocaluff.png'
import {client} from "../client";

const Login = () => {
    const navigate = useNavigate();
    const responseGoogle = (response: any) => {
        localStorage.setItem('user', JSON.stringify(response.profileObj));
        const {name, googleId, imageUrl} = response.profileObj;
        const doc = {
            _id: googleId,
            _type: 'user',
            userName: name,
            image: imageUrl,
        }
        client.createIfNotExists(doc)
            .then(() => {
                navigate('/', {replace: true})
            })
    }
    return (
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
                <video
                    src={shareVideo}
                    typeof="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />
                <div
                    className="absolute flex flex-col left-0 right-0 top-0 items-center justify-center bottom-0 bg-blackOverlay">
                    <div>
                        <img src={logo} width="130px" alt="logo"/>
                    </div>
                    <div className="shadow-2xl">
                        <GoogleLogin
                            clientId="152921657783-dmq0o95e6pvea0v08ncokrv8p1hoccs3.apps.googleusercontent.com"
                            /*process.env.REACT_APP_GOOGLE_API_TOKEN*/
                            render={(renderProps:any) => (
                                <button
                                    type="button"
                                    className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                >
                                    <FcGoogle className="mr-4"/>Sign in with Google
                                </button>
                            )}
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy="single_host_origin"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login