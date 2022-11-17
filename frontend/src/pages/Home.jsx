import { getLocations } from "../features/locations/locationSlice";
import { useSelector, useDispatch } from "react-redux";
import TicketBook from "../components/TicketBook";
import { useEffect } from "react";
import SpinnerElm from "../components/Spinner";
import { Heading } from "@chakra-ui/react";

function Home() {
  const { locations, isError, isSuccess, isLoading } = useSelector(
    (state) => state.location
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocations());
    //eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <SpinnerElm />;
  }

  if (isError) {
    return <Heading>Someting went wrong 404</Heading>;
  }

  if (isSuccess) {
    return (
      <section className="px-4">
        <TicketBook locations={locations} />
      </section>
    );
  }
}

export default Home;
