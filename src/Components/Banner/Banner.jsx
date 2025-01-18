import React from "react";
import axios from "../Utils/axios";
import requests from "../Utils/requests";
import { useEffect, useState } from "react";
import "./banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button ">My List</button>
        </div>
        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;

// import React, { useEffect, useState } from "react";
// import axios from "../Utils/axios";
// import requests from "../Utils/requests";

// const Banner = () => {
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     (async () => {
//       console.log("Banner component mounted. Fetching Netflix Originals...");
//       console.log("requests.fetchNetflixOriginals URL:", requests.fetchNetflixOriginals);
//       try {
//         const request = await axios.get(requests.fetchNetflixOriginals);
//         console.log("API response received:", request.data);
//         setMovie(
//           request.data.results[
//             Math.floor(Math.random() * request.data.results.length)
//           ]
//         );
//       } catch (error) {
//         console.error("Error fetching Netflix Originals:", error.message || error);
//       }
//     })();
//   }, []);

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     <div
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="banner__contents">
//         <h1 className="banner__title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner__buttons">
//           <button className="banner__button play">Play</button>
//           <button className="banner__button">My List</button>
//         </div>
//         {/* <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1> */}
//       </div>
//       <div className="banner__fadeBottom" />
//     </div>
//   );
// };

// export default Banner;
