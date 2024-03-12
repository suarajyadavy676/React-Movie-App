import React from "react";
import { Link } from "react-router-dom";
import { Button,DrawerOverlay,DrawerContent,DrawerCloseButton,DrawerHeader,DrawerBody,useDisclosure,Drawer } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

function Drawers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <Link to="/">Home</Link>         
          </DrawerHeader>
          <DrawerBody>
          <Link to="/action-adventure">Action</Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Drawers;
