import { FaUserPlus, FaCheckCircle, FaCreditCard, FaKey } from "react-icons/fa";
import IconCreateAccount from '../assets/images/create-account-icon.png'
import IconChooseAccount from '../assets/images/choose-account-icon.png'
import IconMakePayment from '../assets/images/make-payment-icon.png'
import IconReceivePayment from '../assets/images/receive-payment-icon.png'

const steps = [
  {
    // icon: <FaUserPlus className="text-blue-500 text-4xl" />,
    image: {IconCreateAccount},
    title: "Create Account",
    description: "Register on Sociafy using a valid information."
  },
  {
    image: {IconChooseAccount},
    title: "Choose an Account",
    description: "Choose from our verified social media account that suits you."
  },
  {
    image: {IconMakePayment},
    title: "Make Payment",
    description: "Pay securely using your preferred payment method."
  },
  {
    image: {IconReceivePayment},
    title: "Receive your Login Instantly",
    description: "Receive the account credentials immediately after payment."
  }
];

export default function GetStarted() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h2 className="text-3xl font-bold mb-8">Get Started in <span className="text-[#7B36E7]"> 4 Easy Steps</span></h2>
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center p-6 shadow-lg rounded-lg">
            <img src={step.image} alt="fast-services" srcset="" height="50px" width="50px" />
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
