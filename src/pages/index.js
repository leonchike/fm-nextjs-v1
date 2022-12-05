import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Index</h1>

      <div>
        <Link href="/notes">To Notes</Link>
      </div>
    </div>
  );
};

export default Page;
