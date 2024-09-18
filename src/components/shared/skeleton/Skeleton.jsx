import "./skeleton.css";
const Skeleton = ({ type }) => {
  const CardSkeleton = () => (
    <div className='card-dashboard col-lg-3 col-md-3 d-flex align-items-center justify-content-evenly'>
      <div className='sk pt-4'>
        <div className='d-flex mt-3 card-skeleton'>
          <div className='sk-radio'></div>
          <div className='task-icon'></div>
          <div className='ml-3'>
            <h3 className='sk-main'></h3>
            <p className='sk-sub'></p>
          </div>
        </div>
      </div>
    </div>
  );
  if (type === "card") {
    return <CardSkeleton />;
  }
};

export default Skeleton;
