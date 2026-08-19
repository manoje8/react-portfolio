const Container = ({ data }) => (
  <div className="experience-container">
    {data.map((data, id) => (
      <article className="experience-content animate-box fadeInUp animated" key={id}>
        <div className="experience-label">
          <h2>
            {data.title}
            <span>{data.duration}</span>
          </h2>
          <span className="role">{data.subtitle}</span>
          {data.details.map((details, id) => (
            <p key={id} className="label-content">
              ▪ {details}
            </p>
          ))}
          <div>
            {data.tags?.map((skill, id) => (
              <span key={id} className="badge badge-secondary">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
);

export default Container;
