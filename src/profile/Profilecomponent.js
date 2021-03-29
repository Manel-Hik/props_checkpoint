import PropTypes from 'prop-types'
import "./profile.css"

function Profilecomponent(props) {
    return (
        <div className="profile-card">
            <div className="avatar">{props.children}</div>
            <div className="info-container">
                <h3>
                    <span className="label">Name: </span> 
                    {props.fullName}{" "}
                
                </h3>
                <p>
                    {" "}
                    <span className="label">Profession: </span>
                    {props.profession}{" "}
                </p>
                <p>
                    {" "}
                    <span className="label">Bio : </span>
                    {props.bio}{" "}
                </p>

                <button
                onClick={()=>props.handleName(props.fullName)}
                className="btn btn-profile">
                    You are welcome{" "}

                </button>

            </div>

        </div>
    );
}
Profilecomponent.propTypes = {
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string,
    handleName:PropTypes.func

    
};
Profilecomponent.defaultProps = {
    fullName: "No Name",
    profession: "No profession",
    bio: "No Bio",
    handleName: ()=>{
        alert("There is no props to render!")
    }
};

export default Profilecomponent
