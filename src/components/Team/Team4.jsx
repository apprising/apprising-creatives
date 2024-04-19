import teamsDate from "@/data/sections/team.json";
import Image from "next/image";

function Team4() {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our Mates
              </h6>
              <h3 className="wow color-font">
                Your crew that will take you to the digital world.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item cir md-mb50">
              <div>
                <Image src={teamsDate.teams.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team4;
