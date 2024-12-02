"use client";

import {
  ModalFooter,
  ModalHeader,
  Button,
  ModalBody,
  Modal,
  ModalContent,
  Card,
  CardHeader,
  Image,
  Divider,
  CardBody,
  CardFooter,
  Link,
  useDisclosure,
} from "@nextui-org/react";

import { Logo } from "../_components/icons";

import { siteConfig } from "@/config/site";

export default function ProjectsPage() {
  const cards = siteConfig.projects.map((project) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
      <div className="flex justify-center" key={project.name}>
        <Modal isOpen={isOpen} placement="center" onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-row items-center gap-1">
                  {project.image ? (
                    <Image
                      alt="logo"
                      height={40}
                      radius="sm"
                      src={project.image}
                      width={40}
                    />
                  ) : (
                    <Logo />
                  )}
                  {project.name}
                </ModalHeader>
                <ModalBody>{project.fullDescription}</ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Card isPressable className="max-w-[400px]" onPress={onOpen}>
          <CardHeader className="flex gap-3">
            {project.image ? (
              <Image
                alt="logo"
                height={40}
                radius="sm"
                src={project.image}
                width={40}
              />
            ) : (
              <Logo />
            )}
            <div className="flex flex-col">
              <p className="text-md">{project.name}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{project.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href={project.link}>
              Visit page.
            </Link>
            <Link isExternal showAnchorIcon href={project.github}>
              Visit source code on GitHub.
            </Link>
          </CardFooter>
        </Card>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 w-full">
      {cards}
    </div>
  );
}
