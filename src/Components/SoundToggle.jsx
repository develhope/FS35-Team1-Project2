
import { useSound } from "./SoundProvider"; // importa dal context

const SoundToggle = () => {
  const { isSoundOn, setIsSoundOn } = useSound(); // usa il context

  const handleToggle = () => {
    setIsSoundOn((prev) => !prev);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="me-3 text-m md:text-3xl lg:text-3xl font-normal text-gray-900 dark:text-gray-300 pr-2">
        {isSoundOn ? "Sound On" : "Sound Off"}
      </span>

      <input
        type="checkbox"
        checked={isSoundOn}
        onChange={handleToggle}
        className="sr-only peer"
      />

      <div
        className="
          relative w-10 h-5 
          md:w-16 md:h-9 
          lg:w-16 lg:h-8
          bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 
          dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 
          peer-checked:after:translate-x-4 
          md:peer-checked:after:translate-x-6 
          lg:peer-checked:after:translate-x-8 
          peer-checked:after:border-white 
          after:content-[''] after:absolute  
          after:bg-white after:border-gray-300 after:border after:rounded-full
          after:h-4 after:w-4  after:top-[2px] after:left-[3px]
          md:after:h-7 md:after:w-7 md:after:top-[4px] md:after:left-[5px] 
          lg:after:h-6 lg:after:w-6 
          after:transition-all dark:border-gray-600 
          peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
      />
    </label>
  );
};

export default SoundToggle;
