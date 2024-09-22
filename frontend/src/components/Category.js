// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, CircularProgress, Grid, Alert, CardMedia, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate from React Router

// // Styled components using Material-UI
// const CategoryCard = styled(Card)({
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   borderRadius: '16px',
//   overflow: 'hidden',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
//   },
// });

// const CategoryTitle = styled(Typography)({
//   marginBottom: '20px',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   color: '#333',
// });

// const CategoryList = styled(Grid)({
//   padding: '20px',
// });

// const CardImage = styled(CardMedia)({
//   height: 140,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// });

// const CardButton = styled(Button)({
//   marginTop: '16px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#0056b3',
//   },
// });

// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate(); // Hook to navigate programmatically

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/categories');
//         setCategories(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleViewMore = (categoryId) => {
//     navigate(`/services/category/${categoryId}`); // Navigate to the services page for the clicked category
//   };

//   return (
//     <div>
//       <CategoryTitle variant="h2">Home services at your doorstep</CategoryTitle>
//       {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />}
//       {error && <Alert severity="error" sx={{ margin: '20px' }}>{error}</Alert>}
//       <CategoryList container spacing={3}>
//         {categories.map((category) => (
//           <Grid item xs={12} sm={6} md={4} key={category._id}>
//             <CategoryCard>
//               <CardImage image={`https://via.placeholder.com/300x140.png?text=${category.name}`} />
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {category.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   {category.description}
//                 </Typography>
//                 <CardButton
//                   variant="contained"
//                   size="small"
//                   onClick={() => handleViewMore(category._id)} // Trigger navigation on click
//                 >
//                   View More
//                 </CardButton>
//               </CardContent>
//             </CategoryCard>
//           </Grid>
//         ))}
//       </CategoryList>
//     </div>
//   );
// };

// export default Category;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, Typography, CircularProgress, Grid, Alert, CardMedia, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import { useNavigate } from 'react-router-dom';

// // Styled components using Material-UI
// const Container = styled('div')({
//   backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:1024/1*vZR2LdMVpa7DLDfDI8QXSA.png)',
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   padding: '20px',
//   minHeight: '100vh', // Ensures full height for the background
// });

// const CategoryCard = styled(Card)({
//   transition: 'transform 0.3s, box-shadow 0.3s',
//   borderRadius: '16px',
//   overflow: 'hidden',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//   '&:hover': {
//     transform: 'translateY(-10px)',
//     boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
//   },
// });

// const CategoryTitle = styled(Typography)({
//   marginBottom: '20px',
//   textAlign: 'center',
//   fontWeight: 'bold',
//   color: '#333',
// });

// const CategoryList = styled(Grid)({
//   padding: '20px',
// });

// const CardImage = styled(CardMedia)({
//   height: 140,
//   width: '100%',
//   objectFit: 'contain',
//   backgroundSize: 'contain',
//   backgroundPosition: 'center',
// });

// const CardButton = styled(Button)({
//   marginTop: '16px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   '&:hover': {
//     backgroundColor: '#0056b3',
//   },
// });

// const Category = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const category = [
//     {
//       _id: '66ed2bd604c47aa4f3b37a16',
//       name: 'Electrician',
//       description: 'Get all electrician Services.',
//       image: 'https://e7.pngegg.com/pngimages/966/771/png-clipart-man-holding-bulb-and-socket-electrician-electricity-handyman-electrical-contractor-electrical-wires-cable-professional-electrician-miscellaneous-service.png',
//     },
//     {
//       _id: '66ed2c3604c47aa4f3b37a19',
//       name: 'Home Appliance Service',
//       description: 'Here You will find home/appliance related services.',
//       image: 'https://www.clipartmax.com/png/middle/212-2129032_book-home-service-home-appliances-repair-services.png',
//     },
//     {
//       _id: '66ed2c5204c47aa4f3b37a1c',
//       name: 'Water Service',
//       description: 'Here You will find water related services.',
//       image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337018634/MU/SL/CO/72137044/ro-purifier-repair-service.png',
//     },
//     {
//       _id: '66ed2dc404c47aa4f3b37a21',
//       name: "Men's Salon Service",
//       description: "Here You will find Men's Salon related services for beard and hair.",
//       image: 'https://w7.pngwing.com/pngs/466/561/png-transparent-beauty-parlour-euclidean-hairdresser-hairstyle-men-s-haircut-furniture-cosmetology-cosmetics-thumbnail.png',
//     },
//   ];

//   const navigate = useNavigate(); // Hook to navigate programmatically

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/categories');
//         setCategories(response.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCategories();
//   }, []);

//   const handleViewMore = (categoryId) => {
//     navigate(`/services/category/${categoryId}`); // Navigate to the services page for the clicked category
//   };

//   return (
//     <Container>
//       <CategoryTitle variant="h2">Home Services at Your Doorstep</CategoryTitle>
//       {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />}
//       {error && <Alert severity="error" sx={{ margin: '20px' }}>{error}</Alert>}
//       <CategoryList container spacing={3}>
//         {category.map((category) => (
//           <Grid item xs={12} sm={6} md={4} key={category._id}>
//             <CategoryCard>
//               <CardImage image={category.image} />
//               <CardContent>
//                 <Typography variant="h5" component="div">
//                   {category.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   {category.description}
//                 </Typography>
//                 <CardButton
//                   variant="contained"
//                   size="small"
//                   onClick={() => handleViewMore(category._id)} // Trigger navigation on click
//                 >
//                   View More
//                 </CardButton>
//               </CardContent>
//             </CategoryCard>
//           </Grid>
//         ))}
//       </CategoryList>
//     </Container>
//   );
// };

// export default Category;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CircularProgress, Grid, Alert, CardMedia, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/actions/authActions';

// Styled components using Material-UI
const Container = styled('div')({
  // backgroundImage: 'url(https://img.freepik.com/premium-photo/colored-square-shape-white-background_165002-1532.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
  minHeight: '100vh',
});

const CategoryCard = styled(Card)({
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
  },
});

const CategoryTitle = styled(Typography)({
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#333',
  fontSize: '1.5rem', // Reduce the font size
});

const CategoryList = styled(Grid)({
  padding: '20px',
});

const CardImage = styled(CardMedia)({
  height: 140,
  width: '100%',
  objectFit: 'contain',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
});

const CardButton = styled(Button)({
  marginTop: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
});

const LogoutButton = styled(Button)({
  backgroundColor: '#ff0000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#cc0000',
  },
  position: 'absolute',
  top: 10,
  right: 20,
});

const SearchContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: 10,
  right: 120,
});

const SearchBar = styled(TextField)({
  marginLeft: '10px',
  width: '200px',
});

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const category = [
    {
      _id: '66ed2bd604c47aa4f3b37a16',
      name: 'Electrician',
      description: 'Get all electrician Services.',
      image: 'https://e7.pngegg.com/pngimages/966/771/png-clipart-man-holding-bulb-and-socket-electrician-electricity-handyman-electrical-contractor-electrical-wires-cable-professional-electrician-miscellaneous-service.png',
    },
    {
      _id: '66ed2c3604c47aa4f3b37a19',
      name: 'Home Appliance Service',
      description: 'Here You will find home/appliance related services.',
      image: 'https://www.clipartmax.com/png/middle/212-2129032_book-home-service-home-appliances-repair-services.png',
    },
    {
      _id: '66ed2c5204c47aa4f3b37a1c',
      name: 'Water Service',
      description: 'Here You will find water related services.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/337018634/MU/SL/CO/72137044/ro-purifier-repair-service.png',
    },
    {
      _id: '66ed2dc404c47aa4f3b37a21',
      name: "Men's Salon Service",
      description: "Here You will find Men's Salon related services for beard and hair.",
      image: 'https://w7.pngwing.com/pngs/466/561/png-transparent-beauty-parlour-euclidean-hairdresser-hairstyle-men-s-haircut-furniture-cosmetology-cosmetics-thumbnail.png',
    },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleViewMore = (categoryId) => {
    navigate(`/services/category/${categoryId}`);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCategories = category.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <CategoryTitle variant="h2" style={{ marginTop: '0px' }}>
        Home Services at Your Doorstep
      </CategoryTitle>

      <LogoutButton variant="contained" onClick={handleLogout}>
        Logout
      </LogoutButton>

      <SearchContainer>
        <SearchBar
          label="Search Categories"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </SearchContainer>

      {loading && <CircularProgress sx={{ display: 'block', margin: '0 auto', marginTop: '50px' }} />}
      {error && <Alert severity="error" sx={{ margin: '20px' }}>{error}</Alert>}

      <CategoryList container spacing={3}>
        {filteredCategories.map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category._id}>
            <CategoryCard>
              <CardImage image={category.image} />
              <CardContent>
                <Typography variant="h5" component="div">
                  {category.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {category.description}
                </Typography>
                <CardButton
                  variant="contained"
                  size="small"
                  onClick={() => handleViewMore(category._id)}
                >
                  View More
                </CardButton>
              </CardContent>
            </CategoryCard>
          </Grid>
        ))}
      </CategoryList>
    </Container>
  );
};

export default Category;


