const Testimonial = (props) => {
    return (
        <div>
            <p>{props.txt}</p>
            <div className="testimonial-profile">
                <img src={props.icon} alt="" />
                <div className="testimonial-profile-in">
                    <h2>{props.title}</h2>
                    <p>{props.job}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial