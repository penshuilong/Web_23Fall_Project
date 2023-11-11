import { Link, useLocation } from "react-router-dom";
function Navigation() {
  const links = ["Account", "Search"];
  const { pathname } = useLocation();
  return (
    <div className="list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/project/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default Navigation;