import { FeaturesSectionDemo } from "../../../components/doctor/DocFeat";
import Footer from "@/components/Footer";
import Hero from "../../../components/doctor/DocHero";
import { NavbarDemo } from "../../../components/doctor/DocNav";
import Image from "next/image";

export default function DoctorDashboard() {
  return (
    <div>
      <div>
        <Hero />
        <div className="mt-36 border-t-2">
          <h4 className="text-3xl mt-4  lg:text-4xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            Supports
          </h4>
          <FeaturesSectionDemo />
        </div>
        <div className="mt-36 border-t-2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
