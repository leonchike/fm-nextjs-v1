// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Notes = ({ notes }) => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => (
          <div sx={{ width: "33%", p: 2 }} key={note.id}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                <div sx={{ variant: "containers.card" }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_ROUTE}/api/note`);
  const { data } = await res.json();

  console.log(data);

  return {
    props: { notes: data },
  };
}
