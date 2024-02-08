import HeroPart from "../HeroPart/HeroPart";
import JobcategoryList from "../JobcategoryList/JobcategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <HeroPart></HeroPart>
      <JobcategoryList></JobcategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
