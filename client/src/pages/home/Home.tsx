import { Text, Button, Flex, Image } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

import lock from "assets/images/Lock.png";
import "./Home.css";
import graph from "./Graph.png";

function Home() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/products");
  };

  return (
    <div className="Home">
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <div className="MainText">
            <Text c="black" className="LandingText">
              Sell and buy your items through BlockChain
            </Text>

            {/* <Button
              onClick={navigateToHome}
              className="ButtonLanding"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            > */}
            <Link
              to="/products"
              className="px-2 py-3 text-white rounded-lg shadow-md bg-blue-300 flex items-center justify-center text-center uppercase hover:bg-blue-500 cursor-pointer"
            >
              Go Buy
            </Link>
            {/* </Button> */}
          </div>
        </Flex>
        <Image src={lock} maw={340} />
      </Flex>
      <div className="SecondLanding">
        <h1>Fast and secure transactions with our currency</h1>
      </div>
      <div className="thirdpart">
        <div className="BalanceText">
          <h1>Check your balance through Polkadot’s Wallet</h1>
        </div>
        <img src={graph} alt="Graph" width="600px" />
      </div>
    </div>
  );
}

export { Home };
