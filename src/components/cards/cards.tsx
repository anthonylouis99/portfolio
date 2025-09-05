// ServiceCard.tsx
import { type FC } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  isLink?:boolean
  ref?:string
};

const ServiceCard: FC<ServiceCardProps> = ({ title, description, icon ,isLink,ref}) => {
  return (
    <div className="flex h-full flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300 ease-in-out">
      <div className="text-4xl text-gray-600 mb-3">{icon}</div>
      <h3 className={`text-lg ${isLink?'text-[var(--color-primary))]':"text-gray-800"}  font-semibold mb-2`}>{isLink?<a href={ref}>{title}</a>:title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
