const Features = (props) => {
    return (
        <div>
            <img src={props.icon} alt="" />
            <h3>{props.title}</h3>
            <p>{props.txt}</p>
        </div>
    )
}

export default Features