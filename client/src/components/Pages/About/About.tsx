import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";

function About() {
  return (
    <>
      <GridBackgroundDemo>
        <h1 className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-5xl font-bold text-transparent sm:text-7xl">
          Hello World 🌍
        </h1>
      </GridBackgroundDemo>
    </>
  );
}

export default About;
