import { FEATURES } from '../constants';

interface FeaturesListProps {
  openIndex: number;
  setOpenIndex: (index: number) => void;
}

const FeaturesList = ({ openIndex, setOpenIndex }: FeaturesListProps) => {
  return (
    <ul className='flex flex-col gap-4 '>
      {FEATURES.map((feature, index) => (
        <li
          key={index}
          className={`flex gap-4 ${
            openIndex === index ? 'bg-[#D1D9E6] text-neutral-950' : ''
          } rounded-xl w-full p-4 cursor-pointer select-none`}
          onClick={() => setOpenIndex(index)}
        >
          <span
            className={`${
              openIndex === index ? 'text-red-600' : 'text-[#D1D9E6]'
            }`}
          >
            <feature.icon />
          </span>
          <div>
            <h3 className='font-medium'>{feature.title}</h3>
            <p className='text-sm'>{feature.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
