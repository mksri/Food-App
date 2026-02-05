import User from "./User";
import UserClass from "./UserClass";

const About = () =>{

    return (
        <div>
            <h1>About us</h1>
            <User name={"Founder Monika Srivastava (function)"}/>
            <UserClass name={"Founder Monika Srivastava(Class)"} location={"Deharddun"}/>
            </div>
    )
}

export default About;