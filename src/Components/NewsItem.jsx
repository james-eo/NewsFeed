import image from "../assets/news.png";

export const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-2 d-inline-block my-3 mx-3 px-0 Py-0"
      style={{ maxWidth: "363px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "360px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 46)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "News about the current event. It is the informtion about the current event."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
