import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Expertise from "../components/Expertise";

function Home() {
  return (
    <main>

      {/* Accueil */}
      <Hero />

      {/* Statistiques */}
      <Stats />

      {/* Mon expertise */}
      <Expertise />

    </main>
  );
}

export default Home;