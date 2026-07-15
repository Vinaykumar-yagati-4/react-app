import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

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

  const description =
    title === "Vegetables"
      ? "Fresh and healthy vegetables"
      : title === "Non Veg"
      ? "Premium quality meat products"
      : "Fresh milk and dairy products";


  return (
    <Link to={link}>

      <div
        className={`
          ${color}
          group
          relative
          overflow-hidden
          rounded-[32px]
          p-10
          text-white
          shadow-2xl
          border
          border-white/20
          hover:-translate-y-4
         hover:scale-[1.03]
hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
          transition-all
          duration-500
        `}
      >


        {/* Background Circle */}

        <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/20 rounded-full group-hover:scale-[1.8] transition duration-500">
        </div>



        {/* Icon */}

        <div className="relative">

          <div
           className="
           bg-white/20
           backdrop-blur-sm
           w-28
           h-28
           mx-auto
          rounded-full
          flex
          items-center
          justify-center
          text-7xl
          mb-5
          group-hover:rotate-12
          group-hover:scale-110
          transition-all
          duration-300
          "
        >
       {icon}
      </div>

     <div className="flex justify-center mb-6">
      <span className="bg-yellow-300 text-green-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          Fresh Everyday
      </span>
     </div>



          {/* Title */}

          <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-center">

            {title}

          </h2>



          {/* Description */}

          <p className="text-white/90 text-lg leading-7 mb-8 text-center">

            {description}

          </p>



          {/* Button */}

          <div
            className="
            inline-flex
            items-center
            gap-3
            bg-white
            text-gray-800
            px-8
            py-3
            rounded-full
            font-bold
            text-lg
            shadow-xl
            group-hover:bg-yellow-300
            group-hover:text-green-900
            group-hover:translate-x-2
            transition-all
            duration-300
            "
          >

            Explore

            <FaArrowRight />

          </div>


        </div>


      </div>

    </Link>
  );
}

export default CategoryCard;