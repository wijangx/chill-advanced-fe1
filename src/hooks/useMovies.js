import { useState, useEffect, useCallback } from "react";
import {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from "../services/api/movieApi";
import { topRating as initialTopRating } from "../data/movies";

// Kunci global agar React StrictMode tidak melakukan seed 2x bersamaan
let isSeedingLock = false;

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    if (isSeedingLock) return;
    setIsLoading(true);
    setError(null);

    try {
      const data = await getMovies();

      if (data.length === 0) {
        // 1. Jika MockAPI masih kosong (0 data), isi otomatis 1x saja
        isSeedingLock = true;
        const seededMovies = [];
        for (const item of initialTopRating) {
          const { id: _unusedId, ...moviePayload } = item;
          const created = await addMovie(moviePayload);
          seededMovies.push(created);
        }
        setMovies(seededMovies);
        isSeedingLock = false;
      } else {
        // 2. Auto-Clean jika ada film duplikat akibat StrictMode sebelumnya
        const seenTitles = new Set();
        const uniqueMovies = [];
        const duplicateIds = [];

        for (const movie of data) {
          if (seenTitles.has(movie.title)) {
            duplicateIds.push(movie.id);
          } else {
            seenTitles.add(movie.title);
            uniqueMovies.push(movie);
          }
        }

        if (duplicateIds.length > 0) {
          isSeedingLock = true;
          await Promise.all(duplicateIds.map((id) => deleteMovie(id)));
          isSeedingLock = false;
        }

        setMovies(uniqueMovies);
      }
    } catch (err) {
      isSeedingLock = false;
      setError("Gagal memuat data film dari server API.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Fungsi ADD (POST ke API)
  const handleAddMovie = async (newMovieData) => {
    try {
      const createdMovie = await addMovie(newMovieData);
      setMovies((prev) => [createdMovie, ...prev]);
      return createdMovie;
    } catch (err) {
      setError("Gagal menambahkan film baru ke server.");
      throw err;
    }
  };

  // Fungsi UPDATE (PUT ke API)
  const handleUpdateMovie = async (id, updatedData) => {
    try {
      const updatedMovie = await updateMovie(id, updatedData);
      setMovies((prev) =>
        prev.map((item) => (item.id === id ? updatedMovie : item))
      );
      return updatedMovie;
    } catch (err) {
      setError("Gagal memperbarui data film di server.");
      throw err;
    }
  };

  // Fungsi DELETE (DELETE ke API)
  const handleRemoveMovie = async (id) => {
    try {
      await deleteMovie(id);
      setMovies((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError("Gagal menghapus film dari server.");
      throw err;
    }
  };

  return {
    movies,
    isLoading,
    error,
    fetchMovies,
    handleAddMovie,
    handleUpdateMovie,
    handleRemoveMovie,
  };
}