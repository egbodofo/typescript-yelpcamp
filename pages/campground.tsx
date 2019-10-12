import Show from '../src/components/Campgrounds/Show/Show';

const ShowCamp = ({ id }) => {
  return <Show id={id} />;
};

ShowCamp.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default ShowCamp;
