import PropTypes from 'prop-types';

const arrayOfAvatars = [
  'https://robohash.org/udsbnudhfksuduhk.png?size=50x50&set=set1',
  'https://robohash.org/autinvenrfssdfsu.png?size=50x50&set=set1',
  'https://robohash.org/lsdkfjlskdjflask.png?size=50x50&set=set1',
  'https://robohash.org/ksdjfosilsmncisk.png?size=50x50&set=set1',
  'https://robohash.org/sldfklsjdflssunt.png?size=50x50&set=set1',
  'https://robohash.org/autinventoresunt.png?size=50x50&set=set1',
  'https://robohash.org/lsifjs,dkfjslijf.png?size=50x50&set=set1',
  'https://robohash.org/ssdlsijsd.kfjsld.png?size=50x50&set=set1',
  'https://robohash.org/sl;lkskjfiskddin.png?size=50x50&set=set1',
  'https://robohash.org/sl;ssiufsdjujddf.png?size=50x50&set=set1',
  'https://robohash.org/sl;aafsdffdsegdf.png?size=50x50&set=set1',
  'https://robohash.org/sl;argamfdfgdrgd.png?size=50x50&set=set1',
  'https://robohash.org/sl;naergnrnadrnr.png?size=50x50&set=set1',
  'https://robohash.org/sl;rmdrgmsdfbdre.png?size=50x50&set=set1',
];

const AvatarExamples = ({ handleAvatarSelect }) => (
  <div className="mx-5 flex h-96 w-80 flex-col justify-center overflow-y-auto rounded-lg bg-white shadow-md">
    <div className="flex h-16 w-full items-center justify-center bg-blue-600 text-center text-lg text-white ">
      Choose Avatar
    </div>
    <div className="flex flex-wrap items-center justify-center overflow-y-auto rounded-lg bg-white p-4 text-xs">
      {arrayOfAvatars.map((link, idx) => (
        <div key={idx} className="my-1 flex flex-row items-center">
          <img src={link} alt="Avatar" className="m-1 rounded-full border border-blue-500" />
          <button
            type="button"
            className="mx-1 rounded border border-green-600 px-2 text-green-600 hover:bg-green-600 hover:text-white"
            onClick={() => handleAvatarSelect(link)}
          >
            Select
          </button>
        </div>
      ))}
    </div>
  </div>
);

AvatarExamples.propTypes = {
  handleAvatarSelect: PropTypes.func,
};

export default AvatarExamples;
