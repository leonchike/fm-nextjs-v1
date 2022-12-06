import { useEffect } from "react";

const SponsoredAd = () => {
  useEffect(() => {
    console.log(document.body);
  }, []);

  return (
    <div>
      <h3>Sponsored Ad</h3>
      <p> This is a sponsored ad. </p>
    </div>
  );
};

export default SponsoredAd;
