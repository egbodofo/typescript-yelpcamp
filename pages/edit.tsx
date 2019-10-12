import Edit from '../src/components/Campgrounds/Edit/Edit';

const EditCamp = ({ id }) => {
  return <Edit id={id} />;
};

EditCamp.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default EditCamp;
