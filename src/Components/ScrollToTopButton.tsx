// import { useEffect, useState } from "react";
// import { FaArrowUp } from "react-icons/fa";

// function ScrollToTopButton() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () =>
//       window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {visible && (
//         <button
//           onClick={scrollToTop}
//           className="
//             fixed
//             bottom-8
//             right-8
//             z-50
//             bg-gradient-to-r
//             from-green-600
//             to-emerald-500
//             hover:from-green-700
//             hover:to-emerald-600
//             text-white
//             w-14
//             h-14
//             rounded-full
//             shadow-2xl
//             transition-all
//             duration-300
//             hover:scale-110
//           "
//         >
//           <FaArrowUp className="mx-auto text-xl" />
//         </button>
//       )}
//     </>
//   );
// }

// export default ScrollToTopButton;