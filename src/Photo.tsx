type Photosrc = {
  address: string;
  description: string;
};

const Photo = (src: Photosrc) => {
  const { address, description } = src;
  return (
    <>
      <img src={address} />
      <article>{description}</article>
    </>
  );
};

export default Photo;
