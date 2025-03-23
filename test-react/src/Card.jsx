import profilePic from './assets/avatar4.png'
function Card() {
    return (
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture"></img>
            <h2 className = "card-title">Title</h2>
            <p className = "card-text">My name is Mystery</p>
        </div>
    );
}
export default Card