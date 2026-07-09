import { Link } from "react-router-dom";

type CategoryProps = {
  title: string;
  icon: string;
  color: string;
  link: string;
};

function CategoryCard({
  title,
  icon,
  color,
  link,
}: CategoryProps) {
  return (
    <Link to={link}>
      <div
        className={`${color} rounded-2xl p-8 text-center text-white shadow-lg hover:scale-105 transition duration-300`}
      >
        <div className="text-6xl mb-4">
          {icon}
        </div>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default CategoryCard;