import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is the About Page</h2>
            <UserClass name={"Akriti (class)"}/>
        </div>
    )
}

export default About;