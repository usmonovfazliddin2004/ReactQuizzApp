import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
function MenuLinks() {
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch("https://online-json-server-api.up.railway.app/project/66b7b530340dd55056fb7d19/quizzes");

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link to={`/quiz/${item.title}`} key={item.title} className="menu-item header-logo">
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} />
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
