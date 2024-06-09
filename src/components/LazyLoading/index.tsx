import CircularProgress from '@mui/material/CircularProgress';
import { StyledLazyLoading } from './styled';

const LazyLoading = () => {
  return (
    <StyledLazyLoading>
      <CircularProgress />
    </StyledLazyLoading>
  );
};

export default LazyLoading;
