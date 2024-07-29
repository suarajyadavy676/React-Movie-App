import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Drawer,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

function Drawers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="none" onClick={onOpen}>
        <GiHamburgerMenu className="text-2xl" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"black"} textColor={"white"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Link to="/" className="hover:text-red-600 hover:underline">Home</Link>
          </DrawerHeader>
          <DrawerBody>
            <div className="m-2">
              <Link to="/login" className="hover:text-red-600 hover:underline">Login</Link>
            </div>
            <div className="m-2">
              <Link to="/sign-up" className="hover:text-red-600 hover:underline">Sign Up</Link>
            </div>
            <div className="m-2">
              <Link to="/action-adventure" className="hover:text-red-600 hover:underline">Action</Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Drawers;
