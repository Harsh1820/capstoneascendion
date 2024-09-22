// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Card, CardContent, Typography, CircularProgress, Grid, Alert, Button } from '@mui/material';
// import { styled } from '@mui/system';

// // Styled components
// const BackgroundContainer = styled('div')({
//   backgroundImage: 'url(https://img.freepik.com/premium-vector/colorful-background-with-colorful-box-colored-squares_1120557-40067.jpg?semt=ais_hybrid)',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   minHeight: '100vh',
//   padding: '20px',
// });

// const StyledCard = styled(Card)({
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   borderRadius: '16px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
//   },
// });

// const ProvidersList = styled('ul')({
//   listStyleType: 'none',
//   padding: 0,
//   margin: '10px 0',
// });

// const ProviderItem = styled('li')({
//   marginBottom: '5px',
// });

// const ServicesByCategory = ({ cart, setCart }) => {
//   const { categoryId } = useParams(); // Get categoryId from the route parameters
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/services/category/${categoryId}`);
//         setServices(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, [categoryId]);

//   const handleAddToCart = (service) => {
//     setCart((prevCart) => [...prevCart, service]);
//   };

//   return (
//     <BackgroundContainer>
//       <Typography variant="h4" gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>
//         Services
//       </Typography>
//       {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />}
//       {error && <Alert severity="error">{error}</Alert>}
//       <Grid container spacing={3}>
//         {services.map((service) => (
//           <Grid item xs={12} sm={6} md={4} key={service._id}>
//             <StyledCard>
//               <CardContent>
//                 <Typography variant="h5">{service.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {service.description}
//                 </Typography>
//                 <Typography variant="h6" color="primary">
//                   ${service.price}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                   Providers:
//                 </Typography>
//                 {service.providers.length > 0 ? (
//                   <ProvidersList>
//                     {service.providers.map((provider) => (
//                       <ProviderItem key={provider._id}>
//                         <Typography variant="body2">{provider.name}</Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {provider.email}
//                         </Typography>
//                       </ProviderItem>
//                     ))}
//                   </ProvidersList>
//                 ) : (
//                   <Typography variant="body2" color="text.secondary">
//                     No providers available
//                   </Typography>
//                 )}
//                 <Button 
//                   variant="contained" 
//                   color="primary" 
//                   onClick={() => handleAddToCart(service)}
//                   sx={{ marginTop: '10px' }}
//                 >
//                   Add to Cart
//                 </Button>
//               </CardContent>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>
//     </BackgroundContainer>
//   );
// };

// export default ServicesByCategory;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Card, CardContent, Typography, CircularProgress, Grid, Alert, Button } from '@mui/material';
// import { styled } from '@mui/system';

// // Styled components
// const BackgroundContainer = styled('div')({
//   backgroundImage: 'url(https://img.freepik.com/premium-vector/colorful-background-with-colorful-box-colored-squares_1120557-40067.jpg?semt=ais_hybrid)',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   minHeight: '100vh',
//   padding: '20px',
// });

// const StyledCard = styled(Card)({
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   borderRadius: '16px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
//   },
// });

// const ProvidersList = styled('ul')({
//   listStyleType: 'none',
//   padding: 0,
//   margin: '10px 0',
// });

// const ProviderItem = styled('li')({
//   marginBottom: '5px',
// });

// const ServicesByCategory = ({ cart, setCart }) => {
//   const { categoryId } = useParams(); // Get categoryId from the route parameters
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/services/category/${categoryId}`);
//         setServices(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, [categoryId]);

//   const handleAddToCart = (service) => {
//     setCart((prevCart) => [...prevCart, service]);
//   };

//   return (
//     <BackgroundContainer>
//       <Typography variant="h4" gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>
//         Services
//       </Typography>
//       {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />}
//       {error && <Alert severity="error">{error}</Alert>}
//       <Grid container spacing={3}>
//         {services.map((service) => (
//           <Grid item xs={12} sm={6} md={4} key={service._id}>
//             <StyledCard>
//               <CardContent>
//                 <Typography variant="h5">{service.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {service.description}
//                 </Typography>
//                 <Typography variant="h6" color="primary">
//                   ${service.price}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                   Providers:
//                 </Typography>
//                 {service.providers.length > 0 ? (
//                   <ProvidersList>
//                     {service.providers.map((provider) => (
//                       <ProviderItem key={provider._id}>
//                         <Typography variant="body2">{provider.name}</Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {provider.email}
//                         </Typography>
//                       </ProviderItem>
//                     ))}
//                   </ProvidersList>
//                 ) : (
//                   <Typography variant="body2" color="text.secondary">
//                     No providers available
//                   </Typography>
//                 )}
//                 <Button 
//                   variant="contained" 
//                   color="primary" 
//                   onClick={() => handleAddToCart(service)}
//                   sx={{ marginTop: '10px' }}
//                 >
//                   Add to Cart
//                 </Button>
//               </CardContent>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>
//     </BackgroundContainer>
//   );
// };

// export default ServicesByCategory;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Card, CardContent, Typography, CircularProgress, Grid, Alert, Button } from '@mui/material';
// import { styled } from '@mui/system';

// // Styled components
// const BackgroundContainer = styled('div')({
//   backgroundImage: 'url(https://img.freepik.com/premium-vector/colorful-background-with-colorful-box-colored-squares_1120557-40067.jpg?semt=ais_hybrid)',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   minHeight: '100vh',
//   padding: '20px',
// });

// const StyledCard = styled(Card)({
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   borderRadius: '16px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
//   },
// });

// const ProvidersList = styled('ul')({
//   listStyleType: 'none',
//   padding: 0,
//   margin: '10px 0',
// });

// const ProviderItem = styled('li')({
//   marginBottom: '5px',
// });

// const ServicesByCategory = ({ cart, setCart }) => {
//   const { categoryId } = useParams(); // Get categoryId from the route parameters
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [ratings, setRatings] = useState({});

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/services/category/${categoryId}`);
//         setServices(response.data);

//         // Fetch ratings for each service and their providers
//         const ratingsPromises = response.data.map(service => {
//           return axios.get(`http://localhost:5000/api/ratings/Service/${service._id}`)
//             .then(serviceRatings => {
//               // For each service, fetch ratings for its providers
//               const providerRatingsPromises = service.providers.map(provider => 
//                 axios.get(`http://localhost:5000/api/ratings/Provider/${provider._id}`)
//               );

//               return Promise.all(providerRatingsPromises).then(providerRatings => {
//                 return {
//                   serviceId: service._id,
//                   serviceRatings: serviceRatings.data,
//                   providerRatings: providerRatings.map(res => res.data) // array of ratings for each provider
//                 };
//               });
//             });
//         });

//         const ratingsData = await Promise.all(ratingsPromises);
//         const ratingsMap = {};
//         ratingsData.forEach(({ serviceId, serviceRatings, providerRatings }) => {
//           ratingsMap[serviceId] = {
//             serviceRatings,
//             providerRatings
//           };
//         });

//         setRatings(ratingsMap);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, [categoryId]);

//   const handleAddToCart = (service) => {
//     setCart((prevCart) => [...prevCart, service]);
//   };

//   return (
//     <BackgroundContainer>
//       <Typography variant="h4" gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>
//         Services
//       </Typography>
//       {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />}
//       {error && <Alert severity="error">{error}</Alert>}
//       <Grid container spacing={3}>
//         {services.map((service) => (
//           <Grid item xs={12} sm={6} md={4} key={service._id}>
//             <StyledCard>
//               <CardContent>
//                 <Typography variant="h5">{service.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">{service.description}</Typography>
//                 <Typography variant="h6" color="primary">${service.price}</Typography>
//                 <Typography variant="h6" gutterBottom>Providers:</Typography>
//                 {service.providers.length > 0 ? (
//                   <ProvidersList>
//                     {service.providers.map((provider, index) => (
//                       <ProviderItem key={provider._id}>
//                         <Typography variant="body2">{provider.name}</Typography>
//                         <Typography variant="body2" color="text.secondary">{provider.email}</Typography>
//                         {/* Provider Ratings */}
//                         <Typography variant="h6" gutterBottom>Provider Ratings:</Typography>
//                         {ratings[service._id]?.providerRatings[index]?.length > 0 ? (
//                           ratings[service._id].providerRatings[index].map(rating => (
//                             <Typography key={rating._id} variant="body2">
//                               {rating.rating} - {rating.comment}
//                             </Typography>
//                           ))
//                         ) : (
//                           <Typography variant="body2" color="text.secondary">No ratings yet</Typography>
//                         )}
//                       </ProviderItem>
//                     ))}
//                   </ProvidersList>
//                 ) : (
//                   <Typography variant="body2" color="text.secondary">No providers available</Typography>
//                 )}
//                 {/* Service Ratings */}
//                 <Typography variant="h6" gutterBottom>Service Ratings:</Typography>
//                 {ratings[service._id]?.serviceRatings.length > 0 ? (
//                   ratings[service._id].serviceRatings.map(rating => (
//                     <Typography key={rating._id} variant="body2">
//                       {rating.rating} - {rating.comment}
//                     </Typography>
//                   ))
//                 ) : (
//                   <Typography variant="body2" color="text.secondary">No ratings yet</Typography>
//                 )}
//                 <Button 
//                   variant="contained" 
//                   color="primary" 
//                   onClick={() => handleAddToCart(service)}
//                   sx={{ marginTop: '10px' }}
//                 >
//                   Add to Cart
//                 </Button>
//               </CardContent>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>
//     </BackgroundContainer>
//   );
// };

// export default ServicesByCategory;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, CircularProgress, Grid, Alert, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled components
const BackgroundContainer = styled('div')({
  // backgroundImage: 'url(https://img.freepik.com/premium-vector/colorful-background-with-colorful-box-colored-squares_1120557-40067.jpg?semt=ais_hybrid)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  padding: '20px',
});

const StyledCard = styled(Card)({
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
  },
});

const ProvidersList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: '10px 0',
});

const ProviderItem = styled('li')({
  marginBottom: '5px',
});

// Star rating function
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? '#FFD700' : '#ddd' }}>
        ★
      </span>
    );
  }
  return <Box>{stars}</Box>;
};

const ServicesByCategory = ({ cart, setCart }) => {
  const { categoryId } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/services/category/${categoryId}`);
        setServices(response.data);

        const ratingsPromises = response.data.map(async (service) => {
          const serviceRatings = await axios.get(`http://localhost:5000/api/ratings/Service/${service._id}`);
          const providerRatingsPromises = service.providers.map(async (provider) => {
            const providerRatings = await axios.get(`http://localhost:5000/api/ratings/Provider/${provider._id}`);
            return providerRatings.data;
          });

          const providerRatings = await Promise.all(providerRatingsPromises);
          return {
            serviceId: service._id,
            serviceRatings: serviceRatings.data,
            providerRatings,
          };
        });

        const ratingsData = await Promise.all(ratingsPromises);
        const ratingsMap = {};
        ratingsData.forEach(({ serviceId, serviceRatings, providerRatings }) => {
          ratingsMap[serviceId] = {
            serviceRatings,
            providerRatings,
          };
        });

        setRatings(ratingsMap);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [categoryId]);

  const handleAddToCart = (service) => {
    setCart((prevCart) => [...prevCart, service]);
  };

  return (
    <BackgroundContainer>
      <Typography variant="h4" gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>
        Services
      </Typography>
      {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service._id}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5">{service.name}</Typography>
                <Typography variant="body2" color="text.secondary">{service.description}</Typography>
                <Typography variant="h6" color="primary">${service.price}</Typography>
                <Typography variant="h6" gutterBottom>Providers:</Typography>
                {service.providers.length > 0 ? (
                  <ProvidersList>
                    {service.providers.map((provider, index) => (
                      <ProviderItem key={provider._id}>
                        <Typography variant="body2">{provider.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{provider.email}</Typography>
                        <Typography variant="h6" gutterBottom>Provider Ratings:</Typography>
                        {ratings[service._id]?.providerRatings[index]?.length > 0 ? (
                          ratings[service._id].providerRatings[index].map((rating) => (
                            <div key={rating._id}>
                              {renderStars(rating.rating)}
                              <Typography variant="body2">{rating.comment}</Typography>
                            </div>
                          ))
                        ) : (
                          <Typography variant="body2" color="text.secondary">No ratings yet</Typography>
                        )}
                      </ProviderItem>
                    ))}
                  </ProvidersList>
                ) : (
                  <Typography variant="body2" color="text.secondary">No providers available</Typography>
                )}
                <Typography variant="h6" gutterBottom>Service Ratings:</Typography>
                {ratings[service._id]?.serviceRatings.length > 0 ? (
                  ratings[service._id].serviceRatings.map((rating) => (
                    <div key={rating._id}>
                      {renderStars(rating.rating)}
                      <Typography variant="body2">{rating.comment}</Typography>
                    </div>
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary">No ratings yet</Typography>
                )}
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => handleAddToCart(service)}
                  sx={{ marginTop: '10px' }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </BackgroundContainer>
  );
};

export default ServicesByCategory;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Card, CardContent, Typography, CircularProgress, Grid, Alert, Button, Box } from '@mui/material';
// import { styled } from '@mui/system';

// // Styled components
// const BackgroundContainer = styled('div')({
//   // backgroundImage: 'url(https://img.freepik.com/premium-vector/colorful-background-with-colorful-box-colored-squares_1120557-40067.jpg?semt=ais_hybrid)',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   minHeight: '100vh',
//   padding: '20px',
// });

// const StyledCard = styled(Card)({
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   borderRadius: '16px',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
//   },
// });

// const ProvidersList = styled('ul')({
//   listStyleType: 'none',
//   padding: 0,
//   margin: '10px 0',
// });

// const ProviderItem = styled('li')({
//   marginBottom: '5px',
// });

// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     stars.push(
//       <span key={i} style={{ color: i <= rating ? '#FFD700' : '#ddd' }}>
//         ★
//       </span>
//     );
//   }
//   return <Box>{stars}</Box>;
// };

// const ServicesByCategory = ({ cart, setCart }) => {
//   const { categoryId } = useParams();
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [ratings, setRatings] = useState({});

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/services/category/${categoryId}`);
//         setServices(response.data);

//         const ratingsPromises = response.data.map(async (service) => {
//           const serviceRatings = await axios.get(`http://localhost:5000/api/ratings/Service/${service._id}`);
//           const providerRatingsPromises = service.providers.map(async (provider) => {
//             const providerRatings = await axios.get(`http://localhost:5000/api/ratings/Provider/${provider._id}`);
//             return providerRatings.data;
//           });

//           const providerRatings = await Promise.all(providerRatingsPromises);
//           return {
//             serviceId: service._id,
//             serviceRatings: serviceRatings.data,
//             providerRatings,
//           };
//         });

//         const ratingsData = await Promise.all(ratingsPromises);
//         const ratingsMap = {};
//         ratingsData.forEach(({ serviceId, serviceRatings, providerRatings }) => {
//           ratingsMap[serviceId] = {
//             serviceRatings,
//             providerRatings,
//           };
//         });

//         setRatings(ratingsMap);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, [categoryId]);

//   const handleAddToCart = (service) => {
//     setCart((prevCart) => [...prevCart, service]);
//   };

//   return (
//     <BackgroundContainer>
//       <Typography variant="h4" gutterBottom sx={{ color: '#fff', textAlign: 'center' }}>
//         Services
//       </Typography>
//       {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />}
//       {error && <Alert severity="error">{error}</Alert>}
//       <Grid container spacing={3}>
//         {services.map((service) => (
//           <Grid item xs={12} sm={6} md={4} key={service._id}>
//             <StyledCard>
//               <CardContent>
//                 <Typography variant="h5">{service.name}</Typography>
//                 <Typography variant="body2" color="text.secondary">{service.description}</Typography>
//                 <Typography variant="h6" color="primary">${service.price}</Typography>
//                 <Typography variant="h6" gutterBottom>Providers:</Typography>
//                 {service.providers.length > 0 ? (
//                   <ProvidersList>
//                     {service.providers.map((provider, index) => (
//                       <ProviderItem key={provider._id}>
//                         <Typography variant="body2">{provider.name}</Typography>
//                         <Typography variant="body2" color="text.secondary">{provider.email}</Typography>
//                         <Typography variant="h6" gutterBottom>Provider Ratings:</Typography>
//                         {ratings[service._id] && ratings[service._id].providerRatings[index]
//                           ? renderStars(ratings[service._id].providerRatings[index])
//                           : <Typography>No ratings available</Typography>}
//                       </ProviderItem>
//                     ))}
//                   </ProvidersList>
//                 ) : (
//                   <Typography>No providers available</Typography>
//                 )}

//                 <Typography variant="h6" gutterBottom>Service Ratings:</Typography>
//                 {ratings[service._id] && ratings[service._id].serviceRatings
//                   ? renderStars(ratings[service._id].serviceRatings)
//                   : <Typography>No ratings available</Typography>}

//                 <Button variant="contained" color="primary" onClick={() => handleAddToCart(service)}>
//                   Add to Cart
//                 </Button>
//               </CardContent>
//             </StyledCard>
//           </Grid>
//         ))}
//       </Grid>
//     </BackgroundContainer>
//   );
// };

// export default ServicesByCategory;
