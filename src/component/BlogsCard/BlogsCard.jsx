import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import placeHoldeImage from '../../assets/404.jpg'

// eslint-disable-next-line react/prop-types
const BlogsCard = ({blog}) => {
    const {id, cover_image, title, published_at, description} = blog
    return (
        <Link to = {`/blog/${id}`}  className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 ">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeHoldeImage} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-400">{new Date(published_at).toLocaleString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};
BlogsCard.propTypes ={
    blog: PropTypes.obj
}

export default BlogsCard;