import profilePic from "../assets/avatar.svg"



function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Pic"></img>
            <h2 className="card-tittle">Senghun</h2>
            <p className="card-text">My name is Senghun. I like coding.</p>
        </div>
        
    );

}

export default Card;