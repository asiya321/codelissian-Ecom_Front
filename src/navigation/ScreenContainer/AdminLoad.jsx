import Loadable from "react-loadable";

// import { Spinner } from "components/Loader";
import { Spinner } from "../../components/Loader";

export const Homepage = Loadable({
  loader: () => import("./../../pages/LandingPage"),
  loading: () => <Spinner />,
});

export const ProductDetail = Loadable({
  loader: () => import("./../../pages/ProductDetail"),
  loading: () => <Spinner />,
});
