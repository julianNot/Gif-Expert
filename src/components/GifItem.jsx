export const GifItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title} width="350" />
            <p>{title}</p>
        </div>
    );
};
