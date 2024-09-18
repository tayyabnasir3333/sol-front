import "./loader.css";

export const Loader = ({ className }) => {
  return (
    <div className={className ? "modalLoader" : "loadingWrapper"}>
      <span className='loader'></span>
    </div>
  );
};
