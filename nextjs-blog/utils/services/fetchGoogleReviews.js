// import axios from 'axios';
// import { useEffect, useState } from 'react';

// async function fetchGoogleReviews() {

//   const apiKey = 'AIzaSyB6WRBStXSowi1aKRxz5zPMBu67gJhg4D4';
//   const placeId = 'ChIJnRjlYdNzhlQR7anyZPpJocQ';

//   const response = await axios.get(
//     `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
//   );

//   console.log("response : ", response.data.result.reviews)
//   // Access the reviews data from the response
//   const reviews = response.data.result.reviews;

//   return reviews;
// }

// // Example usage in a Next.js component
// export default function MyComponent() {
//     const [reviews, setReviews] = useState([]);
  
//     useEffect(() => {
//       const fetchReviews = async () => {
//         const fetchedReviews = await fetchGoogleReviews();
//         setReviews(fetchedReviews);
//       };
  
//       fetchReviews();
//     }, []);
  
//     // Render the reviews on your website
//     return (
//       <div>
//         {reviews && reviews.length > 0 ? (
//           reviews.map((review) => (
//             <div key={review.author_name}>
//               <p>{review.author_name}</p>
//               <p>{review.text}</p>
//               <p>{review.rating}</p>
//             </div>
//           ))
//         ) : (
//           <p>No reviews found.</p>
//         )}
//       </div>
//     );
//   }



import axios from 'axios';
import { useEffect, useState } from 'react';

async function fetchGoogleReviews() {
    const apiKey = 'AIzaSyB6WRBStXSowi1aKRxz5zPMBu67gJhg4D4';
    const placeId = 'ChIJnRjlYdNzhlQR7anyZPpJocQ';

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );

    // Access the reviews data from the response
    const reviews = response.data.result.reviews;

    return reviews;
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
}

// Example usage in a Next.js component
export default function MyComponent() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const fetchedReviews = await fetchGoogleReviews();
      setReviews(fetchedReviews);
    };

    fetchReviews();
  }, []);

  // Render the reviews on your website
  return (
    <div>
      {reviews && reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.author_name}>
            <p>{review.author_name}</p>
            <p>{review.text}</p>
            <p>{review.rating}</p>
          </div>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
}
