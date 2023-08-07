import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CreatorCard = (props) => {
    return(
        <div>
            
            {props.name != null ?
                <h3> {props.name}</h3> 
            : <h3></h3>}
            {props.img_url != null ? 
                <img src={props.img_url}/>:
                <p></p> }
            {props.desc != null ? 
                <p> {props.desc} </p>:
                <p></p>
            }
            {props.insta_link ?
                <a href={props.insta_link}> Link to Instagram </a>
            : <p> </p>}
            {props.fb_link ?
                <a href={props.fb_link}> Link to Facebook </a>
            : <p> </p>}
            {props.yt_link ?
                <a href={props.yt_link}> Link to Youtube </a>
            : <p> </p>}
            {props.twitter_link ?
                <a href={props.twitter_link}> Link to Twitter </a>
            : <p> </p>}

            <button>
                <Link to={'viewCreator/'+props.id}>
                    View 
                </Link>
            </button>
            <button>
                <Link to={'editCreator/'+props.id}>
                    Edit
                </Link>
            </button>
        </div>
    )
}
export default CreatorCard