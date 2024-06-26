import MovieDetailModal from '@/components/main/MovieDetailModal';
import { useOverlay } from '@/libs/overlay/useOverlay';

export const useOpenMovieDetailModal = () => {
  const overlay = useOverlay();

  const openMovieDetailModal = () => {
    overlay.open(({ isOpen, onClose }) => <MovieDetailModal isOpen={isOpen} onClose={onClose} />);
  };

  return { openMovieDetailModal };
};

export default useOpenMovieDetailModal;
