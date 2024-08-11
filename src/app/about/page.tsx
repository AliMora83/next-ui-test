import { Link, Button } from "@nextui-org/react";
import NextLink from "next/link";

export default function About() {
  return (
    <section className="flex items-center justify-center h-screen gap-5">
      About Page
      <Button
      href="/"
      as={Link}
      color="success"
      showAnchorIcon
      variant="flat"
    >
      Home
    </Button>
    </section>
  );
}

