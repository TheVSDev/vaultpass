// Imports
import Link from "next/link";

import HeadPage from "@/web/components/HeadPage";
import Main from "@/web/components/Main";
import Footer from "@/web/components/Footer";
import Sidebar from "@/web/components/Sidebar";
import Button from "@/web/components/Button";

// Passwords function
const Passwords = () => {
  return (
    <>
      <HeadPage />
      <Main>
        <Sidebar />
        <br />
        <Link href="/formPages/passwordForm"><Button btnLabel="Add password" /></Link>
      </Main>
      <Footer />
    </>
  );
};

export default Passwords;
