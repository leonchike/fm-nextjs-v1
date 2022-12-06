// pages/index.jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import dynamic from "next/dynamic";

const SponsoredAdNoSSR = dynamic(() => import("../components/SponsoredAd"), {
  ssr: false,
});

const Index = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: "containers.page",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "left",
        height: "100%",
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
      <SponsoredAdNoSSR />
    </div>
  </div>
);

export default Index;

export function getStaticProps() {
  return {
    props: { content: { title: "My dope notes app" } },
  };
}
