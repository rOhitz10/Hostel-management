import { TeamCard } from "./TeamMember";
function About() {

  const ahad = {
    name: "Ankita Pathania",
    designation: "Girls Hostel",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const danish = {
    name: "Babi Ram",
    designation: "Boys Hostel 1",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const abubakar = {
    name: "Mahinder Singh",
    designation: "Boys hostel 2",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const muneeb = {
    name: "Sukhjeet Singh Bajwa",
    designation: "Senior Warden",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };
  const arsal = {
    name: "ABC",
    designation: "Chief Warden",
    image:
      "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
  };

  return (
    <>
      <h1 className="font-bold text-white text-center text-5xl">
        Meet Our Team!
      </h1>
      <div className="py-20 sm:py-25 flex gap-10 flex-wrap justify-center align-center">
        <TeamCard member={ahad} />
        <TeamCard member={danish} />
        <TeamCard member={abubakar} />
        <TeamCard member={arsal} />
        <TeamCard member={muneeb} />
      </div>
    </>
  );
}
export { About };

