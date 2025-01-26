import { Helmet } from "react-helmet-async";

const Statistics = () => {
  return (
    <div>
      <Helmet>
        <title>Statistics</title>
      </Helmet>
      <div className="container min-h-full h-[800px] flex flex-col items-center justify-center">
        <h1 className="big-title">Statistics</h1>
      </div>
    </div>
  );
};

export default Statistics;
