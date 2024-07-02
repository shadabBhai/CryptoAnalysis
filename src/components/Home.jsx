import { Box, Image} from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btcSrc.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
       
      </motion.div>
      
    </Box>
  );
};

export default Home;
