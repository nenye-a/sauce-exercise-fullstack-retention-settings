import { useLocation } from 'react-router-dom';

export default function useUrlQueryParams() {
  return new URLSearchParams(useLocation().search);
}
