import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { AuthContext } from '../../contexts/authContext';


const RemoveFromFavoritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const { userId } = useContext(AuthContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("movie card ", token)
    context.removeFromFavorites(movie,token, userId);
  };
  
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;